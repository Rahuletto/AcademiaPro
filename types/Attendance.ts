import { ProscrapeError } from "./Error";

export type AttendanceResponse = SuccessAttendanceResponse & ProscrapeError;

export interface SuccessAttendanceResponse {
  requestedAt: number | null;
  attendance: AttendanceCourse[];
}

export interface AttendanceCourse {
  courseCode: string;
  courseTitle: string;
  category: "Practical" | "Theory";
  facultyName: string;
  slot: string;
  hoursConducted: string;
  hoursAbsent: string;
  attendancePercentage: string;
}

export interface DateRange {
  from: Date | null;
  to: Date | null;
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
  table: (string|undefined)[];
}