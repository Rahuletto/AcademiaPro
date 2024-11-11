import { useState, useRef, Dispatch, SetStateAction, useEffect } from "react";
import { DateObject } from "react-multi-date-picker";
import dynamic from "next/dynamic";
import { usePlanner } from "@/provider/DataCalProvider";

const DatePicker = dynamic(
  () => import("react-multi-date-picker").then((a) => a.default),
  { ssr: false },
);

interface DateRange {
  from: Date | null;
  to: Date | null;
}

interface ODMLDatePickerProps {
  dateRanges: DateRange[];
  setDateRanges: React.Dispatch<React.SetStateAction<DateRange[]>>;
  isODML: boolean;
  setIsODML: Dispatch<SetStateAction<boolean>>;
  resetODML: () => void;
}

export default function ODMLDatePicker({
  dateRanges,
  setDateRanges,
  setIsODML,
  resetODML,
}: ODMLDatePickerProps) {
  const [tempRange, setTempRange] = useState<DateObject[]>([]);
  const datePickerRef = useRef<{ openCalendar: () => void } | null>(null);
  const { calendar } = usePlanner();

  function selector() {
    datePickerRef.current?.openCalendar();
  }

  const handleDateChange = (dates: DateObject[]) => {
    setTempRange(dates);
    if (dates.length === 2) {
      const newRange = {
        from: dates[0].toDate(),
        to: dates[1].toDate(),
      };
      setDateRanges([...dateRanges, newRange]);
      setTempRange([]);
    }
  };

  const removeDateRange = (index: number) => {
    const updatedRanges = [...dateRanges];
    updatedRanges.splice(index, 1);
    setDateRanges(updatedRanges);
    if (updatedRanges.length === 0) {
      resetODML();
      setIsODML(false);
      setDateRanges([]);
    }
  };

  function isHoliday(dateobj: DateObject) {
    if (!calendar) return false;
    const date = dateobj.format("DD");
    const monthIndex = dateobj.monthIndex % 5;

    const day = calendar?.[monthIndex]?.days?.find(
      (day) => day.date.padStart(2, "0") === date,
    );

    return day?.dayOrder === "-";
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <DatePicker
          ref={datePickerRef}
          value={tempRange}
          onChange={handleDateChange}
          range
          minDate={new DateObject(new Date(2000, 0, 1))}
          maxDate={new DateObject(new Date())}
          mapDays={({ date }) => {
            if (isHoliday(date)) {
              return {
                className:
                  "text-light-error-color dark:text-dark-error-color opacity-60 cursor-not-allowed",
                disabled: true,
              };
            }
          }}
          numberOfMonths={1}
        />
        <div className="absolute left-0 flex animate-fastfade items-center gap-4 rounded-full text-light-accent dark:text-dark-accent">
          <button
            onClick={selector}
            className="flex w-fit items-center justify-center rounded-xl bg-light-button px-5 py-1 text-sm font-medium text-light-accent transition-all duration-300 hover:scale-105 hover:opacity-80 dark:bg-dark-button dark:text-dark-accent"
          >
            OD {dateRanges.length > 0 && `(${dateRanges.length})`}
          </button>
        </div>
      </div>

      {dateRanges.length > 0 && (
        <div className="absolute left-0 top-12 z-50 mt-2 w-64 rounded-lg border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="max-h-40 space-y-2 overflow-y-auto">
            {dateRanges.map((range, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>
                  {range.from?.toLocaleDateString()} -{" "}
                  {range.to?.toLocaleDateString()}
                </span>
                <button
                  onClick={() => removeDateRange(index)}
                  className="text-light-error-color hover:text-light-error-color dark:text-dark-error-color dark:hover:text-dark-error-color"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
