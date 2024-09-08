import { useState, useCallback } from "react";
import {
  AttendanceCourse,
  DateRange,
  CalendarMonth,
  TimetableDay,
} from "@/types/Attendance";
import { format } from "date-fns";

export const useAttendancePrediction = (
  attendance: AttendanceCourse[],
  timetable: TimetableDay[],
  calendar: CalendarMonth[],
  dateRange: DateRange,
) => {
  const [predictedAttendance, setPredictedAttendance] = useState<
    AttendanceCourse[] | null
  >(null);

  const performPrediction = useCallback(() => {
    if (
      !dateRange.from ||
      !dateRange.to ||
      !attendance ||
      !timetable ||
      !calendar
    ) {
      console.warn("Missing required data for prediction");
      return;
    }

    const updatedAttendance: AttendanceCourse[] = attendance
      .filter((a) => a.courseTitle !== "null")
      .map((a) => ({ ...a }));

    const startDate = new Date(dateRange.from);
    const endDate = new Date(dateRange.to);

    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const processDay = (date: Date, incrementAbsent: boolean = false) => {
      const formattedDate = format(date, "d");
      const monthName = format(date, "MMM");
      const currentMonth = calendar.find(
        (m) => monthName === m.month.split("'")[0].trim(),
      );

      if (!currentMonth) return;

      const dayInfo = currentMonth.days.find((d) => d.date === formattedDate);
      if (!dayInfo || dayInfo.day === "Sat" || dayInfo.day === "Sun") return;

      const daySchedule = timetable.find(
        (t) => t.dayOrder.replace("Day ", "") === dayInfo.dayOrder,
      );
      if (!daySchedule) return;

      daySchedule?.subjects.forEach((subject) => {
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
        const absent = incrementAbsent
          ? parseInt(courseAttendance.hoursAbsent) + 1
          : parseInt(courseAttendance.hoursAbsent);
        if (incrementAbsent) {
          courseAttendance.hoursAbsent = absent.toString();
        }
        const percentage = (((conducted - absent) / conducted) * 100).toFixed(
          2,
        );
        courseAttendance.attendancePercentage = percentage;
      });
    };

    while (currentDate <= endDate) {
      const isAbsent = currentDate.getTime() >= startDate.getTime();
      processDay(currentDate, isAbsent);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setPredictedAttendance(updatedAttendance);
  }, [attendance, timetable, calendar, dateRange]);

  return {
    predictedAttendance,
    performPrediction,
  };
};
