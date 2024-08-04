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
import { FaCheck } from "react-icons/fa";

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
      return;
    }

    const updatedAttendance: AttendanceCourse[] = attendance.map((a) => ({
      ...a,
    }));
    const startDate = new Date(dateRange.from);
    const endDate = new Date(dateRange.to);
    let currentDate = new Date();

    const processDay = (date: Date, incrementAbsent = false) => {
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
      console.log(format(currentDate, "d"), daySchedule)
      if (!daySchedule) return;

      daySchedule.subjects.forEach((subject) => {
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

    while (currentDate < startDate) {
      processDay(currentDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    while (currentDate <= endDate) {
      processDay(currentDate, true);
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
        {!isPredicted && (
          <DatePickerComponent
            dateRange={dateRange}
            handleDateChange={handleDateChange}
          />
        )}
        {!isPredicted && dateRange.from && dateRange.to && (
          <button
            onClick={performPrediction}
            className="animate-fadeIn rounded-full border border-light-success-color bg-light-success-background px-2 py-1 text-light-success-color dark:border-dark-success-color dark:bg-dark-success-background dark:text-dark-success-color"
          >
            <FaCheck />
          </button>
        )}
        <PredictResetButtons
          isPredicted={isPredicted}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
          resetAttendance={resetAttendance}
        />
      </div>
      {isPredicted && (
        <button
          onClick={resetAttendance}
          className="mb-3 w-fit animate-fastfade rounded-full bg-light-info-background px-3 py-1 text-sm text-light-info-color dark:bg-dark-info-background dark:text-dark-info-color"
        >
          Absent{" "}
          {(dateRange.from || new Date()).getDate() ===
          (dateRange.to || new Date()).getDate()
            ? `in ${format(dateRange.from || new Date(), "LLL dd")}`
            : `from ${format(dateRange.from || new Date(), "LLL dd")} to ${format(
                dateRange.to || new Date(),
                "LLL dd",
              )}`}
        </button>
      )}

      <div className="group px-2 pt-3">
        {isLoading ? (
          <Loading size="max" />
        ) : error ? (
          <Error component="Attendance" />
        ) : (
          <div
            className={
              isPredicted
                ? "-m-3 rounded-2xl border border-light-warn-color px-3 after:relative after:-left-1 after:bottom-2 after:w-full after:rounded-xl after:bg-light-warn-background after:px-3 after:py-1 after:text-xs after:font-semibold after:text-dark-warn-color after:content-['Predictions_based_on_timetable;_subject_to_change.'] md:py-2 md:after:bottom-0 md:after:text-sm dark:border-dark-warn-color after:dark:bg-dark-warn-background"
                : ""
            }
          >
            {!isPredicted && (
              <AttendanceList
                open={isPredicted}
                displayedAttendance={displayedAttendance}
              />
            )}
            {isPredicted && (
              <AttendanceList
                open={isPredicted}
                displayedAttendance={displayedAttendance}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
