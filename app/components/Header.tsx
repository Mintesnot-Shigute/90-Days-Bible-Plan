import { Progress, Reader } from "../types";
import { countCompleteDays, calculateStreak, calculateGroupPercent } from "../lib/stats";
import { Flame, Menu, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

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
  const progressPercent = Math.round((daysComplete / 90) * 100);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <motion.div
        className="max-w-md mx-auto px-4 sm:px-6 py-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Top row: Menu + Reader name */}
        <div className="flex items-center justify-between mb-5">
          <motion.button
            onClick={onOpenMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </motion.button>
          <h1 className="text-xl font-bold text-gray-900 flex-1 text-center">{currentReader}</h1>
          <div className="w-9" /> {/* Balance the menu button */}
        </div>

        {/* Stats cards row */}
        <div className="grid grid-cols-3 gap-3">
          {/* Progress Card */}
          <motion.div
            className="card-subtle p-3 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-muted mb-1.5">Progress</p>
            <p className="text-2xl font-bold text-blue-600">{daysComplete}</p>
            <p className="text-xs text-gray-500">of 90</p>
          </motion.div>

          {/* Streak Card */}
          <motion.div
            className="card-subtle p-3 text-center"
            whileHover={{ scale: 1.02 }}
          >
            {streak > 0 ? (
              <>
                <div className="flex justify-center mb-1.5">
                  <Flame className="w-4 h-4 text-red-500 animate-pulse" />
                </div>
                <p className="text-2xl font-bold text-red-500">{streak}</p>
                <p className="text-xs text-gray-500">day streak</p>
              </>
            ) : (
              <>
                <div className="flex justify-center mb-1.5">
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-2xl font-bold text-gray-400">0</p>
                <p className="text-xs text-gray-500">start streak</p>
              </>
            )}
          </motion.div>

          {/* Group Card */}
          <motion.div
            className="card-subtle p-3 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-muted mb-1.5">Group</p>
            <p className="text-2xl font-bold text-blue-600">{groupPercent}%</p>
            <p className="text-xs text-gray-500">average</p>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 bg-gray-100 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </header>
  );
}
