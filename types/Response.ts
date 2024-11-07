import { AttendanceCourse } from "./Attendance";
import { Calendar, Day } from "./Calendar";
import { Course } from "./Course";
import { Mark } from "./Marks";
import { SuccessTimeTableResponse } from "./Timetable";
import { User } from "./User";

export interface AllResponses {
  user: User;
  attendance: AttendanceCourse[];
  marks: Mark[];
  timetable: SuccessTimeTableResponse;
  course: { courses: Course[] };
  requestedAt: number;
  error?: string;
}

export interface CalResponses {
  today: Day;
  calendar: Calendar[];
  requestedAt: number;
  error?: string;
  index: number;
}
