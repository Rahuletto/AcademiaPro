import Loading from "@/components/States/Loading";
import { useAttendance } from "@/provider/AttendanceProvider";
import Error from "@/components/States/Error";
import AttendanceList from "./subcomponents/Attendance/Predict/AttendanceList";
import { useEffect, useState } from "react";
import { useTimetable } from "@/provider/TimetableProvider";
import { useCalendar } from "@/provider/CalendarProvider";
import { format } from "date-fns";
import { AttendanceCourse } from "@/types/Attendance";
import DatePickerComponent from "./subcomponents/Attendance/Predict/DatePicker";
import PredictResetButtons from "./subcomponents/Attendance/Predict/ResetButtons";
import { DateObject } from "react-multi-date-picker";

export default function Attendance() {
  const { attendance, isLoading, error, mutate } = useAttendance();
  const { timetable } = useTimetable();
  const { calendar } = useCalendar();
  const defaultDateRange = {
    from: null,
    to: null,
  };
  const [dateRange, setDateRange] = useState<{
    from: Date | null;
    to: Date | null;
  }>(defaultDateRange);
  const [predictedAttendance, setPredictedAttendance] = useState<
    AttendanceCourse[] | null
  >(null);
  const [isPredicted, setIsPredicted] = useState(false);
  const [previousDateRange, setPreviousDateRange] = useState<any>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (dates: DateObject[]) => {
    if (dates.length === 2) {
      setDateRange({
        from: dates[0].toDate(),
        to: dates[1].toDate(),
      });
    }
  };

  const performPrediction = () => {
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

    if (
      isPredicted &&
      previousDateRange &&
      dateRange.from.getTime() === previousDateRange.from.getTime() &&
      dateRange.to.getTime() === previousDateRange.to.getTime()
    ) {
      console.log("Prediction already applied for this date range");
      return;
    }

    const updatedAttendance: AttendanceCourse[] = JSON.parse(
      JSON.stringify(attendance),
    ); // Deep copy
    let currentDate = new Date(dateRange.from);
    const endDate = new Date(dateRange.to);

    while (currentDate <= endDate) {
      const formattedDate = format(currentDate, "d");

      const currentMonth = calendar.find((m) => {
        const monthName = format(currentDate, "MMM");
        return monthName == m.month.split("'")[0].trim();
      });

      if (currentMonth?.month) {
        const dayInfo = currentMonth.days.find((d) => d.date === formattedDate);
        if (dayInfo && dayInfo.dayOrder && !dayInfo.holiday) {
          const daySchedule = timetable.find(
            (t) => t.dayOrder.replaceAll("Day ", "") === dayInfo.dayOrder,
          );

          if (daySchedule) {
            daySchedule.subjects.forEach((subject) => {
              if (subject) {
                const courseAttendance = updatedAttendance.find((a) => {
                  return (
                    a.courseTitle === subject.split(" (")[0] &&
                    a.category === subject.split(" (")[1].split(")")[0]
                  );
                });
                if (courseAttendance) {
                  const conducted =
                    parseInt(courseAttendance.hoursConducted) + 1;
                  const absent = parseInt(courseAttendance.hoursAbsent) + 1;
                  courseAttendance.hoursConducted = conducted.toString();
                  courseAttendance.hoursAbsent = absent.toString();
                  const percentage = (
                    ((conducted - absent) / conducted) *
                    100
                  ).toFixed(2);
                  courseAttendance.attendancePercentage = percentage;
                }
              }
            });
          }
        }
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    setPredictedAttendance(updatedAttendance);
    setIsPredicted(true);
    setPreviousDateRange(dateRange);
    setShowDatePicker(false);
  };

  const resetAttendance = () => {
    setPredictedAttendance(null);
    setIsPredicted(false);
    setDateRange(defaultDateRange);
    setPreviousDateRange(null);
  };

  useEffect(() => {
    if (!isLoading && !attendance) mutate();
  }, [isLoading, mutate, attendance]);

  const displayedAttendance = isPredicted ? predictedAttendance : attendance;

  return (
    <section id="attendance">
      <div className="mb-4 flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Attendance</h1>
        {showDatePicker && (
          <DatePickerComponent
            dateRange={dateRange}
            handleDateChange={handleDateChange}
            performPrediction={performPrediction}
          />
        )}
        <PredictResetButtons
          isPredicted={isPredicted}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
          performPrediction={performPrediction}
          resetAttendance={resetAttendance}
          dateRange={dateRange}
        />
      </div>

      <div className="group px-2 pt-3">
        {isLoading ? (
          <Loading size="max" />
        ) : error ? (
          <Error component="Attendance" />
        ) : (
          <div
            className={
              isPredicted
                ? "-m-3 rounded-2xl border border-light-info-color px-3 md:py-2 dark:border-dark-info-color"
                : ""
            }
          >
            <AttendanceList displayedAttendance={displayedAttendance} />
          </div>
        )}
      </div>
    </section>
  );
}
