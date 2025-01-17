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
  dateRanges: DateRange[],
) => {
  const [predictedAttendance, setPredictedAttendance] = useState<
    AttendanceCourse[] | null
  >(null);

  const performPrediction = useCallback(() => {
    if (!attendance || !timetable || !calendar || !dateRanges.length) {
      console.warn("Missing required data for prediction");
      return;
    }

    const updatedAttendance: AttendanceCourse[] = attendance
      .filter((a) => a.courseTitle !== "null")
      .map((a) => ({ ...a }));

    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const latestEndDate = new Date(
      Math.max(...dateRanges.map((range) => new Date(range.to || 0).getTime())),
    );
    latestEndDate.setHours(0, 0, 0, 0);

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

      const isAbsent = dateRanges.some((range) => {
        const startDate = new Date(range.from || 0);
        const endDate = new Date(range.to || 0);
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);
        return date >= startDate && date <= endDate;
      });

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
        const absent = isAbsent
          ? parseInt(courseAttendance.hoursAbsent) + 1
          : parseInt(courseAttendance.hoursAbsent);
        if (isAbsent) {
          courseAttendance.hoursAbsent = absent.toString();
        }
        const percentage = (((conducted - absent) / conducted) * 100).toFixed(
          2,
        );
        courseAttendance.attendancePercentage = percentage;
      });
    };

    while (currentDate <= latestEndDate) {
      processDay(currentDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setPredictedAttendance(updatedAttendance);
  }, [attendance, timetable, calendar, dateRanges]);

  return {
    predictedAttendance,
    performPrediction,
  };
};
