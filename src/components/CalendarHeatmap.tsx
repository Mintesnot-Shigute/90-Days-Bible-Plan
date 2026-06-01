import { Reader, Progress } from "../types";
import { getDayDate, formatDateShort } from "../lib/dates";

interface CalendarHeatmapProps {
  reader: string;
  progress: Progress[];
}

export function CalendarHeatmap({ reader, progress }: CalendarHeatmapProps) {
  const getIntensity = (day: number): number => {
    const dayProgress = progress.find(
      (p) => p.reader_name === reader && p.day === day
    );
    if (!dayProgress) return 0;
    const completed = [dayProgress.ot, dayProgress.nt, dayProgress.ps, dayProgress.pr].filter(Boolean).length;
    return completed; // 0-4
  };

  const getColor = (intensity: number): string => {
    if (intensity === 0) return "bg-gray-100";
    if (intensity === 1) return "bg-gold bg-opacity-25";
    if (intensity === 2) return "bg-gold bg-opacity-50";
    if (intensity === 3) return "bg-gold bg-opacity-75";
    return "bg-gold";
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-ink">90-Day Heatmap</h3>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded ${getColor(i)}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-1">
        {Array.from({ length: 90 }, (_, i) => i + 1).map((day) => {
          const intensity = getIntensity(day);
          const date = getDayDate(day);
          return (
            <div
              key={day}
              title={`Day ${day} · ${formatDateShort(date)}`}
              className={`aspect-square rounded text-xs font-bold flex items-center justify-center cursor-pointer transition-opacity hover:opacity-75 ${getColor(intensity)}`}
            >
              {day % 10 === 0 ? (day / 10).toFixed(0) : ""}
            </div>
          );
        })}
      </div>

      <div className="text-xs text-gray-500 mt-2">
        Days are shown every 10th to keep compact
      </div>
    </div>
  );
}
