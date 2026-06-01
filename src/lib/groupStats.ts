import { Reader, Progress } from "../types";

export interface DayGroupStats {
  day: number;
  totalReadingsCompleted: number; // 0-32 (8 readers × 4 readings)
  readersCompleteDay: number; // 0-8
  completionPercent: number; // 0-100
  readerStats: Array<{
    name: string;
    readingsCompleted: number; // 0-4
    dayCompleted: boolean;
    completionPercent: number;
  }>;
}

export function getDayGroupStats(
  day: number,
  readers: Reader[],
  progress: Progress[]
): DayGroupStats {
  const readerStats = readers.map((reader) => {
    const dayProgress = progress.find(
      (p) => p.reader_name === reader.name && p.day === day
    );

    const readingsCompleted = dayProgress
      ? [dayProgress.ot, dayProgress.nt, dayProgress.ps, dayProgress.pr].filter(
          Boolean
        ).length
      : 0;

    const dayCompleted = readingsCompleted === 4;

    return {
      name: reader.name,
      readingsCompleted,
      dayCompleted,
      completionPercent: Math.round((readingsCompleted / 4) * 100),
    };
  });

  const totalReadingsCompleted = readerStats.reduce(
    (sum, stats) => sum + stats.readingsCompleted,
    0
  );
  const readersCompleteDay = readerStats.filter((s) => s.dayCompleted).length;
  const maxReadings = readers.length * 4;
  const completionPercent = Math.round((totalReadingsCompleted / maxReadings) * 100);

  return {
    day,
    totalReadingsCompleted,
    readersCompleteDay,
    completionPercent,
    readerStats,
  };
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
      type: p.ot && p.nt && p.ps && p.pr ? ("day_complete" as const) : ("reading_complete" as const),
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
