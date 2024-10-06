import { ProscrapeError } from "./Error";

export type TimeTableResponse = SuccessTimeTableResponse & ProscrapeError;
export interface SuccessTimeTableResponse {
  regNumber: string;
  batch: string;
  schedule: { day: number; table: (string | undefined)[] }[];
  requestedAt: number | null;
}
