import { ProscrapeError } from "./Error";

export type UserData = SuccessUserData & ProscrapeError;
export type User = UserInfo & ProscrapeError

export interface SuccessUserData {
  user: UserInfo;
  requestedAt: number | null;
}


export interface UserInfo {
  regNumber: string;
  year: number;
  name: string;
  batch: string;
  mobile: string;
  program: string;
  department: string;
  section: string;
  semester: string;
  classRoom: string;
  combo: string;
}
