import { Progress, Reader } from "../types";
import { countCompleteDays, calculateStreak, calculateGroupPercent } from "../lib/stats";
import { Flame, Menu } from "lucide-react";

interface HeaderProps {
  currentReader: string;
  readers: Reader[];
  progress: Progress[];
  onOpenMenu: () => void;
}

export function Header({
  currentReader,
  readers,
  progress,
  onOpenMenu,
}: HeaderProps) {
  const daysComplete = countCompleteDays(currentReader, progress);
  const streak = calculateStreak(currentReader, progress);
  const groupPercent = calculateGroupPercent(readers, progress);

  return (
    <header className="bg-white border-b-2 border-gold sticky top-0 z-40">
      <div className="max-w-md mx-auto px-5 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-lg sm:text-2xl font-serif text-ink truncate px-1">{currentReader}</h1>
          <button
            onClick={onOpenMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0 ml-2"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-ink" />
          </button>
        </div>
        <div className="flex items-center justify-between text-xs sm:text-sm gap-2 px-1">
          <div className="flex gap-2 sm:gap-4">
            <div className="min-w-max">
              <p className="text-gray-600">Progress</p>
              <p className="font-bold text-ink">{daysComplete}/90</p>
            </div>
            {streak > 0 && (
              <div className="flex items-center gap-1">
                <Flame className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
                <div>
                  <p className="text-gray-600">Streak</p>
                  <p className="font-bold text-ink">{streak}</p>
                </div>
              </div>
            )}
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-gray-600">Group</p>
            <p className="text-base sm:text-lg font-bold text-gold">{groupPercent}%</p>
          </div>
        </div>
      </div>
    </header>
  );
}
