import type { Attendance } from "./Attendance";
import type { SuccessCourseResponse } from "./Course";
import type { Mark } from "./Marks";
import type { Timetable } from "./Timetable";
import type { UserInfo } from "./User";

export interface AllResponse {
	attendance: Attendance;
	courses: SuccessCourseResponse;
	lastUpdated: number;
	marks: Marks;
	ophour?: string;
	subscribed?: boolean;
	subscribedSince?: number;
	regNumber: string;
	timetable: Timetable;
	token: string;
	user: UserInfo;
	tokenInvalid?: boolean;
	ratelimit?: boolean;
	error?: string;
	status: number;
}

export interface Marks {
	marks: Mark[];
	regNumber: string;
	status: number;
}
