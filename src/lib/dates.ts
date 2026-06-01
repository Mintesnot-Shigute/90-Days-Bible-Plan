export const START_DATE = new Date(2026, 5, 1); // June 1, 2026

export function getDayDate(dayNumber: number): Date {
  const date = new Date(START_DATE);
  date.setDate(date.getDate() + (dayNumber - 1));
  return date;
}

export function getTodaysDayNumber(): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
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

export function isPlanComplete(): boolean {
  return getTodaysDayNumber() > 90;
}
