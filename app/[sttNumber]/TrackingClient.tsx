"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Home from "../page";

export default function TrackingClient({ sttNumber }: { sttNumber: string }) {
  const router = useRouter();

  useEffect(() => {
    // Set localStorage agar Home component bisa auto-fetch
    if (sttNumber) {
      localStorage.setItem("AUTO_STT", sttNumber);
    }
  }, [sttNumber]);

  // Wrap Home component dengan handler untuk redirect saat tracking baru
  const handleNewTracking = (newStt: string) => {
    if (newStt !== sttNumber) {
      // Redirect ke dynamic route baru
      router.push(`/${newStt}`);
    }
  };

  return <Home onNewTracking={handleNewTracking} />;
}