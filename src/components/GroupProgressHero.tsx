import { Reader, Progress } from "../types";
import { calculateGroupPercent } from "../lib/stats";

interface GroupProgressHeroProps {
  readers: Reader[];
  progress: Progress[];
}

export function GroupProgressHero({
  readers,
  progress,
}: GroupProgressHeroProps) {
  const percent = calculateGroupPercent(readers, progress);
  
  // Encouraging messages based on progress
  const getMessage = (p: number): string => {
    if (p === 0) return "Let's get started! 📖";
    if (p < 10) return "Off to a great start! 🙏";
    if (p < 25) return "One quarter done! 🌟";
    if (p < 50) return "Halfway through! 💪";
    if (p < 75) return "Three quarters there! 🔥";
    if (p < 90) return "Almost there! 🎯";
    return "Complete! 🎉";
  };

  return (
    <div className="bg-gradient-to-br from-gold from-20% via-gold via-50% to-amber-900 to-100% rounded-2xl p-6 text-white shadow-lg">
      <h2 className="text-lg font-serif mb-2">Your Group's Journey</h2>
      
      {/* Circular Progress */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-24 h-24 flex-shrink-0">
          <svg className="w-24 h-24 transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="48"
              cy="48"
              r="44"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="4"
            />
            {/* Progress circle */}
            <circle
              cx="48"
              cy="48"
              r="44"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeDasharray={`${(percent / 100) * 276.3} 276.3`}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold">{percent}%</span>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-sm opacity-90 mb-2">
            {readers.length * 90} readings total to complete
          </p>
          <p className="text-2xl font-bold mb-2">{getMessage(percent)}</p>
          <p className="text-sm opacity-90">
            {readers.length} friends reading together through the Bible
          </p>
        </div>
      </div>

      {/* Progress Bar Below */}
      <div className="mt-4 w-full bg-white bg-opacity-20 rounded-full h-2">
        <div
          className="bg-white h-full rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
