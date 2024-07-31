import { ProscrapeError } from "./Error";


export type CalendarResponse = SuccessCalendarResponse & ProscrapeError;
export interface SuccessCalendarResponse {
  calendar: Calendar[];
  expireAt: number;
}

export interface Calendar {
  month: string;
  days: Day[];
}

export interface Day {
  date: string;
  day: string;
  holiday?: string;
  dayOrder: string;
}
