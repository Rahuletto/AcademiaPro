import type { ProscrapeError } from "./Error";

export type CalendarResponse = SuccessCalendarResponse & ProscrapeError;
export interface SuccessCalendarResponse {
	today: Day;
	index: number;
	calendar: Calendar[];
	requestedAt: number | null;
}

export interface Calendar {
	month: string;
	days: Day[];
}

export interface Day {
	date: string;
	day: string;
	event?: string;
	dayOrder: string;
}
