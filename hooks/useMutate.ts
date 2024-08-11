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
      mutateUser: shouldMutateUser = true,
      mutateAttendance: shouldMutateAttendance = true,
      mutateDay: shouldMutateDay = true,
      mutateMarks: shouldMutateMarks = true,
      mutateTimetable: shouldMutateTimetable = true,
    } = options;

    if (shouldMutateUser) mutateUser();
    if (shouldMutateAttendance) mutateAttendance();
    if (shouldMutateDay) mutateDay();
    if (shouldMutateMarks) mutateMarks();
    if (shouldMutateTimetable) mutateTimetable();

    return true;
  };
}
