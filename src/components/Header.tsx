import { Progress, Reader } from "../types";
import { countCompleteDays, calculateStreak, calculateGroupPercent } from "../lib/stats";
import { Flame, Menu } from "lucide-react";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white bg-opacity-80 border-b border-gold border-opacity-20 shadow-soft">
      <motion.div
        className="max-w-md mx-auto px-5 sm:px-6 py-4 sm:py-5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Reader name */}
        <motion.div className="flex items-center justify-between mb-4" variants={itemVariants}>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-ink pl-2">{currentReader}</h1>
          <motion.button
            onClick={onOpenMenu}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-gold hover:bg-opacity-10 rounded-lg transition-colors ml-2"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-ink" />
          </motion.button>
        </motion.div>

        {/* Stats row with better spacing */}
        <motion.div className="flex items-center justify-between text-xs sm:text-sm gap-4 pl-2" variants={itemVariants}>
          <motion.div className="flex gap-4 sm:gap-6" whileHover={{ scale: 1.02 }}>
            {/* Progress */}
            <div className="flex flex-col">
              <span className="text-ink-light text-caption uppercase tracking-wide font-medium">Progress</span>
              <span className="text-xl sm:text-2xl font-serif font-bold text-ink mt-1">{daysComplete}/90</span>
            </div>

            {/* Streak */}
            {streak > 0 && (
              <div className="flex items-start gap-2">
                <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0 mt-0.5 animate-pulse-gentle" />
                <div className="flex flex-col">
                  <span className="text-ink-light text-caption uppercase tracking-wide font-medium">Streak</span>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-gold mt-1">{streak}</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Group percentage */}
          <motion.div 
            className="flex flex-col items-end"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-ink-light text-caption uppercase tracking-wide font-medium">Group</span>
            <span className="text-xl sm:text-2xl font-serif font-bold text-gold mt-1">{groupPercent}%</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
}
