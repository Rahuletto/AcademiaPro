export interface InfoResponse {
  userInfo: UserInfo;
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
