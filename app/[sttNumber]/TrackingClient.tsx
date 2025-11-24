"use client";

import { useEffect } from "react";
import Home from "../page";

export default function TrackingClient({ sttNumber }: { sttNumber: string }) {
  useEffect(() => {    
    // Set localStorage agar Home component bisa auto-fetch
    if (sttNumber) {
      localStorage.setItem("AUTO_STT", sttNumber);
      // Tidak ada redirect, tetap di URL /[sttNumber]
    }
  }, [sttNumber]);

  return <Home />;
}