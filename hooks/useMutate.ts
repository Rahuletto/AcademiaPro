import { useAttendance } from "@/provider/AttendanceProvider";
import { useDay } from "@/provider/DayProvider";
import { useMarks } from "@/provider/MarksProvider";
import { useTimetable } from "@/provider/TimetableProvider";
import { useUser } from "@/provider/UserProvider";

interface MutateOptions {
  mutateUser?: boolean;
  mutateAttendance?: boolean;
  mutateDay?: boolean;
  mutateMarks?: boolean;
  mutateTimetable?: boolean;
}
export function useMutateAll() {
  const { mutate: mutateAttendance } = useAttendance();
  const { mutate: mutateDay } = useDay();
  const { mutate: mutateMarks } = useMarks();
  const { mutate: mutateTimetable } = useTimetable();
  const { mutate: mutateUser } = useUser();

  return async function (options: MutateOptions = {}) {
    const {
      mutateUser: shouldMutateUser,
      mutateAttendance: shouldMutateAttendance,
      mutateDay: shouldMutateDay,
      mutateMarks: shouldMutateMarks,
      mutateTimetable: shouldMutateTimetable,
    } = options;

    if (shouldMutateUser) mutateUser();
    else if (shouldMutateAttendance) mutateAttendance();
    else if (shouldMutateDay) mutateDay();
    else if (shouldMutateMarks) mutateMarks();
    else if (shouldMutateTimetable) mutateTimetable();
    else {
      mutateUser();
      mutateAttendance();
      mutateDay();
      mutateMarks();
      mutateTimetable();
    }
  };
}
