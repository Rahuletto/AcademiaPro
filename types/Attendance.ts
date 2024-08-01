import { ProscrapeError } from "./Error";

export type AttendanceResponse = SuccessAttendanceResponse & ProscrapeError;

export interface SuccessAttendanceResponse {
  expireAt: number;
  attendance: AttendanceCourse[];
}

export interface AttendanceCourse {
  courseCode: string;
  courseTitle: string;
  category: "Theory" | "Practical";
  facultyName: string;
  slot: string;
  hoursConducted: string;
  hoursAbsent: string;
  attendancePercentage: string;
}
