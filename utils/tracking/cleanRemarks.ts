export const cleanRemarks = (text: string) => {
  // Jika mengandung "TELAH DIPROSES", potong fix:
  if (text.toLowerCase().includes("telah diproses")) {
    return "PAKETMU TELAH DIPROSES";
  }
  return text;
};
