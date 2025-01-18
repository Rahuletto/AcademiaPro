export interface Data {
    Date: string;
    Day: string;
    Event: string;
    Dayorder: string;
  }
  
  export interface Month {
    Data: Data[];
    Holiday: number[];
    HolidayCount: number;
  }
  
  export interface Planner {
    "Jan '24": Month;
    "Feb '24": Month;
    "Mar '24": Month;
    "Apr '24": Month;
    "May '24": Month;
    "Jun '24": Month;
    "Jul '24": Month;
    "Aug '24": Month;
    "Sep '24": Month;
    "Oct '24": Month;
    "Nov '24": Month;
    "Dec '24": Month;
    status: number;
  }
  
  export interface DayData {
    date: string;
    day: string;
    event: string | null;
    dayOrder: string;
  }
  
  export interface CalendarData {
    month: string;
    days: DayData[];
  }
  