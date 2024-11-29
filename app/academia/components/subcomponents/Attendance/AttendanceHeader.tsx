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
import ODMLDatePicker from "./OD/ODMLDatePicker";
import ODMLResetButtons from "./OD/ResetButtons";
import Predictor from "./Predictor";
import { createPortal } from "react-dom";
import Button from "@/components/Button";

interface AttendanceHeaderProps {
  isPredicted: boolean;
  isODML: boolean;
  dateRange: DateRange;
  setDateRange: Dispatch<SetStateAction<DateRange>>;
  handleDateChange: (dates: DateObject[]) => void;
  showDatePicker: boolean;
  setShowDatePicker: Dispatch<SetStateAction<boolean>>;
  setIsPredicted: Dispatch<SetStateAction<boolean>>;
  setIsODML: Dispatch<SetStateAction<boolean>>;
  ODMLdateRange: DateRange[];
  setODMLDateRange: Dispatch<SetStateAction<DateRange[]>>;
}

export const AttendanceHeader: FC<AttendanceHeaderProps> = ({
  isPredicted,
  isODML,
  dateRange,
  setDateRange,
  handleDateChange,
  showDatePicker,
  setShowDatePicker,
  setIsPredicted,
  ODMLdateRange,
  setODMLDateRange,
  setIsODML,
}) => {
  const [showInfoPopup, setShowInfoPopup] = useState<boolean>(false);
  const infoIconRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const [dialogRoot, setDialogRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setDialogRoot(document.getElementById("dialog-root"));

    return () => {
      setDialogRoot(null);
    };
  }, []);

  const { error, attendance } = useData();
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
    <>
      <div className="mb-0 flex items-center justify-between md:mb-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold">Attendance</h1>

          {attendance && attendance.length > 0 && (
            <>
              <button

          className="flex after:absolute after:-right-5 opacity-100 scale-100 after:-top-3 after:rounded-md after:bg-[#0E100E] after:p-0.5 after:px-1 after:text-xs after:text-light-accent after:content-['NEW'] dark:after:text-dark-accent w-fit items-center justify-center rounded-xl bg-light-button px-5 py-1 text-sm font-medium text-light-accent transition-all duration-300 dark:bg-dark-button dark:text-dark-accent"
         onClick={() => setOpen(true)} >
                Predict
              </button>
              {/* {!isPredicted && (
                <DatePickerComponent
                  dateRange={dateRange}
                  handleDateChange={handleDateChange}
                />
              )} */}
              {/* {!isPredicted && (
          <ODMLDatePicker
            dateRanges={ODMLdateRange}
            setDateRanges={setODMLDateRange}
            isODML={isODML}
            setIsODML={setIsODML}
            resetODML={() => {
              setODMLDateRange([{ from: null, to: null }]);
              setIsODML(false);
            }}
          />
        )} */}

              {dialogRoot && open &&
                createPortal(
                  <Predictor onClose={() => setOpen(false)} />,
                  dialogRoot,
                )}
              {/* {!isPredicted && dateRange.from && dateRange.to && (
                <button
                  onClick={() => setIsPredicted(true)}
                  className="predict-button flex animate-fadeIn items-center rounded-full border border-light-success-color bg-light-success-background px-2 py-1 text-light-success-color dark:border-dark-success-color dark:bg-dark-success-background dark:text-dark-success-color"
                >
                  <FaCheck />
                </button>
              )} */}
              {/* {!isODML && ODMLdateRange.some((range) => range.from && range.to) && (
          <button
            onClick={() => setIsODML(true)}
            className="predict-button flex animate-fadeIn items-center rounded-full border border-light-success-color bg-light-success-background px-2 py-1 text-light-success-color dark:border-dark-success-color dark:bg-dark-success-background dark:text-dark-success-color"
          >
            <FaCheck />
          </button>
        )} */}
{/* 
              <PredictResetButtons
                isPredicted={isPredicted}
                showDatePicker={showDatePicker}
                setShowDatePicker={setShowDatePicker}
                resetAttendance={() => {
                  setDateRange({ from: null, to: null });
                  setIsPredicted(false);
                }}
              /> */}
              {/* <ODMLResetButtons
            isODML={isODML}
            setIsODML={setIsODML}
            resetODML={() => {
              setODMLDateRange([{ from: null, to: null }]);
              setIsODML(false);
            }}
          /> */}
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
            </>
          )}
        </div>
        {!error && <Refresh type={{ mutateAttendance: true }} isOld={isOld} />}
      </div>
    </>
  );
};
