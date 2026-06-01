import { useMemo } from "react";
import { Progress, Reader } from "../types";
import { isDayComplete, getDayPercent } from "../lib/stats";
import { getDayDate, formatDateShort } from "../lib/dates";

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

  const getGradientId = (day: number) => `grad-${day}`;

  return (
    <div className="pb-8 px-5 sm:px-4 max-w-md mx-auto">
      <h2 className="text-2xl sm:text-3xl font-serif text-ink mb-6 pt-6">90-Day Plan</h2>
      <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-10 gap-2">
        {gridData.map((item) => (
          <button
            key={item.day}
            onClick={() => onSelectDay(item.day)}
            title={`Day ${item.day} - ${formatDateShort(getDayDate(item.day))}`}
            className="aspect-square rounded-lg border-2 border-gray-300 hover:border-gold transition-all relative overflow-hidden group"
          >
            {item.complete ? (
              <div className="w-full h-full bg-gold flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">
                  {item.day}
                </span>
              </div>
            ) : (
              <>
                <svg className="w-full h-full absolute inset-0">
                  <defs>
                    <linearGradient
                      id={getGradientId(item.day)}
                      x1="0%"
                      y1="100%"
                      x2="0%"
                      y2={`${100 - item.percentage}%`}
                    >
                      <stop offset="0%" stopColor="#b8860b" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill={`url(#${getGradientId(item.day)})`}
                  />
                </svg>
                <div className="relative h-full flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold text-ink group-hover:text-gold">
                    {item.day}
                  </span>
                </div>
              </>
            )}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-4">
        Tap a day to jump to it. Filled days are complete.
      </p>
    </div>
  );
}
