
export interface DayData {
	date: string;
	day: string;
	event: string | null;
	dayOrder: string;
}

export interface CalendarData {
	month: string;
	days: DayData[];
}
