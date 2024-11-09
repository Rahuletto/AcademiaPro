"use client";
import React, { useEffect, useState } from "react";
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
  const [isCalculating, setIsCalculating] = useState(false);
  const {
    calendar,
    isLoading: isLoadingCalendar,
    error: calendarError,
  } = usePlanner();
  const {
    timetable,
    attendance,
    isLoading: isLoadingTimetable,
    error: timetableError,
  } = useData();

  console.log("Current state:", {
    dateRanges,
    attendance: !!attendance,
    timetable: !!timetable,
    calendar: !!calendar,
    isCalculating,
  });

  const { calculatedAttendance, performCalculation } = useODMLPredictions(
    attendance as AttendanceCourse[],
    timetable as TimetableDay[],
    calendar as CalendarMonth[],
    dateRanges,
  );

  useEffect(() => {
    const calculateAttendance = async () => {
      if (
        attendance &&
        timetable &&
        calendar &&
        dateRanges.length > 0 &&
        !isCalculating
      ) {
        console.log("Starting calculation...");
        setIsCalculating(true);
        try {
          await performCalculation();
          console.log("Calculation completed:", calculatedAttendance);
        } catch (error) {
          console.error("Calculation error:", error);
        }
        setIsCalculating(false);
      }
    };

    calculateAttendance();
  }, [attendance, timetable, calendar, dateRanges, performCalculation]);

  if (isLoadingCalendar || isLoadingTimetable) {
    console.log("Loading state...");
    return <Loading size="max" />;
  }

  if (calendarError || timetableError) {
    console.log("Error state:", calendarError || timetableError);
    return (
      <Error
        error={calendarError || timetableError!}
        component="ODML Attendance"
      />
    );
  }

  if (!calculatedAttendance) {
    console.log("No data state");
    return <NoData component="ODML Attendance" />;
  }

  console.log("Rendering attendance list:", calculatedAttendance);
  return (
    <AttendanceList open={true} displayedAttendance={calculatedAttendance} />
  );
}
