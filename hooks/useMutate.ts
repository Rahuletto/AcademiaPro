import { ProscrapeURL } from "@/utils/URL";
import { mutate } from "swr";

export interface MutateOptions {
  mutateUser?: boolean;
  mutateAttendance?: boolean;
  mutateDay?: boolean;
  mutateMarks?: boolean;
  mutateTimetable?: boolean;
  mutateCourse?: boolean;
  mutateCalendar?: boolean;
}
export function useMutateAll() {
  return async function (options: MutateOptions = {}) {
    const {
      mutateUser: shouldMutateUser,
      mutateAttendance: shouldMutateAttendance,
      mutateDay: shouldMutateDay,
      mutateMarks: shouldMutateMarks,
      mutateTimetable: shouldMutateTimetable,
      mutateCourse: shouldMutateCourse,
      mutateCalendar: shouldMutateCalendar,
    } = options;

    if (shouldMutateUser) mutate(`${ProscrapeURL}/user`);
    else if (shouldMutateCalendar) mutate(`${ProscrapeURL}/calendar`);
    else if (shouldMutateCourse) mutate(`${ProscrapeURL}/courses`);
    else if (shouldMutateAttendance) mutate(`${ProscrapeURL}/attendance`);
    else if (shouldMutateDay) mutate(`${ProscrapeURL}/dayorder`);
    else if (shouldMutateMarks) mutate(`${ProscrapeURL}/marks`);
    else if (shouldMutateTimetable) mutate(`${ProscrapeURL}/timetable`);
    else {
      mutate(`${ProscrapeURL}/user`)
      mutate(`${ProscrapeURL}/attendance`)
      mutate(`${ProscrapeURL}/dayorder`)
      mutate(`${ProscrapeURL}/marks`)
      mutate(`${ProscrapeURL}/timetable`)
      mutate(`${ProscrapeURL}/courses`)
      mutate(`${ProscrapeURL}/calendar`)
    }
  };
}
