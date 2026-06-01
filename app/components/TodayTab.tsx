import { useState, useMemo, useEffect } from "react";
import { PLAN } from "../plan";
import { Progress, Reader } from "../types";
import { isDayComplete, getDayPercent } from "../lib/stats";
import { getTodaysDayNumber, getDayDate, formatDateShort, isPlanComplete } from "../lib/dates";
import { getReaderStatus } from "../lib/groupStats";
import { ChevronLeft, ChevronRight, Lock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";
import { ReadingSection } from "./ReadingSection";
import { DayGroupTracker } from "./DayGroupTracker";
import { ActivityFeed } from "./ActivityFeed";
import { AnimatedProgressRing } from "./AnimatedProgressRing";
import { Celebration } from "./Celebration";

interface TodayTabProps {
  currentReader: string;
  readers: Reader[];
  progress: Progress[];
  onRefresh: () => void;
}

export function TodayTab({
  currentReader,
  readers,
  progress,
  onRefresh,
}: TodayTabProps) {
  const todaysDayNumber = getTodaysDayNumber();
  
  const [selectedDay, setSelectedDay] = useState(() => {
    if (isPlanComplete()) {
      return 90;
    }
    return todaysDayNumber;
  });

  const [expandedReading, setExpandedReading] = useState<"ot" | "nt" | "ps" | "pr" | null>(null);
  const [celebrateDay, setCelebrateDay] = useState(false);
  const [previousPercentage, setPreviousPercentage] = useState(0);

  const dayPlan = useMemo(
    () => PLAN.find((p) => p.day === selectedDay),
    [selectedDay]
  );

  const dayProgress = useMemo(
    () =>
      progress.find(
        (p) => p.reader_name === currentReader && p.day === selectedDay
      ),
    [progress, currentReader, selectedDay]
  );

  const readerCurrentDay = useMemo(() => {
    for (let day = 1; day <= 90; day++) {
      if (!isDayComplete(currentReader, day, progress)) {
        return day;
      }
    }
    return 90;
  }, [progress, currentReader]);

  const dayPercentage = useMemo(() => {
    return getDayPercent(currentReader, selectedDay, progress);
  }, [currentReader, selectedDay, progress]);

  // Trigger celebration when day completes
  useEffect(() => {
    if (dayPercentage === 100 && previousPercentage < 100) {
      setCelebrateDay(true);
    }
    setPreviousPercentage(dayPercentage);
  }, [dayPercentage, previousPercentage]);

  const isDayLocked = selectedDay > todaysDayNumber;
  const readerStatus = getReaderStatus(readerCurrentDay, todaysDayNumber);

  const updateReading = async (field: "ot" | "nt" | "ps" | "pr", value: number) => {
    if (!dayPlan || isDayLocked) return;

    try {
      const { error } = await supabase.from("progress").upsert(
        {
          reader_name: currentReader,
          day: selectedDay,
          [field]: value,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "reader_name,day" }
      );

      if (error) throw error;
      onRefresh();
    } catch (err) {
      console.error("Failed to update progress:", err);
    }
  };

  if (!dayPlan) return null;

  const readings = [
    { key: "ot" as const, label: "Old Testament", value: dayPlan.ot, color: "from-orange-500 to-orange-600" },
    { key: "nt" as const, label: "New Testament", value: dayPlan.nt, color: "from-red-500 to-red-600" },
    { key: "ps" as const, label: "Psalms", value: dayPlan.ps, color: "from-blue-500 to-blue-600" },
    { key: "pr" as const, label: "Proverbs", value: dayPlan.pr, color: "from-purple-500 to-purple-600" },
  ];

  const getStatusBadge = () => {
    if (isDayLocked) {
      return (
        <motion.div 
          className="badge-info flex items-center gap-1.5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <Lock className="w-3 h-3" /> 
          <span>Locked</span>
        </motion.div>
      );
    }
    
    const badgeStyles = {
      ahead: { style: "badge-success", label: "Ahead 🚀" },
      "on-track": { style: "badge-info", label: "On track 📍" },
      behind: { style: "badge-warning", label: "Catching up 💪" },
    };

    const config = badgeStyles[readerStatus as keyof typeof badgeStyles] || badgeStyles.behind;

    return (
      <motion.div 
        className={config.style}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {config.label}
      </motion.div>
    );
  };

  return (
    <motion.div 
      className="space-y-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <Celebration trigger={celebrateDay} />

      {/* Day Navigation Card */}
      <motion.div 
        className="card p-5 space-y-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Nav Buttons */}
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => setSelectedDay(Math.max(1, selectedDay - 1))}
            disabled={selectedDay === 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 disabled:opacity-30 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </motion.button>
          
          <div className="flex-1 text-center">
            <motion.h2 
              className="text-h2 text-gray-900"
              key={selectedDay}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Day {selectedDay}
            </motion.h2>
            <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{formatDateShort(getDayDate(selectedDay))}</span>
            </div>
            {selectedDay === todaysDayNumber && (
              <motion.div 
                className="badge-success inline-block mt-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                Today
              </motion.div>
            )}
          </div>

          <motion.button
            onClick={() => setSelectedDay(Math.min(90, selectedDay + 1))}
            disabled={selectedDay === 90 || isDayLocked}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 disabled:opacity-30 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </motion.button>
        </div>

        {/* Status and Date Info */}
        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-200">
          <div>
            <p className="text-xs font-semibold text-gray-600 mb-2">Status</p>
            {getStatusBadge()}
          </div>
          {isDayLocked && (
            <div className="text-right">
              <p className="text-xs font-semibold text-gray-600 mb-2">Access</p>
              <motion.p 
                className="text-xs text-gray-500 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Unlocks tomorrow
              </motion.p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Progress Ring */}
      <motion.div 
        className="card p-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <AnimatedProgressRing 
          percentage={dayPercentage} 
          size={120}
          strokeWidth={8}
          color="#2563eb"
          backgroundColor="#dbeafe"
        />
        <p className="text-sm font-semibold text-gray-600 mt-4">
          {dayPercentage === 100 ? "✨ Day Complete!" : `${dayPercentage}% Complete`}
        </p>
      </motion.div>

      {/* Day Group Tracker */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <DayGroupTracker day={selectedDay} readers={readers} progress={progress} />
      </motion.div>

      {/* Readings Section */}
      <motion.div 
        className="space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, staggerChildren: 0.08 }}
      >
        <h3 className="text-h4 text-gray-900 px-0">Today's Readings</h3>
        {readings.map((reading, idx) => {
          const percentage = ((dayProgress as any)?.[reading.key] ?? 0) as number;
          const isExpanded = expandedReading === reading.key;

          return (
            <motion.div 
              key={reading.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
            >
              <ReadingSection
                type={reading.key}
                label={reading.label}
                reference={reading.value}
                percentage={percentage}
                isExpanded={isExpanded}
                onPercentageChange={(pct) => updateReading(reading.key, pct)}
                onToggleExpand={() =>
                  setExpandedReading(isExpanded ? null : reading.key)
                }
                isLocked={isDayLocked}
              >
                {/* Verse Display */}
                {isExpanded && (
                  <motion.div 
                    className={`card p-4 mt-3 border-l-4 bg-gradient-to-br ${reading.color} bg-opacity-5`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-900">
                        {reading.value}
                      </p>
                      <motion.a
                        href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(
                          reading.value
                        )}&version=NIV`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn-primary inline-flex items-center gap-2 text-sm`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read on BibleGateway
                        <span>→</span>
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </ReadingSection>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Activity Feed */}
      <motion.div 
        className="border-t border-gray-200 pt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ActivityFeed readers={readers} progress={progress} />
      </motion.div>
    </motion.div>
  );
}
