"use client";

import { useState } from "react";

export function useTogglePOD() {
  const [expandedPOD, setExpandedPOD] = useState<string[]>([]);

  const togglePOD = (key: string) => {
    setExpandedPOD((prev) =>
      prev.includes(key)
        ? prev.filter((k) => k !== key)
        : [...prev, key]
    );
  };

  return {
    expandedPOD,
    togglePOD,
    setExpandedPOD,
  };
}
