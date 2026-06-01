'use client';

import { useState, useEffect } from "react";

export function useCurrentReader() {
  const [currentReader, setCurrentReaderState] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("currentReader");
    setCurrentReaderState(stored);
  }, []);

  const setCurrentReader = (name: string | null) => {
    if (name) {
      localStorage.setItem("currentReader", name);
    } else {
      localStorage.removeItem("currentReader");
    }
    setCurrentReaderState(name);
  };

  return { currentReader, setCurrentReader };
}
