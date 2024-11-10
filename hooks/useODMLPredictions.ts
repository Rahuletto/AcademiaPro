import { useState, useCallback, useEffect } from "react";
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
      setCalculatedAttendance(null);
      return;
    }

    const updatedAttendance: AttendanceCourse[] = JSON.parse(
      JSON.stringify(attendance.filter((a) => a.courseTitle !== "null")),
    );

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

        const absent = Math.max(0, parseInt(courseAttendance.hoursAbsent) - 1);
        courseAttendance.hoursAbsent = absent.toString();
        const conducted = parseInt(courseAttendance.hoursConducted);
        const percentage = (((conducted - absent) / conducted) * 100).toFixed(
          2,
        );
        courseAttendance.attendancePercentage = percentage;
      });
    };

    dateRanges.forEach((range) => {
      if (!range.from || !range.to) return;

      const startDate = new Date(range.from);
      const endDate = new Date(range.to);

      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);

      let currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        processDay(currentDate);
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });

    setCalculatedAttendance(updatedAttendance);
  }, [attendance, timetable, calendar, dateRanges]);

  useEffect(() => {
    performCalculation();
  }, [performCalculation]);

  return {
    calculatedAttendance,
    performCalculation,
  };
};
