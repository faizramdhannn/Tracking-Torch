import HistoryItem from "./HistoryItem";

export default function HistorySection({
  groupedHistory,
  sortedDates,
  expandedPOD,
  togglePOD,
  formatTime,
}: any) {
  return (
    <>
      <h2 className="text-xl md:text-2xl font-bold text-[#06334d] mb-6">
        Riwayat Pengiriman
      </h2>

      <div className="space-y-8">
        {sortedDates.map((date: string, dateIndex: number) => (
          <div key={dateIndex}>
            <h3 className="text-sm md:text-base font-semibold text-gray-700 px-2 mb-2">
              {date}
            </h3>

            {groupedHistory[date].map((item: any, itemIndex: number) => {
              const podKey = `${dateIndex}-${itemIndex}`;
              const hasPOD =
                Boolean(item.receivedBy) ||
                (item.attachment && item.attachment.length);

              return (
                <HistoryItem
                  key={itemIndex}
                  item={item}
                  itemIndex={itemIndex}
                  dateIndex={dateIndex}
                  podKey={podKey}
                  hasPOD={hasPOD}
                  expandedPOD={expandedPOD}
                  togglePOD={togglePOD}
                  formatTime={formatTime}
                />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}