export interface MarksResponse {
  marks: Mark[];
}

export interface Mark {
  courseName: string;
  courseCode: string;
  courseType: string;
  overall: Overall;
  testPerformance: TestPerformance[];
}

export interface Overall {
  marks: string;
  total: string;
}

export interface TestPerformance {
  test: string;
  marks: Marks;
}

export interface Marks {
  scored: string;
  total: string;
}
