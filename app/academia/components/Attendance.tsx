"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/States/Loading";
import { AttendanceHeader } from "./subcomponents/Attendance/AttendanceHeader";
import { AttendanceStatusChips } from "./subcomponents/Attendance/AttendanceStatusChip";
import { DateRange } from "@/types/Attendance";
import { DateObject } from "react-multi-date-picker";
import ODMLContent from "./subcomponents/Attendance/ODMLContent";

const AttendanceContent = dynamic(
  () => import("./subcomponents/Attendance/AttendanceContent"),
  {
    loading: () => <Loading size="max" />,
  },
);

const PredictionContent = dynamic(
  () => import("./subcomponents/Attendance/PredictionContent"),
  {
    loading: () => <Loading size="max" />,
  },
);

export default function Attendance(): JSX.Element {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: null,
    to: null,
  });
  const [ODMLdateRange, setODMLDateRange] = useState<DateRange[]>([]);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [isPredicted, setIsPredicted] = useState<boolean>(false);
  const [isODML, setIsODML] = useState<boolean>(false);
  useEffect(() => {
    console.log("odmldaterange", ODMLdateRange);
  }, [ODMLdateRange]);
  const handleDateChange = (dates: DateObject[]): void => {
    if (dates.length === 2) {
      setDateRange({
        from: dates[0].toDate(),
        to: dates[1].toDate(),
      });
    }
  };

  const resetAttendance = (): void => {
    setDateRange({ from: null, to: null });
    setIsPredicted(false);
  };

  return (
    <section id="attendance">
      <AttendanceHeader
        isPredicted={isPredicted}
        dateRange={dateRange}
        setDateRange={setDateRange}
        handleDateChange={handleDateChange}
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker}
        setIsPredicted={setIsPredicted}
        ODMLdateRange={ODMLdateRange}
        setODMLDateRange={setODMLDateRange}
        isODML={isODML}
        setIsODML={setIsODML}
      />

      <AttendanceStatusChips
        isPredicted={isPredicted}
        dateRange={dateRange}
        resetAttendance={resetAttendance}
      />

      <div className="group px-2 pt-3">
        {isPredicted ? (
          <PredictionContent dateRange={dateRange} />
        ) : isODML ? (
          <ODMLContent dateRanges={ODMLdateRange} />
        ) : (
          <AttendanceContent />
        )}
      </div>
    </section>
  );
}
