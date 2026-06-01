import { ChevronDown } from "lucide-react";
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
    color: "#b45d0f",
    lightColor: "rgba(180, 93, 15, 0.1)",
    icon: "📕",
    label: "Old Testament",
  },
  nt: {
    color: "#b91c1c",
    lightColor: "rgba(185, 28, 28, 0.1)",
    icon: "📗",
    label: "New Testament",
  },
  ps: {
    color: "#1e40af",
    lightColor: "rgba(30, 64, 175, 0.1)",
    icon: "📘",
    label: "Psalms",
  },
  pr: {
    color: "#6b21a8",
    lightColor: "rgba(107, 33, 168, 0.1)",
    icon: "📙",
    label: "Proverbs",
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

  const containerVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div variants={containerVariants}>
      {/* Main Header Button */}
      <motion.button
        onClick={onToggleExpand}
        disabled={isLocked}
        whileHover={isLocked ? {} : { y: -2 }}
        whileTap={isLocked ? {} : { scale: 0.98 }}
        className={`w-full p-4 sm:p-5 rounded-xl transition-all border ${
          isLocked
            ? "opacity-50 cursor-not-allowed border-gray-200 bg-gray-50"
            : isComplete
            ? `border-2 shadow-elevation`
            : `border shadow-soft hover:shadow-subtle`
        }`}
        style={{
          borderColor: isLocked ? "transparent" : isComplete ? config.color : "rgba(26, 26, 26, 0.1)",
          backgroundColor: isLocked ? "rgba(0, 0, 0, 0.02)" : isComplete ? config.lightColor : "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex items-start flex-1 gap-3 sm:gap-4">
            {/* Animated Percentage Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-white text-sm shadow-soft"
              style={{
                backgroundColor: isLocked ? "rgba(0, 0, 0, 0.2)" : isComplete ? config.color : "#c4b5a0",
              }}
            >
              {percentage}%
            </motion.div>

            {/* Content */}
            <div className="text-left flex-1 min-w-0">
              <p className="text-xs sm:text-xs font-medium uppercase tracking-widest text-ink-light">
                {config.icon} {label}
              </p>
              <p 
                className="text-sm sm:text-base font-serif font-semibold mt-1 truncate"
                style={{ color: config.color }}
              >
                {reference}
              </p>
            </div>
          </div>

          {/* Animated Chevron */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown 
              className="w-5 h-5 sm:w-6 sm:h-6"
              style={{ color: config.color, opacity: isLocked ? 0.5 : 1 }}
            />
          </motion.div>
        </div>
      </motion.button>

      {/* Expanded Content */}
      <motion.div
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={expandVariants}
        className="mt-2 overflow-hidden"
      >
        {/* Bible content and verse */}
        {children && (
          <div className="mb-4">
            {children}
          </div>
        )}

        {/* Polished Percentage Selector */}
        <motion.div 
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="p-4 sm:p-5 rounded-xl shadow-soft border"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            borderColor: "rgba(26, 26, 26, 0.08)",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-light mb-3 sm:mb-4">
            Mark Completion
          </p>
          
          {/* Segmented Control */}
          <div className="flex gap-2 sm:gap-2.5 p-1.5 rounded-lg bg-white bg-opacity-50 border border-gray-100">
            {percentOptions.map((pct, idx) => (
              <motion.button
                key={pct}
                onClick={() => {
                  if (!isLocked) {
                    onPercentageChange(pct);
                  }
                }}
                disabled={isLocked}
                whileHover={isLocked ? {} : { scale: 1.05 }}
                whileTap={isLocked ? {} : { scale: 0.95 }}
                className={`flex-1 py-2.5 sm:py-3 px-1 sm:px-2 rounded-md font-semibold text-xs sm:text-sm transition-all ${
                  isLocked ? "opacity-50 cursor-not-allowed" : ""
                }`}
                style={{
                  backgroundColor: percentage === pct ? config.color : "transparent",
                  color: percentage === pct ? "white" : config.color,
                  boxShadow: percentage === pct ? "0 4px 12px rgba(26, 26, 26, 0.15)" : "none",
                }}
              >
                {pct}%
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
