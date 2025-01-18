import type { ProscrapeError } from "./Error";

export type CourseResponse = SuccessCourseResponse & ProscrapeError;
export interface SuccessCourseResponse {
	courses: Course[];
	regNumber: string;
}

export interface Course {
	academicYear: string;
	category: string;
	code: string;
	courseCategory: string;
	credit: string;
	faculty: string;
	room: string;
	slot: string;
	slotType: string;
	title: string;
	type: string;
}
