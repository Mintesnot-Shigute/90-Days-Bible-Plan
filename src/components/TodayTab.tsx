import { useState, useMemo, useEffect } from "react";
import { PLAN } from "../plan";
import { Progress, Reader } from "../types";
import { isDayComplete } from "../lib/stats";
import { getTodaysDayNumber, getDayDate, formatDateShort, isPlanComplete } from "../lib/dates";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { supabase } from "../lib/supabase";

interface TodayTabProps {
  currentReader: string;
  readers: Reader[];
  progress: Progress[];
  onRefresh: () => void;
}

interface BibleText {
  ot: string | null;
  nt: string | null;
  ps: string | null;
  pr: string | null;
  loading: boolean;
}

export function TodayTab({
  currentReader,
  readers,
  progress,
  onRefresh,
}: TodayTabProps) {
  const [selectedDay, setSelectedDay] = useState(() => {
    const todaysDayNumber = getTodaysDayNumber();
    if (isPlanComplete()) {
      return 90;
    }
    return todaysDayNumber;
  });

  const [expandedReading, setExpandedReading] = useState<"ot" | "nt" | "ps" | "pr" | null>(null);
  const [bibleText, setBibleText] = useState<BibleText>({
    ot: null,
    nt: null,
    ps: null,
    pr: null,
    loading: false,
  });

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

  // Fetch Bible verses when day changes
  useEffect(() => {
    if (!dayPlan) return;

    const fetchVerses = async () => {
      setBibleText((prev) => ({ ...prev, loading: true }));
      
      const fetchVerse = async (ref: string) => {
        try {
          const url = `https://bible-api.com/${encodeURIComponent(ref)}?translation=web`;
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            return data.text || null;
          }
          return null;
        } catch (err) {
          console.error(`Failed to fetch ${ref}:`, err);
          return null;
        }
      };

      try {
        const [otText, ntText, psText, prText] = await Promise.all([
          fetchVerse(dayPlan.ot),
          fetchVerse(dayPlan.nt),
          fetchVerse(dayPlan.ps),
          fetchVerse(dayPlan.pr),
        ]);

        setBibleText({
          ot: otText,
          nt: ntText,
          ps: psText,
          pr: prText,
          loading: false,
        });
      } catch (err) {
        console.error("Failed to fetch verses:", err);
        setBibleText((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchVerses();
  }, [dayPlan]);

  const toggleReading = async (
    field: "ot" | "nt" | "ps" | "pr"
  ) => {
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

  return (
    <div className="pb-8 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setSelectedDay(Math.max(1, selectedDay - 1))}
          disabled={selectedDay === 1}
          className="p-2 disabled:opacity-50"
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
        </div>
        <button
          onClick={() => setSelectedDay(Math.min(90, selectedDay + 1))}
          disabled={selectedDay === 90}
          className="p-2 disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6 text-gold" />
        </button>
      </div>

      <div className="space-y-3">
        {readings.map((reading) => {
          const isChecked = (dayProgress as any)?.[reading.key] ?? false;
          const isExpanded = expandedReading === reading.key;
          const verseText = bibleText[reading.key];

          return (
            <div key={reading.key}>
              <button
                onClick={() => {
                  setExpandedReading(isExpanded ? null : reading.key);
                }}
                className={`w-full p-3 sm:p-4 rounded-lg border-2 transition-all ${
                  isChecked
                    ? "bg-gold bg-opacity-10 border-gold"
                    : "border-gray-300 hover:border-gold"
                }`}
              >
                <div className="flex items-start justify-between gap-2 sm:gap-3">
                  <div className="flex items-start flex-1 gap-2 sm:gap-3">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleReading(reading.key);
                      }}
                      className={`w-7 h-7 sm:w-6 sm:h-6 rounded border-2 flex-shrink-0 flex items-center justify-center cursor-pointer transition-colors ${
                        isChecked
                          ? "bg-gold border-gold"
                          : "border-ink hover:border-gold"
                      }`}
                    >
                      {isChecked && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="font-medium text-sm sm:text-base text-ink">{reading.label}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{reading.value}</p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gold transition-transform flex-shrink-0 ${
                      isExpanded ? "transform rotate-180" : ""
                    }`} 
                  />
                </div>
              </button>

              {/* Verse Display */}
              {isExpanded && (
                <div className="bg-cream border border-gold rounded-lg p-4 mt-2 max-h-96 overflow-y-auto">
                  {bibleText.loading ? (
                    <p className="text-gray-500 italic">Loading verse...</p>
                  ) : verseText ? (
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 font-medium uppercase">{reading.value}</p>
                      <p className="text-sm leading-relaxed text-ink whitespace-pre-wrap">
                        {verseText}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-gray-500 text-sm">
                        <span className="font-medium">{reading.value}</span>
                      </p>
                      <a
                        href={`https://www.bible.com/search/${encodeURIComponent(reading.value)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1 bg-gold bg-opacity-20 text-gold rounded hover:bg-opacity-30 text-sm"
                      >
                        Read on Bible.com →
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
