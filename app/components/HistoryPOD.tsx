export default function HistoryPOD({ item }: any) {
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
              <img
                src={img}
                alt="Foto Penerima"
                className="w-full max-w-xs rounded-lg border-2 border-gray-200 mx-auto block"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
