import { useState, useMemo } from "react";
import { PLAN } from "../plan";
import { Progress, Reader } from "../types";
import { isDayComplete, getDayPercent } from "../lib/stats";
import { getTodaysDayNumber, getDayDate, formatDateShort, isPlanComplete } from "../lib/dates";
import { getReaderStatus } from "../lib/groupStats";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { supabase } from "../lib/supabase";
import { ReadingSection } from "./ReadingSection";
import { DayGroupTracker } from "./DayGroupTracker";
import { ActivityFeed } from "./ActivityFeed";

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

  // Calculate reader's current day number (first incomplete day)
  const readerCurrentDay = useMemo(() => {
    for (let day = 1; day <= 90; day++) {
      if (!isDayComplete(currentReader, day, progress)) {
        return day;
      }
    }
    return 90;
  }, [progress, currentReader]);

  // Calculate day percentage (average of 4 sections)
  const dayPercentage = useMemo(() => {
    return getDayPercent(currentReader, selectedDay, progress);
  }, [currentReader, selectedDay, progress]);

  // Day-gating: check if day is in future
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
    { key: "ot" as const, label: "Old Testament", value: dayPlan.ot },
    { key: "nt" as const, label: "New Testament", value: dayPlan.nt },
    { key: "ps" as const, label: "Psalms", value: dayPlan.ps },
    { key: "pr" as const, label: "Proverbs", value: dayPlan.pr },
  ];

  const getStatusBadge = () => {
    if (isDayLocked) {
      return <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-medium flex items-center gap-1"><Lock className="w-3 h-3" /> Locked</span>;
    }
    if (readerStatus === "ahead") {
      return <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">Ahead 🚀</span>;
    }
    if (readerStatus === "on-track") {
      return <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">On track 📍</span>;
    }
    return <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full font-medium">Catching up 💪</span>;
  };

  return (
    <div className="pb-8 px-5 sm:px-6 max-w-md mx-auto space-y-6">
      {/* Day Navigation */}
      <div className="flex items-center justify-between pt-6">
        <button
          onClick={() => setSelectedDay(Math.max(1, selectedDay - 1))}
          disabled={selectedDay === 1}
          className="p-2 disabled:opacity-50 hover:bg-gold hover:bg-opacity-10 rounded transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gold" />
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-serif text-ink">
            Day {selectedDay}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {formatDateShort(getDayDate(selectedDay))}
          </p>
          {selectedDay === todaysDayNumber && (
            <p className="text-xs text-gold font-medium mt-1">Today</p>
          )}
          {isDayLocked && (
            <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" /> Unlocks tomorrow
            </p>
          )}
        </div>

        <button
          onClick={() => setSelectedDay(Math.min(90, selectedDay + 1))}
          disabled={selectedDay === 90 || isDayLocked}
          className="p-2 disabled:opacity-50 hover:bg-gold hover:bg-opacity-10 rounded transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gold" />
        </button>
      </div>

      {/* Day Percentage Display */}
      <div className="bg-parchment rounded-lg p-4 text-center">
        <p className="text-4xl sm:text-5xl font-bold text-gold">
          {dayPercentage}%
        </p>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          {dayPercentage === 100 ? "Day Complete! 🎉" : "Today's Progress"}
        </p>
      </div>

      {/* Reader Status */}
      <div className="flex items-center justify-between pl-2 pr-1">
        <p className="text-sm text-gray-600">Your status</p>
        {getStatusBadge()}
      </div>

      {/* Day Group Tracker */}
      <DayGroupTracker day={selectedDay} readers={readers} progress={progress} />

      {/* Readings */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-ink pl-2 pr-1">Today's Readings</h3>
        {readings.map((reading) => {
          const percentage = ((dayProgress as any)?.[reading.key] ?? 0) as number;
          const isExpanded = expandedReading === reading.key;

          return (
            <div key={reading.key}>
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
                  <div className="bg-cream border border-l-4 rounded-r-lg p-4 mt-2 max-h-96 overflow-y-auto"
                       style={{
                         borderLeftColor: reading.key === "ot" ? "#b45d0f" : 
                                         reading.key === "nt" ? "#b91c1c" :
                                         reading.key === "ps" ? "#1e40af" : "#6b21a8"
                       }}>
                    <div className="space-y-3">
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">{reading.value}</span>
                      </p>
                      <a
                        href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(
                          reading.value
                        )}&version=NIV`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all"
                        style={{
                          backgroundColor: reading.key === "ot" ? "rgba(180, 93, 15, 0.1)" : 
                                          reading.key === "nt" ? "rgba(185, 28, 28, 0.1)" :
                                          reading.key === "ps" ? "rgba(30, 64, 175, 0.1)" : "rgba(107, 33, 168, 0.1)",
                          color: reading.key === "ot" ? "#b45d0f" : 
                                reading.key === "nt" ? "#b91c1c" :
                                reading.key === "ps" ? "#1e40af" : "#6b21a8"
                        }}
                      >
                        Read on BibleGateway.com
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                )}
              </ReadingSection>
            </div>
          );
        })}
      </div>

      {/* Activity Feed */}
      <div className="border-t pt-4">
        <ActivityFeed readers={readers} progress={progress} />
      </div>
    </div>
  );
}
