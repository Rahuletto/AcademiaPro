import { useState, useCallback } from "react";
import {
  AttendanceCourse,
  DateRange,
  CalendarMonth,
  TimetableDay,
} from "@/types/Attendance";
import { format } from "date-fns";

export const useODMLPredictions = (
  attendance: AttendanceCourse[],
  timetable: TimetableDay[],
  calendar: CalendarMonth[],
  dateRanges: DateRange[],
) => {
  const [calculatedAttendance, setCalculatedAttendance] = useState<
    AttendanceCourse[] | null
  >(null);

  const performCalculation = useCallback(() => {
    if (!dateRanges.length || !attendance || !timetable || !calendar) {
      console.warn("Missing required data for calculation");
      return;
    }

    console.log("Starting calculation with data:", {
      attendance,
      timetable,
      calendar,
      dateRanges,
    });

    const updatedAttendance: AttendanceCourse[] = attendance
      .filter((a) => a.courseTitle !== "null")
      .map((a) => ({ ...a }));

    const processDay = (date: Date) => {
      const formattedDate = format(date, "d");
      const monthName = format(date, "MMM");
      const currentMonth = calendar.find(
        (m) => monthName === m.month.split("'")[0].trim(),
      );

      if (!currentMonth) return;

      const dayInfo = currentMonth.days.find((d) => d.date === formattedDate);
      if (!dayInfo || dayInfo?.day === "Sat" || dayInfo?.day === "Sun") return;

      const daySchedule = timetable.find(
        (t) => t.day === Number(dayInfo.dayOrder),
      );
      if (!daySchedule) return;

      daySchedule?.table.forEach((subject) => {
        if (!subject) return;

        const cleanedSubject = subject.replace(/\[.*?\]/g, "").trim();
        const [subjectTitle, subjectCategory] = cleanedSubject
          .split(" (")
          .map((s) => s.replace(")", "").trim());
        const courseAttendance = updatedAttendance.find(
          (a) =>
            a.courseTitle === subjectTitle && a.category === subjectCategory,
        );

        if (!courseAttendance) return;

        const conducted = parseInt(courseAttendance.hoursConducted) + 1;
        courseAttendance.hoursConducted = conducted.toString();
        const percentage = (
          ((conducted - parseInt(courseAttendance.hoursAbsent)) / conducted) *
          100
        ).toFixed(2);
        courseAttendance.attendancePercentage = percentage;
      });
    };

    dateRanges.forEach((range) => {
      const startDate = new Date(range.from!);
      const endDate = new Date(range.to!);

      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);

      let currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        processDay(currentDate);
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });

    console.log("Calculation completed with updated attendance:", updatedAttendance);
    setCalculatedAttendance(updatedAttendance);
  }, [attendance, timetable, calendar, dateRanges]);

  return {
    calculatedAttendance,
    performCalculation,
  };
};