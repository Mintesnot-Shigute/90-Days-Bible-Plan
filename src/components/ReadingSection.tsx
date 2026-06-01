import { ChevronDown } from "lucide-react";

type ReadingType = "ot" | "nt" | "ps" | "pr";

interface ReadingSectionProps {
  type: ReadingType;
  label: string;
  reference: string;
  percentage: number; // 0, 25, 50, 75, or 100
  isExpanded: boolean;
  onPercentageChange: (pct: number) => void;
  onToggleExpand: () => void;
  children?: React.ReactNode;
  isLocked?: boolean; // for future day gating
}

const readingConfig = {
  ot: {
    color: "border-amber-700 bg-amber-700 bg-opacity-10",
    icon: "📕",
    accent: "text-amber-700",
    accentBg: "bg-amber-700",
  },
  nt: {
    color: "border-red-700 bg-red-700 bg-opacity-10",
    icon: "📗",
    accent: "text-red-700",
    accentBg: "bg-red-700",
  },
  ps: {
    color: "border-blue-700 bg-blue-700 bg-opacity-10",
    icon: "📘",
    accent: "text-blue-700",
    accentBg: "bg-blue-700",
  },
  pr: {
    color: "border-purple-700 bg-purple-700 bg-opacity-10",
    icon: "📙",
    accent: "text-purple-700",
    accentBg: "bg-purple-700",
  },
};

const percentOptions = [0, 25, 50, 75, 100];

export function ReadingSection({
  type,
  label,
  reference,
  percentage,
  isExpanded,
  onPercentageChange,
  onToggleExpand,
  children,
  isLocked = false,
}: ReadingSectionProps) {
  const config = readingConfig[type];
  const isComplete = percentage === 100;

  return (
    <div>
      {/* Main Header */}
      <button
        onClick={onToggleExpand}
        disabled={isLocked}
        className={`w-full p-3 sm:p-4 rounded-lg border-2 transition-all ${
          isLocked
            ? "opacity-50 cursor-not-allowed border-gray-300 bg-gray-100"
            : isComplete
            ? `${config.color} border-2 ${config.accentBg.replace("bg-", "border-")}`
            : "border-gray-300 hover:border-opacity-50 hover:bg-opacity-5"
        }`}
      >
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="flex items-start flex-1 gap-2 sm:gap-3">
            {/* Percentage Badge */}
            <div
              className={`w-8 h-8 sm:w-7 sm:h-7 rounded flex-shrink-0 flex items-center justify-center font-bold text-white text-xs transition-colors ${
                isComplete
                  ? `${config.accentBg}`
                  : "bg-gray-300"
              }`}
            >
              {percentage}%
            </div>

            {/* Content */}
            <div className="text-left flex-1 min-w-0">
              <p className="text-xs sm:text-xs font-bold uppercase tracking-wide text-gray-600">
                {config.icon} {label}
              </p>
              <p className={`text-sm sm:text-base font-medium ${config.accent} truncate`}>
                {reference}
              </p>
            </div>
          </div>

          {/* Chevron */}
          <ChevronDown
            className={`w-5 h-5 ${config.accent} transition-transform flex-shrink-0 ${
              isExpanded ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Expanded Content with Percentage Selector */}
      {isExpanded && (
        <div className="mt-3 space-y-3">
          {children}

          {/* Percentage Selector */}
          <div className="p-4 bg-parchment rounded-lg space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-600">
              Completion
            </p>
            <div className="grid grid-cols-5 gap-2">
              {percentOptions.map((pct) => (
                <button
                  key={pct}
                  onClick={() => {
                    if (!isLocked) {
                      onPercentageChange(pct);
                    }
                  }}
                  disabled={isLocked}
                  className={`py-2 px-2 rounded-lg font-semibold text-sm transition-all ${
                    isLocked
                      ? "opacity-50 cursor-not-allowed"
                      : percentage === pct
                      ? `${config.accentBg} text-white shadow-md`
                      : `bg-white border-2 border-gray-200 hover:border-opacity-70 text-gray-700`
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
