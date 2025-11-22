import { HistoryItem } from "@/types/history";

export type FormatDateFn = (input: string) => string;

export const groupHistoryByDate = (
  history: HistoryItem[],
  formatDate: FormatDateFn = (d) =>
    new Date(d).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
) => {
  return history.reduce<Record<string, HistoryItem[]>>((acc, item) => {
    const date = formatDate(item.dateTime);

    if (!acc[date]) acc[date] = [];
    acc[date].push(item);

    return acc;
  }, {});
};

