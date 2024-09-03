import React, { useEffect } from "react";
import { useAttendance } from "@/provider/AttendanceProvider";
import { useCalendar } from "@/provider/CalendarProvider";
import { useTimetable } from "@/provider/TimetableProvider";
import { useAttendancePrediction } from "@/hooks/useAttendancePredict";
import Error from "@/components/States/Error";
import Loading from "@/components/States/Loading";
import NoData from "../NoData";
import AttendanceList from "./Predict/AttendanceList";
import { DateRange, AttendanceCourse, CalendarMonth, TimetableDay } from "@/types/Attendance";

interface PredictionContentProps {
  dateRange: DateRange;
}

export default function PredictionContent({ dateRange }: PredictionContentProps): JSX.Element {
  const { attendance, isLoading: isLoadingAttendance, error: attendanceError } = useAttendance();
  const { calendar, isLoading: isLoadingCalendar, error: calendarError } = useCalendar();
  const { timetable, isLoading: isLoadingTimetable, error: timetableError } = useTimetable();

  const {
    predictedAttendance,
    performPrediction,
  } = useAttendancePrediction(
    attendance as AttendanceCourse[],
    timetable as TimetableDay[],
    calendar as CalendarMonth[],
    dateRange
  );

  useEffect(() => {
    if (attendance && timetable && calendar && dateRange.from && dateRange.to) {
      performPrediction();
    }
  }, [attendance, timetable, calendar, dateRange, performPrediction]);

  if (isLoadingAttendance || isLoadingCalendar || isLoadingTimetable) return <Loading size="max" />;
  if (attendanceError || calendarError || timetableError) return <Error component="Attendance Prediction" />;
  if (!predictedAttendance) return <NoData component="Attendance Prediction" />;

  return <AttendanceList open={true} displayedAttendance={predictedAttendance} />;
}
