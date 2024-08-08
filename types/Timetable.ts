import { ProscrapeError } from "./Error";

export type TimeTableResponse = SuccessTimeTableResponse & ProscrapeError;
export interface SuccessTimeTableResponse {
  table: Table[];
  expireAt: number;
}

export interface Table {
  day: number;
  dayOrder: string;
  subjects: (string | undefined)[];
}
