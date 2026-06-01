import { Reader, Progress } from "../types";
import { getReaderActivity, formatTimeAgo } from "../lib/groupStats";
import { CheckCircle, Zap } from "lucide-react";

interface ActivityFeedProps {
  readers: Reader[];
  progress: Progress[];
}

export function ActivityFeed({ readers, progress }: ActivityFeedProps) {
  const activities = getReaderActivity(readers, progress, 8);

  if (activities.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500 text-sm">
        No activity yet
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-ink mb-3">Recently Completed</h3>
      {activities.map((activity, idx) => (
        <div
          key={`${activity.readerName}-${activity.day}-${idx}`}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold hover:bg-opacity-5 transition-colors"
        >
          {activity.type === "day_complete" ? (
            <Zap className="w-4 h-4 text-gold flex-shrink-0" />
          ) : (
            <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-ink truncate">
              {activity.readerName}
            </p>
            <p className="text-xs text-gray-600">
              {activity.type === "day_complete" ? "Finished" : "Read"} Day {activity.day}
            </p>
          </div>
          <span className="text-xs text-gray-500 flex-shrink-0 whitespace-nowrap">
            {formatTimeAgo(activity.timestamp)}
          </span>
        </div>
      ))}
    </div>
  );
}
