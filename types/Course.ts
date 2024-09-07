
import { ProscrapeError } from "./Error";


export type CourseResponse = SuccessCourseResponse & ProscrapeError;
export interface SuccessCourseResponse {
  courses: Course[];
  requestedAt: number | null;
}

export interface Course {
  courseCode: string;
  courseTitle: string;
  credit: string;
  regnType: string;
  category: string;
  courseType: "Theory" | "Practical";
  facultyName: string;
  slot: string;
  gcrCode: string;
  roomNo: string;
  academicYear: string;
}
