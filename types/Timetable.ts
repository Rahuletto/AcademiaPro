import { ProscrapeError } from "./Error";

export type TimeTableResponse = SuccessTimeTableResponse & ProscrapeError;
export interface SuccessTimeTableResponse {
  regNumber: string;
  batch: string;
  schedule: Table[];
  requestedAt: number | null;
}

export interface Table { day: number; table: (string | undefined)[] }