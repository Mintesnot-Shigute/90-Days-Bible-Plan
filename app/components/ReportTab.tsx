import { useMemo } from "react";
import { Reader, Progress } from "../types";
import { getCompletedDaysReport, formatTimeAgo } from "../lib/groupStats";
import { countCompleteDays, calculateGroupPercent } from "../lib/stats";
import { getDayDate, formatDateShort } from "../lib/dates";
import { CheckCircle2, TrendingUp } from "lucide-react";

interface ReportTabProps {
  readers: Reader[];
  progress: Progress[];
}

export function ReportTab({ readers, progress }: ReportTabProps) {
  const completedDays = useMemo(
    () => getCompletedDaysReport(readers, progress),
    [readers, progress]
  );

  const summaryStats = useMemo(() => {
    const perReaderDays = readers.map((reader) => ({
      name: reader.name,
      completedDays: countCompleteDays(reader.name, progress),
    }));

    const totalDaysCompleted = perReaderDays.reduce((sum, r) => sum + r.completedDays, 0);
    const groupPercent = calculateGroupPercent(readers, progress);

    return {
      perReaderDays,
      totalDaysCompleted,
      groupPercent,
      avgDaysPerReader: readers.length > 0 ? Math.round(totalDaysCompleted / readers.length) : 0,
    };
  }, [readers, progress]);

  return (
    <div className="pb-8 px-5 sm:px-6 max-w-md mx-auto space-y-6">
      {/* Header */}
      <div className="pt-6">
        <h1 className="text-2xl sm:text-3xl font-serif text-ink">Completion Report</h1>
        <p className="text-sm text-gray-600 mt-2">
          Fully completed days (100% on all sections)
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-parchment rounded-lg p-4 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-gold">
            {summaryStats.totalDaysCompleted}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">Days Completed</p>
        </div>
        <div className="bg-parchment rounded-lg p-4 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-gold">
            {summaryStats.groupPercent}%
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">Group Progress</p>
        </div>
      </div>

      {/* Per-Reader Summary */}
      <div className="border-t pt-4">
        <h2 className="text-base sm:text-lg font-serif text-ink mb-3">
          Per Reader
        </h2>
        <div className="space-y-2">
          {summaryStats.perReaderDays.map((reader) => (
            <div
              key={reader.name}
              className="flex items-center justify-between p-3 bg-parchment rounded-lg"
            >
              <p className="text-sm font-medium text-ink truncate">{reader.name}</p>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-lg font-bold text-gold">
                  {reader.completedDays}
                </span>
                <TrendingUp className="w-4 h-4 text-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Days List */}
      {completedDays.length > 0 ? (
        <div className="border-t pt-4">
          <h2 className="text-base sm:text-lg font-serif text-ink mb-3">
            Recently Completed
          </h2>
          <div className="space-y-2">
            {completedDays.slice(0, 20).map((entry, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-cream border border-gold border-opacity-30 rounded-lg hover:bg-parchment transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-ink truncate">
                    {entry.readerName}
                  </p>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Day {entry.day} · {formatDateShort(getDayDate(entry.day))}
                  </p>
                </div>
                <p className="text-xs text-gray-500 flex-shrink-0 whitespace-nowrap">
                  {formatTimeAgo(entry.timestamp)}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="border-t pt-4 text-center py-8">
          <p className="text-gray-500 text-sm">
            No completed days yet. Keep going! 📖
          </p>
        </div>
      )}
    </div>
  );
}
