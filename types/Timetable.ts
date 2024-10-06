import { ProscrapeError } from "./Error";

export type TimeTableResponse = SuccessTimeTableResponse & ProscrapeError;
export interface SuccessTimeTableResponse {
  regNumber: string;
  batch: string;
  schedule: ((string | undefined)[])[];
  requestedAt: number | null;
}
