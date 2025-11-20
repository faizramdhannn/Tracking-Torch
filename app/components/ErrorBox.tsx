export default function ErrorBox({ result }: any) {
  return (
    <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
      <p className="text-red-600 font-semibold text-lg mb-2">Heyy Sob</p>
      <p className="text-red-500 text-sm">{result.error}</p>
      {result.details && (
        <p className="text-red-400 text-xs mt-2">Detail: {result.details}</p>
      )}
    </div>
  );
}
