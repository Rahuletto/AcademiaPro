import { format } from "date-fns";

interface PredictResetButtonsProps {
  isPredicted: boolean;
  showDatePicker: boolean;
  setShowDatePicker: (value: boolean) => void;
  resetAttendance: () => void;
}

export default function PredictResetButtons({
  isPredicted,
  showDatePicker,
  setShowDatePicker,
  resetAttendance,
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

        </>
      )}
    </>
  );
}
