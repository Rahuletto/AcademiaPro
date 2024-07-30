export interface CalendarResponse {
  calendar: Calendar[];
  expireAt: number;
}

export interface Calendar {
  month: string;
  days: Day[];
}

export interface Day {
  date: string;
  day: string;
  holiday?: string;
  dayOrder: string;
}
