export interface AttendanceResponse {
  expireAt: number;
  attendance: AttendanceCourse[];
}

export interface AttendanceCourse {
  courseCode: string;
  courseTitle: string;
  category: string;
  facultyName: string;
  slot: string;
  hoursConducted: string;
  hoursAbsent: string;
  attendancePercentage: string;
}
