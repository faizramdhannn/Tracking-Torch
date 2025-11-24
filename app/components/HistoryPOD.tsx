"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image"

export default function HistoryPOD({ item }: any) {
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  return (
    <>
      {item.receivedBy && (
        <p className="text-sm text-gray-700 mb-2">
          <span className="font-semibold">Diterima oleh:</span>{" "}
          {item.receivedBy}
        </p>
      )}

      {item.attachment && item.attachment.length > 0 && (
        <div className="space-y-2">
          {item.attachment.slice(0, 1).map((img: string, idx: number) => (
            <div key={idx}>
              <p className="text-xs text-gray-600 mb-1 font-semibold">
                Foto Penerima:
              </p>

              {/* Thumbnail */}
              <img
                src={img}
                alt="Foto Penerima"
                className="
                  w-full 
                  max-w-sm 
                  rounded-lg 
                  border border-gray-300 
                  mx-auto 
                  cursor-pointer 
                  hover:opacity-90 
                  transition
                "
                onClick={() => setPreviewImg(img)}
              />
            </div>
          ))}
        </div>
      )}

      {/* =======================
          MODAL PREVIEW IMAGE
      ======================= */}
      {previewImg && (
        <div
          className="
            fixed inset-0 
            bg-black/60 
            flex items-center justify-center 
            z-50
          "
          onClick={() => setPreviewImg(null)}
        >
          <div
            className="relative w-full max-w-[700px] max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImg(null)}
              className="absolute top-3 right-3 bg-black/60 rounded-full p-1 text-white hover:bg-black/80 transition"
            >
              <X className="w-8 h-8" />
            </button>

            <img
              src={previewImg}
              alt="Preview POD"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
