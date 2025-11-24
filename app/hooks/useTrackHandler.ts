import { useState } from "react";

export function useTrackHandler() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleTrack = async (stt: string) => {
    if (!stt.trim()) {
      setResult({ error: "Nomor resi tidak boleh kosong" });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      // Gunakan absolute path yang selalu dimulai dari root
      const response = await fetch(`/api/tracking/${stt.trim()}`);
      const data = await response.json();

      if (!response.ok) {
        setResult({ error: data.error || "Gagal mengambil data" });
      } else {
        setResult(data);
      }
    } catch (error) {
      console.error("Tracking error:", error);
      setResult({ error: "Terjadi kesalahan saat melacak paket" });
    } finally {
      setLoading(false);
    }
  };

  return { loading, result, handleTrack };
}
