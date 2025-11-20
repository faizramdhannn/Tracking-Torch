import { HistoryItem } from "@/types/history";

export type FormatDateFn = (input: string) => string;

export const groupHistoryByDate = (
  history: HistoryItem[],
  formatDate: FormatDateFn = (d) => new Date(d).toISOString().split("T")[0] // default: YYYY-MM-DD
) => {
  return history.reduce<Record<string, HistoryItem[]>>((acc, item) => {
    const date = formatDate(item.dateTime);

    if (!acc[date]) acc[date] = [];
    acc[date].push(item);

    return acc;
  }, {});
};
