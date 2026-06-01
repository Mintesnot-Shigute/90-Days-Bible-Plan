import { useState, useMemo } from "react";
import { PLAN } from "../plan";
import { Progress, Reader } from "../types";
import { isDayComplete } from "../lib/stats";
import { getTodaysDayNumber, getDayDate, formatDateShort, isPlanComplete } from "../lib/dates";
import { getReaderStatus } from "../lib/groupStats";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  // Calculate reader's current day number
  const readerCurrentDay = useMemo(() => {
    for (let day = 1; day <= 90; day++) {
      if (!isDayComplete(currentReader, day, progress)) {
        return day;
      }
    }
    return 90;
  }, [progress, currentReader]);

  const readerStatus = getReaderStatus(readerCurrentDay, todaysDayNumber);

  const toggleReading = async (field: "ot" | "nt" | "ps" | "pr") => {
    if (!dayPlan) return;

    const newValue = !((dayProgress as any)?.[field] ?? false);

    try {
      const { error } = await supabase.from("progress").upsert(
        {
          reader_name: currentReader,
          day: selectedDay,
          [field]: newValue,
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
    if (readerStatus === "ahead") {
      return <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">Ahead 🚀</span>;
    }
    if (readerStatus === "on-track") {
      return <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">On track 📍</span>;
    }
    return <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full font-medium">Catching up 💪</span>;
  };

  return (
    <div className="pb-8 space-y-6">
      {/* Day Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setSelectedDay(Math.max(1, selectedDay - 1))}
          disabled={selectedDay === 1}
          className="p-2 disabled:opacity-50 hover:bg-gold hover:bg-opacity-10 rounded transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gold" />
        </button>
        
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-serif text-ink">
            Day {selectedDay}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            {formatDateShort(getDayDate(selectedDay))}
          </p>
          {selectedDay === todaysDayNumber && (
            <p className="text-xs text-gold font-medium mt-1">Today</p>
          )}
        </div>

        <button
          onClick={() => setSelectedDay(Math.min(90, selectedDay + 1))}
          disabled={selectedDay === 90}
          className="p-2 disabled:opacity-50 hover:bg-gold hover:bg-opacity-10 rounded transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gold" />
        </button>
      </div>

      {/* Reader Status */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Your progress</p>
        {getStatusBadge()}
      </div>

      {/* Day Group Tracker */}
      <DayGroupTracker day={selectedDay} readers={readers} progress={progress} />

      {/* Readings */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-ink px-1">Today's Readings</h3>
        {readings.map((reading) => {
          const isChecked = (dayProgress as any)?.[reading.key] ?? false;
          const isExpanded = expandedReading === reading.key;

          return (
            <div key={reading.key}>
              <ReadingSection
                type={reading.key}
                label={reading.label}
                reference={reading.value}
                isChecked={isChecked}
                isExpanded={isExpanded}
                onToggleCheck={() => toggleReading(reading.key)}
                onToggleExpand={() =>
                  setExpandedReading(isExpanded ? null : reading.key)
                }
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
