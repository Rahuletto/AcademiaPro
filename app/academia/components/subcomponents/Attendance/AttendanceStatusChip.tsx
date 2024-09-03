import React from "react";
import { format } from "date-fns";
import { DateRange } from "@/types/Attendance";

export const AttendanceStatusChips = ({
  isPredicted,
  dateRange,
  resetAttendance,
}: {
  isPredicted: boolean;
  dateRange: DateRange;
  resetAttendance: () => void;
}) => {
  const { from: startDate, to: endDate } = dateRange;
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const dayBeforeStartDate = startDate ? new Date(startDate) : null;
  if (dayBeforeStartDate) {
    dayBeforeStartDate.setDate(dayBeforeStartDate.getDate() - 1);
  }

  if (!isPredicted) return null;

  return (
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
  );
};
