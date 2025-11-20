export interface HistoryItem {
  dateTime: string;   // atau Date kalau API kamu return Date object
  status: string;
  [key: string]: any;
}