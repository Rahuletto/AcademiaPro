export interface ExamMarks {
  semester: string;
  courseCode: string;
  courseTitle: string;
  credit: string;
  grade: string;
  result: string;
}

export interface ExamData {
  name: string;
  examDate: string;
  program: string;
  marks: ExamMarks[];
}
