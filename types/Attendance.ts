export interface AttendanceResponse {
    attendance: Course[]
  }
  
  export interface Course {
    courseCode: string
    courseTitle: string
    category: string
    facultyName: string
    slot: string
    hoursConducted: string
    hoursAbsent: string
    attendancePercentage: string
  }
  