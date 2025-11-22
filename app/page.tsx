"use client";

import { useState } from "react";
import { Package, X } from "lucide-react";

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { expandedPOD, togglePOD } = useTogglePOD();
  const { loading, result, handleTrack } = useTrackHandler();
  const { trackingData, groupedHistory, sortedDates, progressSteps } =
    useTrackingData(result, stt);

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-[1200px] mx-auto flex gap-6 relative px-5">
        {/* ======================================
         * MOBILE BUTTON (Floating)
         * ====================================== */}
        <button
          className="md:hidden fixed left-0 top-1/2 -translate-y-1/2 bg-[#06334d] text-white px-4 py-3 rounded-r-xl shadow-lg z-40"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Package className="w-6 h-6" />
        </button>

        {/* ======================================
         * MOBILE OVERLAY
         * ====================================== */}
        {isDrawerOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}

        {/* ======================================
         * INPUT BOX (Drawer Mobile + Sticky Desktop)
         * ====================================== */}
        <div
          className={`
            fixed md:relative 
            inset-y-0 left-0 
            w-[85%] max-w-xs md:w-full 
            bg-white md:bg-transparent
            z-50 md:z-auto
            transform transition-transform duration-300 ease-in-out
            ${
              isDrawerOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }
          `}
        >
          <div className="md:sticky md:top-[35%] h-full md:h-auto bg-white rounded-r-2xl md:rounded-2xl shadow-2xl md:shadow-lg p-6">
            {/* Close drawer (Mobile only) */}
            <button
              className="md:hidden absolute top-4 right-4 text-gray-500"
              onClick={() => setIsDrawerOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-md:my-5 md:mb-5">
              <h2 className="text-xl text-center font-bold text-gray-900">
                Cek Resi Kamu
              </h2>
            </div>

            {/* Input fields */}
            <div className="grid gap-3">
              <input
                type="text"
                value={stt}
                onChange={(e) => setStt(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTrack(stt)}
                placeholder="Masukkan Nomor Resi"
                className="
                  border-2 border-gray-300 
                  h-11 
                  px-3 
                  rounded-lg 
                  text-sm md:text-base 
                  focus:border-[#abc82e] 
                  focus:outline-none
                "
              />

              <button
                onClick={() => handleTrack(stt)}
                disabled={loading}
                className="
                  bg-[#06334d] 
                  text-white 
                  h-11 
                  rounded-lg 
                  px-4 
                  font-semibold 
                  disabled:bg-gray-400 
                  hover:bg-[#052a3f] 
                  text-sm md:text-base
                "
              >
                {loading ? "Mencari..." : "Lacak"}
              </button>
            </div>
          </div>
        </div>

        {/* ======================================
         * RESULT SECTION
         * ====================================== */}
        <div className="w-full md:w-[80%]">
          {trackingData && (
            <div className="flex flex-col gap-20 justify-center bg-white min-h-screen shadow-lg p-6 md:p-8">
              <div className="flex justify-center">
                <img
                  src={
                    trackingData.courier === "Lion Parcel"
                      ? "/Logo Lion.png"
                      : "/Logo Sicepat.png"
                  }
                  alt="Courier Logo"
                  className="h-24 md:h-32 object-contain"
                />
              </div>

              <ProgressSteps steps={progressSteps} />
              <div className="grid gap-5">
                <AddressBlock trackingData={trackingData} />

                <HistorySection
                  groupedHistory={groupedHistory}
                  sortedDates={sortedDates}
                  expandedPOD={expandedPOD}
                  togglePOD={togglePOD}
                  formatTime={formatTime}
                />
              </div>
            </div>
          )}

          {!loading && !trackingData && !result?.error && <EmptyState />}
          {result?.error && <ErrorBox result={result} />}
        </div>
      </div>
    </main>
  );
}
