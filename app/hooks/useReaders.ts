'use client';

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Reader } from "../types";

export function useReaders() {
  const [readers, setReaders] = useState<Reader[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial fetch
    const fetchReaders = async () => {
      const { data, error } = await supabase
        .from("readers")
        .select("*")
        .order("created_at", { ascending: true });
      if (!error) {
        setReaders(data || []);
      }
      setLoading(false);
    };

    fetchReaders();

    // Subscribe to realtime changes
    const subscription = supabase
      .channel("public:readers")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "readers" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setReaders((prev) => [...prev, payload.new as Reader]);
          } else if (payload.eventType === "DELETE") {
            setReaders((prev) =>
              prev.filter((r) => r.name !== (payload.old as Reader).name)
            );
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { readers, loading };
}
