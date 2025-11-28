import HistoryPOD from "./HistoryPOD";

export default function HistoryItem({
  item,
  itemIndex,
  dateIndex,
  podKey,
  hasPOD,
  expandedPOD,
  togglePOD,
  formatTime,
}: any) {
  return (
    <>
      <div className="flex items-center gap-4 py-2 hover:bg-gray-50 px-2 rounded">
        {/* KOLOM 1: Titik + Jam (Horizontal) */}
        <div className="flex items-center gap-3 min-w-[100px]">
          <div
            className={`w-5 h-5 rounded-full shrink-0 border-2 border-white shadow ${
              dateIndex === 0 && itemIndex === 0 ? "bg-[#06334d]" : "bg-gray-300"
            }`}
          />
          <span className="text-sm md:text-base text-gray-500 whitespace-nowrap">
            {item?.dateTime ? formatTime(item.dateTime) : ""}
          </span>
        </div>

        {/* KOLOM 2: Deskripsi + POD Button */}
        <div className="flex-1 min-w-0">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {item.description
              ?.toLowerCase()
              .replace(/\b\w/g, (c: string) => c.toUpperCase())}
          </p>

          {!!hasPOD && (
            <button
              onClick={() => togglePOD(podKey)}
              className="text-[#06334d] hover:text-[#acc72f] text-sm md:text-base underline mt-1 cursor-pointer"
            >
              {expandedPOD.includes(podKey)
                ? "Sembunyikan Bukti Pengiriman"
                : "Lihat Bukti Pengiriman"}
            </button>
          )}
        </div>
      </div>

      {!!hasPOD && expandedPOD.includes(podKey) && (
        <div className="ml-[116px] mb-3 p-3 rounded-lg bg-gray-50">
          <HistoryPOD item={item} />
        </div>
      )}
    </>
  );
}