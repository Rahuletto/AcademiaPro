import { AttendanceCourse } from "./Attendance";
import { Calendar, Day } from "./Calendar";
import { Course } from "./Course";
import { DayOrderResponse } from "./DayOrder";
import { Mark } from "./Marks";
import { Table } from "./Timetable";
import { User } from "./User";

export interface AllResponses {
  user: User;
  attendance: AttendanceCourse[];
  marks: Mark[];
  timetable: Table[];
  courses: Course[];
  requestedAt: number;
  error?: string;

}

export interface CalResponses {
  today: Day;
  calendar: Calendar[];
  requestedAt: number;
  error?: string;
}
