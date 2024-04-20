export interface InfoResponse {
  userInfo: UserInfo;
}

export interface UserInfo {
  regNo: string;
  name: string;
  program: string;
  department: string;
  specialization: string;
  semester: string;
  combo: string;
  batch: string;
}
