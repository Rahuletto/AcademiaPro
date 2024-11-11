import React from "react";
import Error from "@/components/States/Error";
import Loading from "@/components/States/Loading";
import NoData from "../NoData";
import AttendanceList from "./Predict/AttendanceList";
import { AttendanceCourse } from "@/types/Attendance";
import { useData } from "@/provider/DataProvider";

export default function AttendanceContent(): JSX.Element {
  const { attendance, isLoading, error, isValidating } = useData();

  if (isLoading) return <Loading size="max" />;
  if (error) return <Error error={error} component="Attendance" />;
  if (!attendance) return <NoData component="Attendance" />;

  return (
    <div
      className={`${isValidating ? "border-light-info-color dark:border-dark-info-color" : "border-transparent"} -mx-3 rounded-2xl border-4 border-dotted`}
    >
      <AttendanceList
        open={false}
        displayedAttendance={attendance as AttendanceCourse[]}
      />
    </div>
  );
}
