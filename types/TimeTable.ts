export interface TimeTableResponse {
  table: Table[];
  expireAt: number;
}

export interface Table {
  day: number;
  dayOrder: string;
  subjects: (string | undefined)[];
}
