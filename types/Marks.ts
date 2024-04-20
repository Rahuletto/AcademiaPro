export interface MarksResponse {
  marks: Mark[];
}

export interface Mark {
  courseName: string;
  courseCode: string;
  courseType: string;
  testPerformance: TestPerformance[];
}

export interface TestPerformance {
  test: string;
  marks: Marks;
}

export interface Marks {
  scored: string;
  total: string;
}
