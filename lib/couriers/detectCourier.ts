export const detectCourier = (
  sttNumber: string
): "lion" | "sicepat" | "unknown" => {
  const upper = sttNumber.toUpperCase();

  const isLion =
    upper.startsWith("99LP") ||
    upper.startsWith("19LP") ||
    upper.startsWith("88LP");

  const isSicepat = upper.startsWith("00");

  if (isLion) return "lion";
  if (isSicepat) return "sicepat";

  return "unknown";
};
