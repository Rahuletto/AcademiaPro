import { ProscrapeError } from "./Error";

export type TimeTableResponse = SuccessTimeTableResponse & ProscrapeError;
export interface SuccessTimeTableResponse {
  table: Table[];
  requestedAt: number | null;
}

export interface Table {
  day: number;
  dayOrder: string;
  subjects: (string | undefined)[];
}
