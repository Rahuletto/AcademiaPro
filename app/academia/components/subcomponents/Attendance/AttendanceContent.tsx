import React, { useEffect } from "react";
import { useAttendance } from "@/provider/AttendanceProvider";
import Error from "@/components/States/Error";
import Loading from "@/components/States/Loading";
import NoData from "../NoData";
import AttendanceList from "./Predict/AttendanceList";
import { AttendanceCourse } from '@/types/Attendance';

export default function AttendanceContent(): JSX.Element {
  const { attendance, isLoading, error, mutate } = useAttendance();

  useEffect(() => {
    if (!attendance && !isLoading && !error) {
        mutate()
    }
  }, [attendance, error, isLoading, mutate]);

  if (isLoading) return <Loading size="max" />;
  if (error) return <Error component="Attendance" />;
  if (!attendance) return <NoData component="Attendance" />;

  return <AttendanceList open={false} displayedAttendance={attendance as AttendanceCourse[]} />;
}