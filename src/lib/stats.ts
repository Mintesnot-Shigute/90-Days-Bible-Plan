import { Progress, Reader } from "../types";

export function getReaderProgress(
  readerName: string,
  progress: Progress[]
): Map<number, { ot: boolean; nt: boolean; ps: boolean; pr: boolean }> {
  const map = new Map();
  progress
    .filter((p) => p.reader_name === readerName)
    .forEach((p) => {
      map.set(p.day, { ot: p.ot, nt: p.nt, ps: p.ps, pr: p.pr });
    });
  return map;
}

export function isDayComplete(
  readerName: string,
  day: number,
  progress: Progress[]
): boolean {
  const p = progress.find((x) => x.reader_name === readerName && x.day === day);
  return p ? p.ot && p.nt && p.ps && p.pr : false;
}

export function countCompleteDays(
  readerName: string,
  progress: Progress[]
): number {
  return progress.filter(
    (p) =>
      p.reader_name === readerName &&
      p.ot &&
      p.nt &&
      p.ps &&
      p.pr
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
