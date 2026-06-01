import { ChevronDown } from "lucide-react";

type ReadingType = "ot" | "nt" | "ps" | "pr";

interface ReadingSectionProps {
  type: ReadingType;
  label: string;
  reference: string;
  isChecked: boolean;
  isExpanded: boolean;
  onToggleCheck: () => void;
  onToggleExpand: () => void;
  children?: React.ReactNode;
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

export function ReadingSection({
  type,
  label,
  reference,
  isChecked,
  isExpanded,
  onToggleCheck,
  onToggleExpand,
  children,
}: ReadingSectionProps) {
  const config = readingConfig[type];

  return (
    <div>
      <button
        onClick={onToggleExpand}
        className={`w-full p-3 sm:p-4 rounded-lg border-2 transition-all ${
          isChecked
            ? `${config.color} border-2 ${config.accentBg.replace("bg-", "border-")}`
            : "border-gray-300 hover:border-opacity-50 hover:bg-opacity-5"
        }`}
      >
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="flex items-start flex-1 gap-2 sm:gap-3">
            {/* Checkbox */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                onToggleCheck();
              }}
              className={`w-7 h-7 sm:w-6 sm:h-6 rounded border-2 flex-shrink-0 flex items-center justify-center cursor-pointer transition-colors ${
                isChecked
                  ? `${config.accentBg} border-opacity-0`
                  : "border-gray-400 hover:border-opacity-70"
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

      {/* Expanded Content */}
      {isExpanded && children}
    </div>
  );
}
