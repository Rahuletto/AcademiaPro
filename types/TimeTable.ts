export interface TimeTableResponse {
  table: Table[];
}

export interface Table {
  day: number;
  dayOrder: string;
  subjects: (string | undefined)[];
}
