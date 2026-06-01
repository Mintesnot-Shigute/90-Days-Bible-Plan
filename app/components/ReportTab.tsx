import { useMemo } from "react";
import { Reader, Progress } from "../types";
import { getCompletedDaysReport, formatTimeAgo } from "../lib/groupStats";
import { countCompleteDays, calculateGroupPercent } from "../lib/stats";
import { getDayDate, formatDateShort } from "../lib/dates";
import { CheckCircle2, TrendingUp, Calendar } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-h2 text-gray-900">Completion Report</h1>
        <p className="text-body text-gray-600 mt-1">
          Track progress across the group
        </p>
      </motion.div>

      {/* Summary Cards Grid */}
      <motion.div 
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, staggerChildren: 0.1 }}
      >
        <motion.div 
          className="card p-5 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-4xl font-bold text-blue-600 mb-2">
            {summaryStats.totalDaysCompleted}
          </p>
          <p className="text-xs font-semibold text-gray-600">Total Days</p>
        </motion.div>

        <motion.div 
          className="card p-5 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-4xl font-bold text-indigo-600 mb-2">
            {summaryStats.groupPercent}%
          </p>
          <p className="text-xs font-semibold text-gray-600">Group Avg</p>
        </motion.div>

        <motion.div 
          className="card p-5 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-4xl font-bold text-emerald-600 mb-2">
            {summaryStats.avgDaysPerReader}
          </p>
          <p className="text-xs font-semibold text-gray-600">Avg per Reader</p>
        </motion.div>

        <motion.div 
          className="card p-5 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-4xl font-bold text-purple-600 mb-2">
            {readers.length}
          </p>
          <p className="text-xs font-semibold text-gray-600">Readers</p>
        </motion.div>
      </motion.div>

      {/* Per-Reader Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="card p-5"
      >
        <h2 className="text-h4 text-gray-900 mb-4">Reader Progress</h2>
        <div className="space-y-3">
          {summaryStats.perReaderDays.map((reader, idx) => (
            <motion.div
              key={reader.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.05 }}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <p className="font-medium text-gray-900 text-sm truncate">{reader.name}</p>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="font-bold text-blue-600">{reader.completedDays}</span>
                <span className="text-xs text-gray-500">/90</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recently Completed Days */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {completedDays.length > 0 ? (
          <div className="card p-5">
            <h2 className="text-h4 text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Recently Completed
            </h2>
            <div className="space-y-2">
              {completedDays.slice(0, 15).map((entry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + idx * 0.03 }}
                  className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 truncate">
                      {entry.readerName}
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Day {entry.day} · {formatDateShort(getDayDate(entry.day))}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 flex-shrink-0 whitespace-nowrap">
                    {formatTimeAgo(entry.timestamp)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <motion.div 
            className="card p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">
              No completed days yet. Keep going! 📖
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
