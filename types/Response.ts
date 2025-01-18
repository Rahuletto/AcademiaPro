import { Attendance } from "./Attendance";
import { SuccessCourseResponse } from "./Course";
import { Mark } from "./Marks";
import { Timetable } from "./Timetable";
import { UserInfo } from "./User";

export interface AllResponse {
  attendance: Attendance
  courses: SuccessCourseResponse
  lastUpdated: number
  marks: Marks
  ophour?: string;
  regNumber: string
  timetable: Timetable
  token: string
  user: UserInfo;
  token_invalid?: boolean;
  ratelimit?: boolean;
  error?: string;
  status: number;
}


export interface Marks {
  marks: Mark[]
  regNumber: string
  status: number
}

