import { useMemo } from "react";
import { Reader, Progress } from "../types";
import { countCompleteDays, calculateStreak, calculateGroupPercent, calculateFine } from "../lib/stats";
import { Flame, Medal, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
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
        fine: calculateFine(reader.name, progress),
      }))
      .sort((a, b) => {
        if (b.daysComplete !== a.daysComplete) {
          return b.daysComplete - a.daysComplete;
        }
        return b.streak - a.streak;
      });
  }, [readers, progress]);

  const getMedalColor = (index: number) => {
    if (index === 0) return 'from-yellow-400 to-yellow-600';
    if (index === 1) return 'from-gray-300 to-gray-500';
    if (index === 2) return 'from-orange-300 to-orange-600';
    return '';
  };

  const getMedalIcon = (index: number) => {
    if (index < 3) return <Medal className="w-4 h-4" />;
    return `#${index + 1}`;
  };

  const totalGroupFines = useMemo(() => {
    return readers.reduce((sum, reader) => {
      return sum + calculateFine(reader.name, progress);
    }, 0);
  }, [readers, progress]);

  return (
    <div className="space-y-6">
      {/* Progress Hero */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <GroupProgressHero readers={readers} progress={progress} />
      </motion.div>

      {/* Fines Summary */}
      {totalGroupFines > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="card p-4 border-l-4 border-red-500 bg-red-50"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <div>
                <p className="text-sm font-semibold text-red-900">Group Fines</p>
                <p className="text-xs text-red-700">50 Br per missed day</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-red-700">{totalGroupFines} Br</p>
              <p className="text-xs text-red-600">{Math.round(totalGroupFines / 50)} days missed</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="mb-4">
          <h2 className="text-h2 text-gray-900">Leaderboard</h2>
          <p className="text-body text-gray-600">Group rankings</p>
        </div>
        <div className="space-y-3">
          {leaderboard.map((entry, index) => {
            const isCurrentUser = entry.name === currentReader;
            return (
              <motion.div
                key={entry.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + index * 0.05 }}
                className={`card p-4 border-2 transition-all ${
                  isCurrentUser
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Rank Badge */}
                  {index < 3 ? (
                    <motion.div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-lg bg-gradient-to-br ${getMedalColor(index)}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      {getMedalIcon(index)}
                    </motion.div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-gray-600 bg-gray-100">
                      {index + 1}
                    </div>
                  )}

                  {/* User Info */}
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-gray-900 ${isCurrentUser ? 'text-blue-600' : ''}`}>
                      {entry.name}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                          initial={{ width: 0 }}
                          animate={{ width: `${(entry.daysComplete / 90) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">
                        {entry.daysComplete}/90
                      </span>
                    </div>
                  </div>

                  {/* Fine Warning */}
                  {entry.fine > 0 && (
                    <motion.div
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-red-50 border border-red-200 whitespace-nowrap"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span className="text-xs font-bold text-red-700">{entry.fine}Br</span>
                    </motion.div>
                  )}

                  {/* Streak */}
                  {entry.streak > 0 && (
                    <motion.div
                      className="flex items-center gap-1.5 whitespace-nowrap"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <Flame className="w-4 h-4 text-red-500 animate-pulse" />
                      <span className="font-bold text-red-600">{entry.streak}</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Individual Heatmaps */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="border-t border-gray-200 pt-6"
      >
        <h3 className="text-h3 text-gray-900 mb-4">Activity Heatmaps</h3>
        <div className="space-y-4">
          {leaderboard.map((entry, idx) => (
            <motion.div
              key={entry.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 + idx * 0.1 }}
            >
              <CalendarHeatmap key={entry.name} reader={entry.name} progress={progress} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
