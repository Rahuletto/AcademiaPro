import { AttendanceCourse } from "./Attendance";
import { Course } from "./Course";
import { Mark } from "./Marks";
import { Table } from "./Timetable";
import { User } from "./User";

export interface AllResponses {
    user: User;
    attendance: AttendanceCourse[];
    marks: Mark[];
    timetable: Table[];
    courses: Course[];
    requestedAt: number
}