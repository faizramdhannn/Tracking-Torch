export default function ErrorBox({ result }: any) {
  return (
    <div className="flex flex-col shadow-lg justify-center items-center bg-white p-6 text-center min-h-screen">
      <p className="text-red-600 font-semibold text-base md:text-lg mb-2">
        Data tidak ditemukan
      </p>

      <p className="text-red-500 text-sm md:text-base">
        {result?.error && "Silakan periksa kembali nomor resi Anda."}
      </p>

      {result?.details && (
        <p className="text-red-400 text-xs md:text-sm mt-2">Detail: {result.details}</p>
      )}
    </div>
  );
}