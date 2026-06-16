export const START_DATE = new Date(2026, 5, 1); // June 1, 2026

// ETHIOPIAN DAY SYSTEM: A day runs from 6:00 AM to 5:59:59 AM the next calendar day
// Times between 12:00 AM and 5:59 AM are considered part of the previous Ethiopian day
const ETHIOPIAN_DAY_START_HOUR = 6;

/**
 * Get the Ethiopian day adjustment factor based on current time
 * Returns -1 if current time is between 12:00 AM and 5:59 AM (previous Ethiopian day)
 * Returns 0 if current time is between 6:00 AM and 11:59 PM (current Ethiopian day)
 */
function getEthiopianDayAdjustment(date?: Date): number {
  const targetDate = date || new Date();
  const hours = targetDate.getHours();
  
  // If time is between 00:00 (0) and 05:59 (5), we're in the previous Ethiopian day
  if (hours < ETHIOPIAN_DAY_START_HOUR) {
    return -1;
  }
  
  // If time is between 06:00 (6) and 23:59 (23), we're in the current Ethiopian day
  return 0;
}

/**
 * Get the Ethiopian day date (normalized to the start of the 6 AM boundary)
 * This converts a regular date to its Ethiopian day equivalent
 */
function getEthiopianDayDate(date: Date): Date {
  const ethiopianDate = new Date(date);
  const adjustment = getEthiopianDayAdjustment(date);
  
  if (adjustment === -1) {
    // We're in the early morning hours, so subtract a day to get the Ethiopian day
    ethiopianDate.setDate(ethiopianDate.getDate() - 1);
  }
  
  // Normalize to midnight for comparison
  ethiopianDate.setHours(0, 0, 0, 0);
  return ethiopianDate;
}

/**
 * Check if a given timestamp falls within a specific Ethiopian day
 * @param timestamp - The timestamp to check
 * @param dayNumber - The Ethiopian day number to check against
 * @returns true if the timestamp falls within the Ethiopian day
 */
export function isTimestampInEthiopianDay(timestamp: Date, dayNumber: number): boolean {
  const timestampEthiopianDay = getEthiopianDayDate(timestamp);
  const dayStart = getDayDate(dayNumber);
  dayStart.setHours(0, 0, 0, 0);
  
  return timestampEthiopianDay.getTime() === dayStart.getTime();
}

/**
 * Get the current Ethiopian day number and the time until the next Ethiopian day
 * @returns object with dayNumber and millisUntilNextDay
 */
export function getCurrentEthiopianDay(): { dayNumber: number; millisUntilNextDay: number } {
  const dayNumber = getTodaysDayNumber();
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds();
  
  // Calculate milliseconds until 6:00 AM tomorrow
  let millisUntilNextDay: number;
  
  if (hours < ETHIOPIAN_DAY_START_HOUR) {
    // We're before 6 AM, so next day boundary is at 6 AM today
    const sixAMToday = new Date(now);
    sixAMToday.setHours(ETHIOPIAN_DAY_START_HOUR, 0, 0, 0);
    millisUntilNextDay = sixAMToday.getTime() - now.getTime();
  } else {
    // We're at or after 6 AM, so next day boundary is at 6 AM tomorrow
    const sixAMTomorrow = new Date(now);
    sixAMTomorrow.setDate(sixAMTomorrow.getDate() + 1);
    sixAMTomorrow.setHours(ETHIOPIAN_DAY_START_HOUR, 0, 0, 0);
    millisUntilNextDay = sixAMTomorrow.getTime() - now.getTime();
  }
  
  return { dayNumber, millisUntilNextDay };
}

export function getDayDate(dayNumber: number): Date {
  const date = new Date(START_DATE);
  date.setDate(date.getDate() + (dayNumber - 1));
  return date;
}

export function getTodaysDayNumber(): number {
  const today = getEthiopianDayDate(new Date());
  const startDateCopy = new Date(START_DATE);
  startDateCopy.setHours(0, 0, 0, 0);
  
  const daysDiff = Math.floor((today.getTime() - startDateCopy.getTime()) / (1000 * 60 * 60 * 24));
  const dayNumber = daysDiff + 1;
  
  return Math.max(1, Math.min(90, dayNumber));
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  });
}

/**
 * Format time in 12-hour format with AM/PM
 * @param date - The date object to format
 * @returns formatted time string (e.g., "2:30 PM")
 */
export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export function isPlanComplete(): boolean {
  return getTodaysDayNumber() > 90;
}
