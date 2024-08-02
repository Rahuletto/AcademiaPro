import { format } from "date-fns";

interface PredictResetButtonsProps {
  isPredicted: boolean;
  showDatePicker: boolean;
  setShowDatePicker: (value: boolean) => void;
  performPrediction: () => void;
  resetAttendance: () => void;
  dateRange: { from: Date | null; to: Date | null };
}

export default function PredictResetButtons({
  isPredicted,
  showDatePicker,
  setShowDatePicker,
  performPrediction,
  resetAttendance,
  dateRange,
}: PredictResetButtonsProps) {
  return (
    <>
      {!isPredicted && !showDatePicker && (
        <button
          onClick={() => setShowDatePicker(true)}
          className="flex w-fit items-center justify-center rounded-xl bg-light-button px-5 py-1 text-sm font-medium text-light-accent transition-all duration-300 hover:scale-105 hover:opacity-80 dark:bg-dark-button dark:text-dark-accent"
        >
          Predict
        </button>
      )}
      {isPredicted && (
        <>
          <button
            onClick={resetAttendance}
            className="flex w-fit items-center justify-center rounded-xl bg-light-button px-5 py-1 text-sm font-medium text-light-accent transition-all duration-300 hover:scale-105 hover:opacity-80 dark:bg-dark-button dark:text-dark-accent"
          >
            Reset
          </button>
          <button onClick={resetAttendance} className="w-fit rounded-full bg-light-info-background px-3 py-1 text-sm text-light-info-color dark:bg-dark-info-background dark:text-dark-info-color">
            Absent{" "}
            {(dateRange.from || new Date()).getDate() === (dateRange.to || new Date()).getDate()
              ? `in ${format((dateRange.from || new Date()), "LLL dd")}`
              : `from ${format((dateRange.from || new Date()), "LLL dd")} to ${format(
                  (dateRange.to || new Date()),
                  "LLL dd",
                )}`}
          </button>
        </>
      )}
    </>
  );
}
