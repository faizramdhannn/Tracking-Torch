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
      <div className="flex items-center gap-3 py-2 hover:bg-gray-50 px-2 rounded">
        <div
          className={`w-5 h-5 rounded-full shrink-0 mt-0.5 border-2 border-white shadow ${
            dateIndex === 0 && itemIndex === 0 ? "bg-[#06334d]" : "bg-gray-300"
          }`}
        />

        <span className="text-s text-gray-500 min-w-[60px] text-center">
          {item?.dateTime ? formatTime(item.dateTime) : ""}
        </span>

        <div className="flex-1 min-w-0">
          <p className="text-s text-gray-600 leading-relaxed">
            {item.description
              ?.toLowerCase()
              .replace(/\b\w/g, (c: string) => c.toUpperCase())}
          </p>

          {!!hasPOD && (
            <button
              onClick={() => togglePOD(podKey)}
              className="text-[#06334d] hover:text-[#acc72f] text-s underline mt-1 cursor-pointer"
            >
              {expandedPOD.includes(podKey)
                ? "Sembunyikan Bukti Pengiriman"
                : "Lihat Bukti Pengiriman"}
            </button>
          )}
        </div>
      </div>

      {!!hasPOD && expandedPOD.includes(podKey) && (
        <div className="ml-[88px] mb-3 p-3 bg-[#abc82e33] rounded-lg">
          <HistoryPOD item={item} />
        </div>
      )}
    </>
  );
}
