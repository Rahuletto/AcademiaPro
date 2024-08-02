
import { FaCheck } from "react-icons/fa6";
import DatePicker from "react-multi-date-picker";
import { DateObject } from "react-multi-date-picker";

interface DatePickerComponentProps {
  dateRange: { from: Date | null; to: Date | null };
  handleDateChange: (dates: DateObject[]) => void;
  performPrediction: () => void;
}

export default function DatePickerComponent({
  dateRange,
  handleDateChange,
  performPrediction,
}: DatePickerComponentProps) {
  function selector() {
    document.querySelector<HTMLInputElement>(".rmdp-input")?.focus();
  }
  return (
    <div className="flex items-center gap-4 relative">
      <DatePicker
        value={[
          new DateObject(dateRange.from || new Date()),
          new DateObject(dateRange.to || new Date()),
        ]}
        onChange={handleDateChange}
        range
        minDate={
          new DateObject(
            new Date(
              new Date().getFullYear(),
              new Date().getMonth(),
              new Date().getDate(),
            ),
          )
        }
        maxDate={
          new DateObject(
            new Date(
              new Date().getFullYear(),
              new Date().getMonth() + 4,
              new Date().getDate(),
            ),
          )
        }
        numberOfMonths={1}
      />
      <div className="flex items-center gap-4 absolute left-0 rounded-full dark:bg-dark-button bg-light-button text-light-accent dark:text-dark-accent">
        <button
          onClick={selector}
          className="pl-3 py-1 text-sm font-semibold"
        >
          Filter
        </button>

        <button
          onClick={performPrediction}
        className="px-2 py-1 rounded-full border border-light-success-color dark:border-dark-success-color text-light-success-color dark:text-dark-success-color dark:bg-dark-success-background bg-light-success-background"
        >
          <FaCheck />
        </button>
      </div>
    </div>
  );
}
