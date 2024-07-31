import { ProscrapeError } from "./Error";

export type UserData = SuccessUserData & ProscrapeError;
export type User = UserInfo & ProscrapeError

export interface SuccessUserData {
  user: UserInfo;
  expireAt: number;
}

export interface UserInfo {
  reg: string;
  name: string;
  combo: string;
  mobile: string;
  program: string;
  dept: string;
  year: number;
  semester: number;
  classroom: string;
  section: string;
  batch: string;
}
