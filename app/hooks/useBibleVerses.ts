import { useState, useEffect } from "react";

export interface BibleVerse {
  book: string;
  chapter: number;
  verses: string;
  text: string;
  loading: boolean;
  error: string | null;
}

// Fetch Bible verses from Bible API (free, no auth needed)
export const useBibleVerses = (reference: string) => {
  const [verse, setVerse] = useState<BibleVerse>({
    book: "",
    chapter: 0,
    verses: "",
    text: "",
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        setVerse((prev) => ({ ...prev, loading: true, error: null }));

        // Use Bible API (free, no authentication required)
        const response = await fetch(
          `https://bible-api.com/${encodeURIComponent(reference)}?translation=web`
        );

        if (!response.ok) {
          throw new Error("Verse not found");
        }

        const data = await response.json();

        setVerse({
          book: data.verses[0].book_name,
          chapter: data.verses[0].chapter,
          verses: `${data.verses[0].chapter}:${data.verses[0].verse}-${data.verses[data.verses.length - 1].verse}`,
          text: data.text,
          loading: false,
          error: null,
        });
      } catch (err) {
        setVerse((prev) => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : "Failed to load verse",
        }));
      }
    };

    if (reference) {
      fetchVerse();
    }
  }, [reference]);

  return verse;
};

// Helper function to get all verses for a day
export const fetchDayVerses = async (
  otRef: string,
  ntRef: string,
  psRef: string,
  prRef: string
) => {
  try {
    const results = await Promise.all([
      fetch(`https://bible-api.com/${encodeURIComponent(otRef)}?translation=web`),
      fetch(`https://bible-api.com/${encodeURIComponent(ntRef)}?translation=web`),
      fetch(`https://bible-api.com/${encodeURIComponent(psRef)}?translation=web`),
      fetch(`https://bible-api.com/${encodeURIComponent(prRef)}?translation=web`),
    ]);

    const data = await Promise.all(results.map((r) => r.json()));

    return {
      ot: data[0].text,
      nt: data[1].text,
      ps: data[2].text,
      pr: data[3].text,
    };
  } catch (err) {
    console.error("Failed to fetch verses:", err);
    return null;
  }
};
