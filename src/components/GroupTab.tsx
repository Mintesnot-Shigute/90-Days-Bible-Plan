import { useMemo } from "react";
import { Reader, Progress } from "../types";
import { countCompleteDays, calculateStreak, calculateGroupPercent } from "../lib/stats";
import { Flame } from "lucide-react";

interface GroupTabProps {
  currentReader: string;
  readers: Reader[];
  progress: Progress[];
}

export function GroupTab({
  currentReader,
  readers,
  progress,
}: GroupTabProps) {
  const groupPercent = useMemo(
    () => calculateGroupPercent(readers, progress),
    [readers, progress]
  );

  const leaderboard = useMemo(() => {
    return readers
      .map((reader) => ({
        name: reader.name,
        daysComplete: countCompleteDays(reader.name, progress),
        streak: calculateStreak(reader.name, progress),
      }))
      .sort((a, b) => {
        if (b.daysComplete !== a.daysComplete) {
          return b.daysComplete - a.daysComplete;
        }
        return b.streak - a.streak;
      });
  }, [readers, progress]);

  return (
    <div className="pb-8 px-2 sm:px-0">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-base sm:text-lg font-serif text-ink">Group Progress</h2>
          <span className="text-xl sm:text-2xl font-bold text-gold">{groupPercent}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
          <div
            className="bg-gold h-full transition-all duration-500"
            style={{ width: `${groupPercent}%` }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-base sm:text-lg font-serif text-ink mb-3 sm:mb-4">Leaderboard</h2>
        <div className="space-y-2">
          {leaderboard.map((entry, index) => {
            const isCurrentUser = entry.name === currentReader;
            return (
              <div
                key={entry.name}
                className={`p-3 sm:p-4 rounded-lg border-2 ${
                  isCurrentUser
                    ? "bg-gold bg-opacity-5 border-gold"
                    : "border-gray-300"
                }`}
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium text-sm sm:text-base truncate ${isCurrentUser ? "text-gold" : "text-ink"}`}>
                      {index + 1}. {entry.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                        {entry.daysComplete}/90
                      </p>
                      <div className="flex-1 min-w-[80px] h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-gold h-full transition-all duration-500"
                          style={{
                            width: `${(entry.daysComplete / 90) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {entry.streak > 0 && (
                    <div className="flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
                      <Flame className="w-4 h-4 text-gold" />
                      <span className="text-sm font-bold text-gold">
                        {entry.streak}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
