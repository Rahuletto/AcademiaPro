import { LeaveODRangeCalendar } from "@/components/Calendar/RangeCalendar";
import { CategorizedDateRange } from "@/types/Attendance";
import { set } from "date-fns";
import { Dispatch, SetStateAction } from "react";
import { FaXmark } from "react-icons/fa6";

interface DatePickerProps {
  onClose: () => void;
  categorizedDateRanges: CategorizedDateRange[];
  setCategorizedDateRanges: Dispatch<SetStateAction<CategorizedDateRange[]>>;
}

export default function Predictor({
  onClose,
  categorizedDateRanges,
  setCategorizedDateRanges,
}: DatePickerProps) {
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
            <div className="flex flex-col gap-1">
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

          <LeaveODRangeCalendar
            categorizedRanges={categorizedDateRanges}
            setCategorizedRanges={setCategorizedDateRanges}
          />
        </div>
        <button
          onClick={() => {
            onClose();
          }}
          className="mt-3 w-full rounded-full bg-light-accent py-2 font-semibold text-dark-color dark:bg-dark-accent dark:text-light-color"
        >
          Predict
        </button>
      </div>
    </div>
  );
}
