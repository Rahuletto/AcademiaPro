import { BsCalendar2WeekFill } from "react-icons/bs";
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
    document.querySelector<HTMLInputElement>(".rmdp-container ")?.focus();
  }
  return (
    <div className="flex items-center gap-4">
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
        className="absolute"
      />

      <button
        onClick={performPrediction}
        className="flex w-fit items-center justify-center rounded-xl bg-light-button px-5 py-1 text-sm font-medium text-light-accent transition-all duration-300 hover:scale-105 hover:opacity-80 dark:bg-dark-button dark:text-dark-accent"
      >
        Apply
      </button>
    </div>
  );
}
