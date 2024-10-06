import { ProscrapeError } from "./Error";

export type CourseResponse = SuccessCourseResponse & ProscrapeError;
export interface SuccessCourseResponse {
  courses: Course[];
  requestedAt: number | null;
}

export interface Course {
  code: string;
  title: string;
  credit: string;
  type: string;
  slotType: string;
  faculty: string;
  slot: string;
  room: string;
}
