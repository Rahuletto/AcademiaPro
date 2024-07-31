import { ProscrapeError } from "./Error";

export type DayOrderResponse = SuccessDayOrderResponse & ProscrapeError;
export interface SuccessDayOrderResponse {
  date: string;
  dayOrder: string;
  expireAt: number;
}
