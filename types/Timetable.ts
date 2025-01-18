import type { ProscrapeError } from "./Error";

export type TimeTableResponse = Timetable & ProscrapeError;
export interface Timetable {
	batch: string;
	regNumber: string;
	schedule: Schedule[];
}

export interface ScheduleSlot {
	code: string;
	name: string;
	slot: string;
	roomNo: string;
	courseType: "Theory" | "Practical";
	online: boolean;
	isOptional?: boolean;
}

export interface Schedule {
	day: number;
	table: (ScheduleSlot | null)[];
}
