"use client";

import { useMemo } from "react";
import { parseTrackingData } from "@/utils/tracking/parsers";
import { groupHistoryByDate } from "@/utils/tracking/groupHistory";
import { getProgressSteps } from "@/utils/tracking/progress";
import { TrackingApiResponse, TrackingData } from "@/types/tracking";

export function useTrackingData(result: TrackingApiResponse | null, stt: string) {
  const trackingData: TrackingData | null = useMemo(() => {
    return parseTrackingData(result, stt);
  }, [result, stt]);

  const reversedHistory = useMemo(() => {
    return trackingData ? [...trackingData.history].reverse() : [];
  }, [trackingData]);

  const groupedHistory = useMemo(() => {
    return trackingData ? groupHistoryByDate(reversedHistory) : {};
  }, [trackingData, reversedHistory]);

  const sortedDates = useMemo(() => {
    const dates = Object.keys(groupedHistory);
    return dates.sort((a, b) => {
      const firstA = groupedHistory[a][0].dateTime;
      const firstB = groupedHistory[b][0].dateTime;
      return new Date(firstB).getTime() - new Date(firstA).getTime();
    });
  }, [groupedHistory]);

  const progressSteps = useMemo(() => {
    return trackingData
      ? getProgressSteps(trackingData.history, trackingData.courier)
      : [];
  }, [trackingData]);

  return {
    trackingData,
    reversedHistory,
    groupedHistory,
    sortedDates,
    progressSteps,
  };
}
