import type { ProscrapeError } from "./Error";

export type AttendanceResponse = Attendance & ProscrapeError;

export interface Attendance {
	attendance: AttendanceCourse[];
	regNumber: string;
	status: number;
}

export interface AttendanceCourse {
	attendancePercentage: string;
	category: "Practical" | "Theory";
	courseCode: string;
	courseTitle: string;
	facultyName: string;
	hoursAbsent: string;
	hoursConducted: string;
	slot: string;
}

export interface DateRange {
	from: Date | null;
	to: Date | null;
}

export interface CategorizedDateRange {
	from: Date;
	to: Date;
	category: "Leave" | "OD";
}

export interface CalendarMonth {
	month: string;
	days: {
		date: string;
		day: string;
		dayOrder: string;
	}[];
}

export interface TimetableDay {
	day: number;
	table: (string | undefined)[];
}
