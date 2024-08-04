import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import DatePicker from "react-multi-date-picker";
import { DateObject } from "react-multi-date-picker";

interface DatePickerComponentProps {
  dateRange: { from: Date | null; to: Date | null };
  handleDateChange: (dates: DateObject[]) => void;
}

export default function DatePickerComponent({
  dateRange,
  handleDateChange,
}: DatePickerComponentProps) {
  const [opened, setOpened] = useState(false);
  function selector() {
    setOpened(!opened);
    document.querySelector<HTMLInputElement>(".rmdp-input")?.focus();
  }
  return (
    <div className="relative flex items-center gap-4">
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
      <div className="absolute left-0 flex animate-fastfade items-center gap-4 rounded-full text-light-accent dark:text-dark-accent">
        <button
          onClick={selector}
          className="flex w-fit items-center justify-center rounded-xl bg-light-button px-5 py-1 text-sm font-medium text-light-accent transition-all duration-300 hover:scale-105 hover:opacity-80 dark:bg-dark-button dark:text-dark-accent"
        >
          Predict
        </button>
      </div>
    </div>
  );
}
