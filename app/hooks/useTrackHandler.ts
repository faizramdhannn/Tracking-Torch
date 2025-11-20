"use client";

import { useState } from "react";
import { TrackingApiResponse } from "@/types/tracking";

export function useTrackHandler() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrackingApiResponse | null>(null);

  const handleTrack = async (stt: string) => {
    if (!stt.trim()) {
      setResult({
        success: false,
        error: "Nomor resi tidak boleh kosong",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/tracking/${stt}`);
      const json: TrackingApiResponse = await res.json();
      setResult(json);
    } catch (err) {
      setResult({
        success: false,
        error: "Gagal mengambil data tracking",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    result,
    setResult,
    handleTrack,
  };
}
