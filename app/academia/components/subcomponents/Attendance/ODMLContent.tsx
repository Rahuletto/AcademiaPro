import React from "react";
import { useData } from "@/provider/DataProvider";
import { usePlanner } from "@/provider/DataCalProvider";
import Error from "@/components/States/Error";
import Loading from "@/components/States/Loading";
import NoData from "../NoData";
import AttendanceList from "./Predict/AttendanceList";
import {
  DateRange,
  AttendanceCourse,
  CalendarMonth,
  TimetableDay,
} from "@/types/Attendance";
import { useODMLPredictions } from "@/hooks/useODMLPredictions";

interface ODMLContentProps {
  dateRanges: DateRange[];
}

export default function ODMLContent({
  dateRanges,
}: ODMLContentProps): JSX.Element {
  const {
    calendar,
    isLoading: isLoadingCalendar,
    isValidating: isValidatingCalendar,
    error: calendarError,
  } = usePlanner();

  const {
    timetable,
    attendance,
    isLoading: isLoadingTimetable,
    isValidating: isValidatingTimetable,
    error: timetableError,
  } = useData();

  const { calculatedAttendance } = useODMLPredictions(
    attendance as AttendanceCourse[],
    timetable as TimetableDay[],
    calendar as CalendarMonth[],
    dateRanges,
  );

  if (isLoadingCalendar || isLoadingTimetable || isValidatingCalendar || isValidatingTimetable) {
    return <Loading size="max" />;
  }

  if (calendarError || timetableError) {
    return (
      <Error
        error={calendarError || timetableError!}
        component="ODML Attendance"
      />
    );
  }

  if (!calculatedAttendance || dateRanges.length === 0) {
    return <NoData component="ODML Attendance" />;
  }

  return (
    <div>
      <h2 className="px-2 text-sm font-semibold">ODML</h2>
      <AttendanceList open={true} displayedAttendance={calculatedAttendance} />
    </div>
  );
}
