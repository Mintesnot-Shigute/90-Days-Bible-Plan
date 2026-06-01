import { ChevronDown, Check } from "lucide-react";
import { motion } from "framer-motion";

type ReadingType = "ot" | "nt" | "ps" | "pr";

interface ReadingSectionProps {
  type: ReadingType;
  label: string;
  reference: string;
  percentage: number;
  isExpanded: boolean;
  onPercentageChange: (pct: number) => void;
  onToggleExpand: () => void;
  children?: React.ReactNode;
  isLocked?: boolean;
}

const readingConfig = {
  ot: {
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    borderColor: "border-orange-200",
    icon: "📕",
  },
  nt: {
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-200",
    icon: "📗",
  },
  ps: {
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    icon: "📘",
  },
  pr: {
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    icon: "📙",
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
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      {/* Main Header Button */}
      <motion.button
        onClick={onToggleExpand}
        disabled={isLocked}
        whileHover={isLocked ? {} : { y: -2 }}
        whileTap={isLocked ? {} : { scale: 0.98 }}
        className={`w-full card p-4 transition-all ${isLocked ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* Percentage Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-white text-sm shadow-md bg-gradient-to-br ${config.color}`}
            >
              {percentage}%
            </motion.div>

            {/* Content */}
            <div className="text-left flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-600">
                {config.icon} {label}
              </p>
              <p className="text-sm font-semibold text-gray-900 mt-1 truncate">
                {reference}
              </p>
            </div>
          </div>

          {/* Status and Chevron */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {isComplete && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-br ${config.color}`}
              >
                <Check className="w-3 h-3 text-white" />
              </motion.div>
            )}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </div>
        </div>
      </motion.button>

      {/* Expanded Content */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-3 space-y-3">
          {/* Bible content */}
          {children && (
            <div>
              {children}
            </div>
          )}

          {/* Percentage Selector */}
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`card p-4 border-2 ${config.borderColor}`}
          >
            <p className="text-xs font-semibold text-gray-600 mb-3">Progress</p>
            
            <div className="flex gap-2">
              {percentOptions.map((pct) => (
                <motion.button
                  key={pct}
                  onClick={() => {
                    if (!isLocked) {
                      onPercentageChange(pct);
                    }
                  }}
                  disabled={isLocked}
                  whileHover={isLocked ? {} : { scale: 1.08 }}
                  whileTap={isLocked ? {} : { scale: 0.92 }}
                  className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-all ${
                    percentage === pct
                      ? `bg-gradient-to-br ${config.color} text-white shadow-lg`
                      : `${config.bgColor} ${config.textColor} hover:${config.bgColor}`
                  }`}
                >
                  {pct}%
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
