import type { ProscrapeError } from "./Error";

export type MarksResponse = SuccessMarksResponse & ProscrapeError;
export interface SuccessMarksResponse {
	marks: Mark[];
	requestedAt: number | null;
}

export interface Mark {
	courseName: string;
	courseCode: string;
	courseType: string;
	overall: Overall;
	testPerformance: TestPerformance[];
}

export interface Overall {
	marks?: string;
	total: string;
}

export interface TestPerformance {
	test: string;
	marks: Marks;
}

export interface Marks {
	scored?: string;
	total: string;
}
