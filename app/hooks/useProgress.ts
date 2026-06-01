'use client';

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Progress } from "../types";

export function useProgress() {
  const [progress, setProgress] = useState<Progress[]>([]);

  useEffect(() => {
    // Initial fetch
    const fetchProgress = async () => {
      const { data, error } = await supabase.from("progress").select("*");
      if (!error) {
        setProgress(data || []);
      }
    };

    fetchProgress();

    // Subscribe to realtime changes
    const subscription = supabase
      .channel("public:progress")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "progress" },
        (payload) => {
          setProgress((prev) => {
            const index = prev.findIndex(
              (p) =>
                p.reader_name === (payload.new as Progress).reader_name &&
                p.day === (payload.new as Progress).day
            );
            if (payload.eventType === "INSERT") {
              if (index === -1) {
                return [...prev, payload.new as Progress];
              }
              return prev;
            } else if (payload.eventType === "UPDATE") {
              if (index !== -1) {
                const updated = [...prev];
                updated[index] = payload.new as Progress;
                return updated;
              }
              return prev;
            } else if (payload.eventType === "DELETE") {
              return prev.filter((p) => !(p.reader_name === (payload.old as Progress).reader_name && p.day === (payload.old as Progress).day));
            }
            return prev;
          });
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { progress };
}
