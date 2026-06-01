import { useMemo } from "react";
import { Reader, Progress } from "../types";
import { countCompleteDays, calculateStreak, calculateGroupPercent } from "../lib/stats";
import { Flame, TrendingUp } from "lucide-react";
import { GroupProgressHero } from "./GroupProgressHero";
import { CalendarHeatmap } from "./CalendarHeatmap";

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
    <div className="pb-8 px-5 sm:px-6 max-w-md mx-auto space-y-6">
      {/* Progress Hero */}
      <div className="pt-6">
        <GroupProgressHero readers={readers} progress={progress} />
      </div>

      {/* Leaderboard */}

      <div>
        <h2 className="text-base sm:text-lg font-serif text-ink text-center mb-4 sm:mb-5">Leaderboard</h2>
        <div className="space-y-2.5">
          {leaderboard.map((entry, index) => {
            const isCurrentUser = entry.name === currentReader;
            return (
              <div
                key={entry.name}
                className={`p-3.5 sm:p-4 rounded-xl border shadow-soft ${
                  isCurrentUser
                    ? "bg-gold bg-opacity-8 border-gold border-opacity-60"
                    : "border-gray-200 hover:shadow-subtle transition-shadow"
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`text-base sm:text-lg font-bold font-serif w-8 h-8 flex items-center justify-center rounded-lg ${
                    isCurrentUser 
                      ? "bg-gold bg-opacity-20 text-gold" 
                      : "bg-gray-100 text-ink-light"
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm sm:text-base ${isCurrentUser ? "text-gold" : "text-ink"}`}>
                      {entry.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-gold h-full transition-all duration-500"
                          style={{
                            width: `${(entry.daysComplete / 90) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-ink-light whitespace-nowrap">
                        {entry.daysComplete}/90
                      </p>
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

      {/* Individual Heatmaps */}
      <div className="border-t pt-6">
        <h3 className="text-base sm:text-lg font-serif text-ink mb-4">Individual Heatmaps</h3>
        <div className="space-y-6">
          {leaderboard.map((entry) => (
            <CalendarHeatmap key={entry.name} reader={entry.name} progress={progress} />
          ))}
        </div>
      </div>
    </div>
  );
}
