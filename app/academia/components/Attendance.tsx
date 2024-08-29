import React from "react";
import Error from "@/components/States/Error";
import Loading from "@/components/States/Loading";
import { useAttendance } from "@/provider/AttendanceProvider";
import { useCalendar } from "@/provider/CalendarProvider";
import { useTimetable } from "@/provider/TimetableProvider";
import { AttendanceCourse } from "@/types/Attendance";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { DateObject } from "react-multi-date-picker";
import { useMutateAll } from "@/hooks/useMutate";

import dynamic from "next/dynamic";
import Refresh from "@/components/Refresh";
import NoData from "./subcomponents/NoData";

const InfoPopup = dynamic(
  () => import("./subcomponents/Attendance/InfoPopup").then((a) => a.default),
  { ssr: false },
);
const PredictResetButtons = dynamic(
  () =>
    import("./subcomponents/Attendance/Predict/ResetButtons").then(
      (a) => a.default,
    ),
  { ssr: false },
);
const DatePickerComponent = dynamic(
  () =>
    import("./subcomponents/Attendance/Predict/DatePicker").then(
      (a) => a.default,
    ),
  { ssr: false },
);
const AttendanceList = dynamic(
  () =>
    import("./subcomponents/Attendance/Predict/AttendanceList").then(
      (a) => a.default,
    ),
  { ssr: false },
);

export default function Attendance() {
  const { attendance, isLoading, error } = useAttendance();
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
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const infoIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        infoIconRef.current &&
        !infoIconRef.current.contains(event.target as Node)
      ) {
        setShowInfoPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateChange = (dates: DateObject[]) => {
    if (dates.length === 2) {
      setDateRange({
        from: dates[0].toDate(),
        to: dates[1].toDate(),
      });
    }
  };

  const toggleInfoPopup = () => setShowInfoPopup((e) => !e);

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

    const updatedAttendance: AttendanceCourse[] = attendance
      .filter((a) => a.courseTitle !== "null")
      .map((a) => ({
        ...a,
      }));

    const startDate = new Date(dateRange.from);
    const endDate = new Date(dateRange.to);

    // Set time to 0:00:00 for comparison purposes
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

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

    while (currentDate <= endDate) {
      const isAbsent = currentDate.getTime() >= startDate.getTime();
      processDay(currentDate, isAbsent);
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

  const displayedAttendance = isPredicted ? predictedAttendance : attendance;

  const startDate = dateRange.from ? new Date(dateRange.from) : null;
  const endDate = dateRange.to ? new Date(dateRange.to) : null;
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const dayBeforeStartDate = startDate ? new Date(startDate) : null;
  if (dayBeforeStartDate) {
    dayBeforeStartDate.setDate(dayBeforeStartDate.getDate() - 1);
  }

  return (
    <section id="attendance">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
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
              className="flex animate-fadeIn items-center rounded-full border border-light-success-color bg-light-success-background px-2 py-1 text-light-success-color dark:border-dark-success-color dark:bg-dark-success-background dark:text-dark-success-color"
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
          <div className="relative" ref={infoIconRef}>
            <FiInfo
              className="cursor-help opacity-40"
              onClick={toggleInfoPopup}
              onMouseEnter={toggleInfoPopup}
              onMouseLeave={() => setShowInfoPopup(false)}
            />
            {showInfoPopup && (
              <InfoPopup
                warn
                text="Enter the dates you'll be absent to see a predicted attendance percentage and margin."
                onClose={() => setShowInfoPopup(false)}
              />
            )}
          </div>
        </div>
        <Refresh type={{ mutateAttendance: true }} />
      </div>
      <div className="flex flex-wrap gap-4 gap-y-1">
        {isPredicted && (
          <>
            {startDate && startDate.getDate() !== new Date().getDate() && (
              <div className="mb-3 w-fit animate-fastfade rounded-full bg-light-info-background px-3 py-1 text-sm text-light-info-color dark:bg-dark-info-background dark:text-dark-info-color">
                {dayBeforeStartDate && startDate && currentDate < startDate
                  ? `Expecting Present till ${format(dayBeforeStartDate, "LLL dd")}`
                  : ""}
              </div>
            )}
            <button
              onClick={resetAttendance}
              className="mb-3 w-fit animate-fastfade rounded-full bg-light-error-background px-3 py-1 text-sm text-light-error-color dark:bg-dark-error-background dark:text-dark-error-color"
            >
              {startDate &&
                endDate &&
                `Absent ${startDate.getDate() === endDate.getDate() ? `on ${format(startDate, "LLL dd")}` : `from ${format(startDate, "LLL dd")} to ${format(endDate, "LLL dd")}`}`}
            </button>
          </>
        )}
      </div>
      <div className="group px-2 pt-3">
        {isLoading ? (
          <Loading size="max" />
        ) : error ? (
          <Error component="Attendance" />
        ) : attendance ? (
          <div
            className={
              isPredicted
                ? "-m-3 rounded-2xl border-2 border-dashed border-light-warn-color px-3 after:relative after:-left-1 after:bottom-2 after:w-full after:rounded-xl after:bg-light-warn-background after:px-3 after:py-1 after:text-xs after:font-semibold after:text-dark-warn-color after:content-['Predictions_based_on_timetable;_subject_to_change.'] md:py-2 md:after:bottom-0 md:after:text-sm dark:border-dark-warn-color after:dark:bg-dark-warn-background"
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
        ) : <NoData component="Attendance" /> }
      </div>
    </section>
  );
}
