import { Package } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="bg-white flex flex-col justify-center rounded-2xl shadow-lg text-center min-h-screen">
      <Package className="w-16 h-16 md:w-20 md:h-20 text-[#06334d] mx-auto mb-4" />
      <p className="text-gray-500 text-base md:text-lg px-4">
        Masukkan nomor resi untuk melacak paket Anda
      </p>
    </div>
  );
}