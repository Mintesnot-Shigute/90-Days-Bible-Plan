import { Reader, Progress } from "../types";
import { isDayComplete, getDayPercent } from "./stats";

export interface DayGroupStats {
  day: number;
  totalReadingsPercent: number; // average % across all readers
  readersCompleteDay: number; // count of readers with 100% on day
  completionPercent: number; // 0-100 (same as totalReadingsPercent but named differently for clarity)
  readerStats: Array<{
    name: string;
    dayPercent: number; // 0-100 (average of 4 sections)
    dayCompleted: boolean; // true if all 4 sections = 100
  }>;
}

export function getDayGroupStats(
  day: number,
  readers: Reader[],
  progress: Progress[]
): DayGroupStats {
  const readerStats = readers.map((reader) => {
    const dayPercent = getDayPercent(reader.name, day, progress);
    const dayCompleted = isDayComplete(reader.name, day, progress);

    return {
      name: reader.name,
      dayPercent,
      dayCompleted,
    };
  });

  const totalReadingsPercent = Math.round(
    readerStats.reduce((sum, stats) => sum + stats.dayPercent, 0) / readers.length
  );
  const readersCompleteDay = readerStats.filter((s) => s.dayCompleted).length;

  return {
    day,
    totalReadingsPercent,
    readersCompleteDay,
    completionPercent: totalReadingsPercent,
    readerStats,
  };
}

/**
 * Get completed days report: list all days where reader completed all 4 sections with timestamp
 */
export function getCompletedDaysReport(
  readers: Reader[],
  progress: Progress[]
): Array<{
  readerName: string;
  day: number;
  dayPercent: number;
  timestamp: Date;
}> {
  const completed = progress
    .filter((p) => p.ot === 100 && p.nt === 100 && p.ps === 100 && p.pr === 100)
    .map((p) => ({
      readerName: p.reader_name,
      day: p.day,
      dayPercent: 100,
      timestamp: new Date(p.updated_at),
    }))
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  return completed;
}

export function getReaderActivity(
  readers: Reader[],
  progress: Progress[],
  limit = 10
): Array<{
  readerName: string;
  day: number;
  timestamp: Date;
  type: "day_complete" | "reading_complete";
}> {
  const events = progress
    .filter((p) => p.updated_at)
    .map((p) => ({
      readerName: p.reader_name,
      day: p.day,
      timestamp: new Date(p.updated_at),
      type: p.ot === 100 && p.nt === 100 && p.ps === 100 && p.pr === 100 ? ("day_complete" as const) : ("reading_complete" as const),
    }))
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, limit);

  return events;
}

export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export function getReaderStatus(
  readerDayNumber: number,
  todaysDayNumber: number
): "ahead" | "on-track" | "behind" {
  if (readerDayNumber > todaysDayNumber) return "ahead";
  if (readerDayNumber === todaysDayNumber) return "on-track";
  return "behind";
}
