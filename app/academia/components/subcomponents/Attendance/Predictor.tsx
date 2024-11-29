import { LeaveODRangeCalendar } from "@/components/Calendar/RangeCalendar";
import { usePlanner } from "@/provider/DataCalProvider";
import { DateRange } from "@/types/Attendance";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";

interface DatePickerProps {
  dateRanges: DateRange[];
  setDateRanges: React.Dispatch<React.SetStateAction<DateRange[]>>;
  isODML: boolean;
  setIsODML: Dispatch<SetStateAction<boolean>>;
  resetODML: () => void;
  onClose: () => void;
}

export default function Predictor({
  onClose,
  dateRanges,
  setDateRanges,
  setIsODML,
  resetODML,
}: DatePickerProps) {
  const [tempRange, setTempRange] = useState<any[]>([[]]);
  const datePickerRef = useRef<{ openCalendar: () => void } | null>(null);


  const handleDateChange = (dates: any) => {
    setTempRange(dates);
    if (dates.length === 2) {
      const newRange = {
        from: dates[0][0].toDate(),
        to: dates[1][1].toDate(),
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

  return (
    <div
      role="button"
      tabIndex={0}
      className="fixed inset-0 z-50 flex animate-fastfade items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm transition duration-75"
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      onClick={onClose}
    >
      <div
        role="button"
        tabIndex={-1}
        onKeyDown={() => {}}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[600px] cursor-default rounded-[28px] bg-light-background-normal p-4 text-white shadow-lg dark:bg-dark-background-normal"
      >
        <div className="p-2">
          <div className="flex items-start justify-between">
            <div className="flex gap-1 flex-col">
            <h2 className="text-2xl font-semibold capitalize text-light-color dark:text-dark-color">
              Predict Attendance
            </h2>
            <p className="mb-6 text-xs font-medium text-light-accent opacity-80 dark:text-dark-accent">
              This feature is under development.
            </p>
            </div>
            

            <div className="flex flex-row-reverse items-center justify-center gap-3">
              <button
                title="Close"
                aria-label="Close"
                onClick={onClose}
                className="rounded-full border-2 border-light-error-color bg-light-error-background p-2 text-lg text-light-error-color dark:border-dark-error-color dark:bg-dark-error-background dark:text-dark-error-color"
              >
                <FaXmark />
              </button>
            </div>
          </div>

          <LeaveODRangeCalendar />
        </div>
        <button
          onClick={() => {}}
          className="mt-3 w-full rounded-full bg-light-accent py-2 font-semibold text-dark-color dark:bg-dark-accent dark:text-light-color"
        >
          Predict
        </button>
      </div>
    </div>
  );
}
