export interface Course {
  courseCode: string;
  courseTitle: string;
  credit: string;
  regnType: string;
  category: string;
  courseType: "Theory" | "Practical";
  facultyName: string;
  slot: string;
  gcrCode: string;
  roomNo: string;
  academicYear: string;
}
