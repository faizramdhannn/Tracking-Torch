"use client";

import { useState } from "react";
import { Package } from "lucide-react";

import ProgressSteps from "./components/ProgressSteps";
import AddressBlock from "./components/AddressBlock";
import HistorySection from "./components/HistorySection";
import EmptyState from "./components/EmptyState";
import ErrorBox from "./components/ErrorBox";
import { formatTime } from "../utils/tracking/format";
import { useTrackHandler } from "./hooks/useTrackHandler";
import { useTogglePOD } from "./hooks/useTogglePOD";
import { useTrackingData } from "./hooks/useTrackingData";

export default function Home() {
  const [stt, setStt] = useState("");
  const { expandedPOD, togglePOD } = useTogglePOD();
  const { loading, result, handleTrack } = useTrackHandler();
  const { trackingData, groupedHistory, sortedDates, progressSteps } =
    useTrackingData(result, stt);

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* =====================================
         * LEFT STICKY INPUT BOX (DESKTOP ONLY)
         * ===================================== */}
        <div className="md:col-span-4 lg:col-span-3 min-h-screen">
          <div className="md:sticky md:top-[40%]">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-7">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Package className="w-8 h-8 text-[#06334d]" />
                <h1 className="text-2xl font-bold text-gray-800 text-center md:text-left">
                  Cek Resi Kamu
                </h1>
              </div>

              <div className="grid gap-3">
                <input
                  type="text"
                  value={stt}
                  onChange={(e) => setStt(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrack(stt)}
                  placeholder="Masukkan Nomor Resi"
                  className="text-black flex-1 border-2 border-gray-300 p-3 rounded-lg focus:border-[#abc82e] text-lg"
                />

                <button
                  onClick={() => handleTrack(stt)}
                  disabled={loading}
                  className="bg-[#06334d] text-white px-6 py-3 rounded-lg hover:bg-[#052a3f] text-lg font-semibold disabled:bg-gray-400"
                >
                  {loading ? "Mencari..." : "Lacak"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
         * RIGHT RESULT SECTION
         * ===================================== */}
        <div className="md:col-span-8 lg:col-span-9 space-y-6">

          {/* RESULT SECTION */}
          {trackingData && (
            <>
              {/* COURIER LOGO */}
              <div className="flex justify-center">
                <img
                  src={
                    trackingData.courier === "Lion Parcel"
                      ? "/Logo Lion.png"
                      : "/Logo Sicepat.png"
                  }
                  alt="Courier Logo"
                  className="h-32 object-contain"
                />
              </div>

              <ProgressSteps steps={progressSteps} />
              <AddressBlock trackingData={trackingData} />

              <HistorySection
                groupedHistory={groupedHistory}
                sortedDates={sortedDates}
                expandedPOD={expandedPOD}
                togglePOD={togglePOD}
                formatTime={formatTime}
              />
            </>
          )}

          {/* EMPTY STATE */}
          {!loading && !trackingData && !result?.error && <EmptyState />}

          {/* ERROR STATE */}
          {result?.error && <ErrorBox result={result} />}
        </div>
      </div>
    </main>
  );
}
