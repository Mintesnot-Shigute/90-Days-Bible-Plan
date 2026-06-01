import { Progress, Reader } from "../types";
import { getTodaysDayNumber } from "./dates";

export function getReaderProgress(
  readerName: string,
  progress: Progress[]
): Map<number, { ot: number; nt: number; ps: number; pr: number }> {
  const map = new Map();
  progress
    .filter((p) => p.reader_name === readerName)
    .forEach((p) => {
      map.set(p.day, { ot: p.ot, nt: p.nt, ps: p.ps, pr: p.pr });
    });
  return map;
}

/**
 * Calculate day completion percentage (0-100)
 * Returns average of four section percentages
 */
export function getDayPercent(
  readerName: string,
  day: number,
  progress: Progress[]
): number {
  const p = progress.find((x) => x.reader_name === readerName && x.day === day);
  if (!p) return 0;
  return Math.round((p.ot + p.nt + p.ps + p.pr) / 4);
}

/**
 * Check if a day is fully complete (all 4 sections = 100%)
 */
export function isDayComplete(
  readerName: string,
  day: number,
  progress: Progress[]
): boolean {
  const p = progress.find((x) => x.reader_name === readerName && x.day === day);
  return p ? p.ot === 100 && p.nt === 100 && p.ps === 100 && p.pr === 100 : false;
}

export function countCompleteDays(
  readerName: string,
  progress: Progress[]
): number {
  return progress.filter(
    (p) =>
      p.reader_name === readerName &&
      p.ot === 100 &&
      p.nt === 100 &&
      p.ps === 100 &&
      p.pr === 100
  ).length;
}

export function calculateStreak(
  readerName: string,
  progress: Progress[]
): number {
  let streak = 0;
  for (let day = 1; day <= 90; day++) {
    if (isDayComplete(readerName, day, progress)) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

export function calculateGroupPercent(
  readers: Reader[],
  progress: Progress[]
): number {
  if (readers.length === 0) return 0;
  const totalDays = readers.length * 90;
  const completedDays = readers.reduce((sum, reader) => {
    return sum + countCompleteDays(reader.name, progress);
  }, 0);
  return Math.round((completedDays / totalDays) * 100);
}

export function getFirstIncompletDay(
  readerName: string,
  progress: Progress[]
): number {
  for (let day = 1; day <= 90; day++) {
    if (!isDayComplete(readerName, day, progress)) {
      return day;
    }
  }
  return 90;
}

export function getReaderStats(
  readerName: string,
  readers: Reader[],
  progress: Progress[]
) {
  const daysComplete = countCompleteDays(readerName, progress);
  const streak = calculateStreak(readerName, progress);
  return {
    daysComplete,
    streak,
    percent: Math.round((daysComplete / 90) * 100),
  };
}

/**
 * Calculate fine in birr for missed days (50 birr per missed day)
 * A day is considered missed if it has passed (before today) and is not complete
 */
export function calculateFine(
  readerName: string,
  progress: Progress[]
): number {
  const todaysDayNumber = getTodaysDayNumber();
  let missedDays = 0;

  // Count missed days: any day that has passed and is not complete
  for (let day = 1; day < todaysDayNumber; day++) {
    if (!isDayComplete(readerName, day, progress)) {
      missedDays++;
    }
  }

  return missedDays * 50; // 50 birr per missed day
}

