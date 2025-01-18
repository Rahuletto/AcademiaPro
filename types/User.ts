import type { ProscrapeError } from "./Error";

export type UserData = SuccessUserData & ProscrapeError;
export type User = UserInfo & ProscrapeError;

export interface SuccessUserData {
	user: UserInfo;
	requestedAt: number | null;
}

export interface UserInfo {
	combo: string;
	batch: string;
	department: string;
	mobile: string;
	name: string;
	program: string;
	regNumber: string;
	section: string;
	semester: number;
	year: number;
}
