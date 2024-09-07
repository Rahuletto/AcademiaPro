import React, { useEffect } from "react";
import { useAttendance } from "@/provider/AttendanceProvider";
import Error from "@/components/States/Error";
import Loading from "@/components/States/Loading";
import NoData from "../NoData";
import AttendanceList from "./Predict/AttendanceList";
import { AttendanceCourse } from "@/types/Attendance";
import { useMutateAll } from "@/hooks/useMutate";

export default function AttendanceContent(): JSX.Element {
  const { attendance, requestedAt, isLoading, error } = useAttendance();
  const mutate = useMutateAll()

  useEffect(() => {
    if (
      (!attendance && !isLoading && !error) ||
      (attendance &&
        (!requestedAt || Date.now() - requestedAt > 60 * 60 * 1000))
    ) {
      mutate({ mutateAttendance: true });
    }
  }, [attendance, error, isLoading, mutate, requestedAt]);

  if (isLoading) return <Loading size="max" />;
  if (error) return <Error component="Attendance" />;
  if (!attendance) return <NoData component="Attendance" />;

  return (
    <AttendanceList
      open={false}
      displayedAttendance={attendance as AttendanceCourse[]}
    />
  );
}
