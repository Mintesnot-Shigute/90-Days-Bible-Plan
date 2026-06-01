import { Reader, Progress } from "../types";
import { getDayGroupStats } from "../lib/groupStats";
import { CheckCircle2, Circle } from "lucide-react";

interface DayGroupTrackerProps {
  day: number;
  readers: Reader[];
  progress: Progress[];
}

export function DayGroupTracker({
  day,
  readers,
  progress,
}: DayGroupTrackerProps) {
  const stats = getDayGroupStats(day, readers, progress);

  return (
    <div className="bg-gradient-to-r from-cream to-parchment rounded-lg p-4 border-2 border-gold border-opacity-30">
      {/* Summary Stats */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-gray-600">Day {day} Group</p>
          <p className="text-2xl font-bold text-gold">
            {stats.readersCompleteDay}/{readers.length} done
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Progress</p>
          <p className="text-2xl font-bold text-ink">{stats.completionPercent}%</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-gold h-full rounded-full transition-all duration-500"
          style={{ width: `${stats.completionPercent}%` }}
        />
      </div>

      {/* Reader List */}
      <div className="space-y-2">
        {stats.readerStats.map((reader) => (
          <div key={reader.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {reader.dayCompleted ? (
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
              )}
              <span className={`truncate font-medium ${reader.dayCompleted ? "text-ink" : "text-gray-600"}`}>
                {reader.name}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="bg-gold h-full transition-all duration-300"
                  style={{ width: `${reader.completionPercent}%` }}
                />
              </div>
              <span className="text-xs text-gray-600 min-w-[30px] text-right">
                {reader.readingsCompleted}/4
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
