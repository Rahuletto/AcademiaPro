import { useAttendance } from "@/provider/AttendanceProvider";
import { useCalendar } from "@/provider/CalendarProvider";
import { useCourses } from "@/provider/CourseProvider";
import { useDay } from "@/provider/DayProvider";
import { useMarks } from "@/provider/MarksProvider";
import { useTimetable } from "@/provider/TimetableProvider";
import { useUser } from "@/provider/UserProvider";

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
  const { mutate: mutateAttendance } = useAttendance();
  const { mutate: mutateDay } = useDay();
  const { mutate: mutateMarks } = useMarks();
  const { mutate: mutateTimetable } = useTimetable();
  const { mutate: mutateUser } = useUser();
  const { mutate: mutateCourse } = useCourses();
  const { mutate: mutateCalendar } = useCalendar();

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

    if (shouldMutateUser) mutateUser();
    else if (shouldMutateCalendar) mutateCalendar();
    else if (shouldMutateCourse) mutateCourse();
    else if (shouldMutateAttendance) mutateAttendance();
    else if (shouldMutateDay) mutateDay();
    else if (shouldMutateMarks) mutateMarks();
    else if (shouldMutateTimetable) mutateTimetable();
    else {
      mutateUser();
      mutateAttendance();
      mutateDay();
      mutateMarks();
      mutateCalendar();
      mutateCourse();
      mutateTimetable();
    }
  };
}
