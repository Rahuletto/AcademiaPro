"use client";
import React, {
  useRef,
  useEffect,
  useState,
  Dispatch,
  FC,
  SetStateAction,
} from "react";
import { FaCheck } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import Refresh from "@/components/Refresh";
import DatePickerComponent from "./Predict/DatePicker";
import PredictResetButtons from "./Predict/ResetButtons";
import InfoPopup from "./InfoPopup";
import { DateRange } from "@/types/Attendance";
import { DateObject } from "react-multi-date-picker";
import { useData } from "@/provider/DataProvider";
import ODPicker from "./OD/ODPicker";

interface AttendanceHeaderProps {
  isPredicted: boolean;
  dateRange: DateRange;
  setDateRange: Dispatch<SetStateAction<DateRange>>;
  handleDateChange: (dates: DateObject[]) => void;
  showDatePicker: boolean;
  setShowDatePicker: Dispatch<SetStateAction<boolean>>;
  setIsPredicted: Dispatch<SetStateAction<boolean>>;
}

export const AttendanceHeader: FC<AttendanceHeaderProps> = ({
  isPredicted,
  dateRange,
  setDateRange,
  handleDateChange,
  showDatePicker,
  setShowDatePicker,
  setIsPredicted,
}) => {
  const [showInfoPopup, setShowInfoPopup] = useState<boolean>(false);
  const infoIconRef = useRef<HTMLDivElement>(null);

  const { error } = useData();
  const isOld = false;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        infoIconRef.current &&
        !infoIconRef.current.contains(event.target as Node)
      ) {
        setShowInfoPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleInfoPopup = () => setShowInfoPopup((prev) => !prev);

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Attendance</h1>

        {!isPredicted && (
          <DatePickerComponent
            dateRange={dateRange}
            handleDateChange={handleDateChange}
          />
        )}
        <ODPicker />
        {!isPredicted && dateRange.from && dateRange.to && (
          <button
            onClick={() => setIsPredicted(true)}
            className="predict-button flex animate-fadeIn items-center rounded-full border border-light-success-color bg-light-success-background px-2 py-1 text-light-success-color dark:border-dark-success-color dark:bg-dark-success-background dark:text-dark-success-color"
          >
            <FaCheck />
          </button>
        )}

        <PredictResetButtons
          isPredicted={isPredicted}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
          resetAttendance={() => {
            setDateRange({ from: null, to: null });
            setIsPredicted(false);
          }}
        />
        <div className="relative" ref={infoIconRef}>
          <FiInfo
            className="cursor-help opacity-40"
            onClick={toggleInfoPopup}
            onMouseEnter={toggleInfoPopup}
            onMouseLeave={() => setShowInfoPopup(false)}
          />
          {showInfoPopup && (
            <InfoPopup
              warn
              text="Enter the dates you'll be absent to see a predicted attendance percentage and margin."
              onClose={() => setShowInfoPopup(false)}
            />
          )}
        </div>
      </div>
      {!error && <Refresh type={{ mutateAttendance: true }} isOld={isOld} />}
    </div>
  );
};
