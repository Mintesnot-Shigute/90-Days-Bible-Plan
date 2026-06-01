import { Reader, Progress } from "../types";
import { getDayGroupStats } from "../lib/groupStats";
import { useMemo } from "react";

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

  // Sort readers by dayPercent descending (highest achievement first)
  const sortedReaders = useMemo(() => {
    return [...stats.readerStats].sort((a, b) => b.dayPercent - a.dayPercent);
  }, [stats.readerStats]);

  // Check if any reader hasn't completed 100%
  const hasIncompleteReaders = sortedReaders.some(reader => reader.dayPercent < 100);

  return (
    <div className="bg-gradient-to-r from-cream to-parchment rounded-xl p-4 sm:p-5 border border-gold border-opacity-30 shadow-soft space-y-4">
      {/* Payment Reminder Warning - Only show if someone hasn't completed */}
      {hasIncompleteReaders && (
        <div className="bg-red-50 border border-red-300 rounded-lg p-3.5">
          <p className="text-sm font-bold text-red-700 mb-2">
            ⚠️ IMPORTANT: Complete your reading today!
          </p>
          <div className="text-xs text-red-600 space-y-1">
            <p className="font-semibold">50 Birr fine for missing a day</p>
            <p className="font-semibold">COOP Account: 1071200005269</p>
            <p>Name: Mihret Tsegaye Mamo</p>
          </div>
        </div>
      )}

      {/* Header */}
      <h3 className="text-sm font-semibold text-ink text-center uppercase tracking-wide mb-3">
        Day {day} Group Ranking
      </h3>

      {/* Ranked Reader List */}
      <div className="space-y-2.5">
        {sortedReaders.map((reader, index) => (
          <div
            key={reader.name}
            className={`p-3 sm:p-3.5 rounded-lg border transition-all ${
              reader.dayCompleted
                ? "bg-gold bg-opacity-8 border-gold border-opacity-50"
                : "bg-white bg-opacity-40 border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              {/* Rank Badge */}
              <div
                className={`text-base sm:text-lg font-bold font-serif w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 ${
                  reader.dayCompleted
                    ? "bg-gold bg-opacity-25 text-gold"
                    : "bg-gray-200 text-ink-light"
                }`}
              >
                {index + 1}
              </div>

              {/* Name and Progress */}
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-sm truncate ${reader.dayCompleted ? "text-ink" : "text-gray-700"}`}>
                  {reader.name}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="bg-gold h-full transition-all duration-300"
                      style={{ width: `${reader.dayPercent}%` }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-ink-light whitespace-nowrap">
                    {reader.dayPercent}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Group Stats Footer */}
      <div className="mt-4 pt-4 border-t border-gold border-opacity-20 flex items-center justify-between text-xs sm:text-sm">
        <div>
          <p className="text-ink-light font-medium pl-3">Complete</p>
          <p className="font-bold text-gold">{stats.readersCompleteDay}/{readers.length}</p>
        </div>
        <div className="text-right">
          <p className="text-ink-light font-medium pl-3">Average</p>
          <p className="font-bold text-ink">{stats.completionPercent}%</p>
        </div>
      </div>
    </div>
  );
}
