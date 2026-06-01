import { useState, useMemo, useEffect } from "react";
import { PLAN } from "../plan";
import { Progress, Reader } from "../types";
import { isDayComplete, getDayPercent } from "../lib/stats";
import { getTodaysDayNumber, getDayDate, formatDateShort, isPlanComplete } from "../lib/dates";
import { getReaderStatus } from "../lib/groupStats";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";
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
    { key: "ot" as const, label: "Old Testament", value: dayPlan.ot, color: "#b45d0f" },
    { key: "nt" as const, label: "New Testament", value: dayPlan.nt, color: "#b91c1c" },
    { key: "ps" as const, label: "Psalms", value: dayPlan.ps, color: "#1e40af" },
    { key: "pr" as const, label: "Proverbs", value: dayPlan.pr, color: "#6b21a8" },
  ];

  const getStatusBadge = () => {
    if (isDayLocked) {
      return (
        <motion.span 
          className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full font-medium flex items-center gap-1 shadow-soft"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <Lock className="w-3 h-3" /> Locked
        </motion.span>
      );
    }
    
    const badgeStyles = {
      ahead: { bg: "bg-green-50", text: "text-green-700", label: "Ahead 🚀" },
      "on-track": { bg: "bg-blue-50", text: "text-blue-700", label: "On track 📍" },
      behind: { bg: "bg-amber-50", text: "text-amber-700", label: "Catching up 💪" },
    };

    const style = badgeStyles[readerStatus as keyof typeof badgeStyles] || badgeStyles.behind;

    return (
      <motion.span 
        className={`text-xs px-3 py-1.5 rounded-full font-medium shadow-soft border ${style.bg} ${style.text} border-current border-opacity-20`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {style.label}
      </motion.span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
      className="pb-8 px-5 sm:px-6 max-w-md mx-auto space-y-5 sm:space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Celebration trigger={celebrateDay} />

      {/* Day Navigation */}
      <motion.div 
        className="flex items-center justify-between pt-4 sm:pt-6"
        variants={itemVariants}
      >
        <motion.button
          onClick={() => setSelectedDay(Math.max(1, selectedDay - 1))}
          disabled={selectedDay === 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 disabled:opacity-40 hover:bg-gold hover:bg-opacity-10 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
        </motion.button>
        
        <div className="text-center flex-1">
          <motion.h2 
            className="text-2xl sm:text-3xl font-serif font-bold text-ink"
            key={selectedDay}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Day {selectedDay}
          </motion.h2>
          <p className="text-sm text-ink-light mt-1">
            {formatDateShort(getDayDate(selectedDay))}
          </p>
          {selectedDay === todaysDayNumber && (
            <motion.p 
              className="text-xs text-gold font-medium mt-1.5 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Today
            </motion.p>
          )}
          {isDayLocked && (
            <motion.p 
              className="text-xs text-ink-light mt-1.5 flex items-center justify-center gap-1 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Lock className="w-3 h-3" /> Unlocks tomorrow
            </motion.p>
          )}
        </div>

        <motion.button
          onClick={() => setSelectedDay(Math.min(90, selectedDay + 1))}
          disabled={selectedDay === 90 || isDayLocked}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 disabled:opacity-40 hover:bg-gold hover:bg-opacity-10 rounded-lg transition-colors"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
        </motion.button>
      </motion.div>

      {/* Day Percentage Display with Animated Ring */}
      <motion.div 
        className="flex flex-col items-center justify-center py-4 sm:py-6 px-4 sm:px-6 rounded-2xl shadow-elevation"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 100%)",
          border: "1px solid rgba(184, 134, 11, 0.1)",
        }}
        variants={itemVariants}
      >
        <AnimatedProgressRing 
          percentage={dayPercentage} 
          size={140}
          strokeWidth={8}
          color="#b8860b"
          backgroundColor="#d4a574"
        />
        <p className="text-xs sm:text-sm text-ink-light uppercase tracking-widest font-medium mt-4">
          {dayPercentage === 100 ? "Day Complete!" : "Today's Progress"}
        </p>
      </motion.div>

      {/* Reader Status */}
      <motion.div 
        className="flex items-center justify-between pl-2"
        variants={itemVariants}
      >
        <p className="text-sm font-medium text-ink-light uppercase tracking-wide">Status</p>
        {getStatusBadge()}
      </motion.div>

      {/* Day Group Tracker */}
      <motion.div variants={itemVariants}>
        <DayGroupTracker day={selectedDay} readers={readers} progress={progress} />
      </motion.div>

      {/* Readings Section */}
      <motion.div className="space-y-4" variants={itemVariants}>
        <h3 className="text-sm font-semibold text-ink pl-2 uppercase tracking-wide">Readings for Today</h3>
        <motion.div 
          className="space-y-3"
          variants={containerVariants}
        >
          {readings.map((reading, idx) => {
            const percentage = ((dayProgress as any)?.[reading.key] ?? 0) as number;
            const isExpanded = expandedReading === reading.key;

            return (
              <motion.div 
                key={reading.key}
                variants={itemVariants}
                custom={idx}
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
                      className="p-4 sm:p-5 rounded-lg shadow-soft border"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        borderColor: reading.color,
                        borderLeft: `4px solid ${reading.color}`,
                      }}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-3">
                        <p className="text-sm text-ink-light font-medium">
                          <span className="font-semibold text-ink">{reading.value}</span>
                        </p>
                        <motion.a
                          href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(
                            reading.value
                          )}&version=NIV`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all shadow-soft"
                          style={{
                            backgroundColor: `${reading.color}15`,
                            color: reading.color,
                          }}
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
      </motion.div>

      {/* Activity Feed */}
      <motion.div 
        className="border-t border-gold border-opacity-20 pt-4 sm:pt-5"
        variants={itemVariants}
      >
        <ActivityFeed readers={readers} progress={progress} />
      </motion.div>
    </motion.div>
  );
}
