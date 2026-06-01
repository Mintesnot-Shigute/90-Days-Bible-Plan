import { useMemo } from "react";
import { Progress } from "../types";
import { isDayComplete, getDayPercent } from "../lib/stats";
import { getDayDate, formatDateShort } from "../lib/dates";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PlanTabProps {
  currentReader: string;
  progress: Progress[];
  onSelectDay: (day: number) => void;
}

export function PlanTab({
  currentReader,
  progress,
  onSelectDay,
}: PlanTabProps) {
  const gridData = useMemo(() => {
    const data: Array<{
      day: number;
      complete: boolean;
      percentage: number;
    }> = [];

    for (let day = 1; day <= 90; day++) {
      const complete = isDayComplete(currentReader, day, progress);
      const percentage = getDayPercent(currentReader, day, progress);

      data.push({ day, complete, percentage });
    }

    return data;
  }, [progress, currentReader]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-h2 text-gray-900 mb-2">90-Day Plan</h2>
        <p className="text-body text-gray-600">Your complete reading schedule</p>
      </div>

      <motion.div 
        className="card p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
          {gridData.map((item, idx) => (
            <motion.button
              key={item.day}
              onClick={() => onSelectDay(item.day)}
              title={`Day ${item.day} - ${formatDateShort(getDayDate(item.day))}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.02 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="aspect-square rounded-lg border transition-all font-semibold text-xs relative overflow-hidden group"
              style={{
                background: item.complete
                  ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
                  : `linear-gradient(180deg, #3b82f6 0%, #eff6ff ${Math.max(0, 100 - item.percentage)}%, #f3f4f6 ${Math.max(0, 100 - item.percentage)}%, #f3f4f6 100%)`,
                borderColor: item.complete ? '#1d4ed8' : '#e5e7eb',
                color: item.complete ? 'white' : '#1f2937',
              }}
            >
              <span className="relative z-10 flex items-center justify-center h-full">
                {item.complete ? (
                  <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  item.day
                )}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="card p-4 bg-blue-50 border border-blue-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-sm text-blue-900">
          <span className="font-semibold">Legend:</span> Tap any day to jump to it. Filled days are complete.
        </p>
      </motion.div>

      {/* Summary Stats */}
      <motion.div 
        className="grid grid-cols-3 gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="card p-4 text-center">
          <p className="text-muted mb-2">Completed</p>
          <p className="text-2xl font-bold text-blue-600">
            {gridData.filter(d => d.complete).length}
          </p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-muted mb-2">In Progress</p>
          <p className="text-2xl font-bold text-amber-600">
            {gridData.filter(d => !d.complete && d.percentage > 0).length}
          </p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-muted mb-2">Not Started</p>
          <p className="text-2xl font-bold text-gray-600">
            {gridData.filter(d => d.percentage === 0).length}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
