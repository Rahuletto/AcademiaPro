import { format } from "date-fns";

interface PredictResetButtonsProps {
  isPredicted: boolean;
  showDatePicker: boolean;
  setShowDatePicker: (value: boolean) => void;
  resetAttendance: () => void;
}

export default function PredictResetButtons({
  isPredicted,
  resetAttendance,
}: PredictResetButtonsProps) {
  return (
    <>
      {isPredicted && (
        <>
          <button
            onClick={resetAttendance}
            className="animate-fastfade flex w-fit items-center justify-center rounded-xl bg-light-button px-5 py-1 text-sm font-medium text-light-accent transition-all duration-300 hover:scale-105 hover:opacity-80 dark:bg-dark-button dark:text-dark-accent"
          >
            Reset
          </button>

        </>
      )}
    </>
  );
}
