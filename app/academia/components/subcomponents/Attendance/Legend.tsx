import React, { useEffect, useRef, useState } from "react";
import { FiInfo } from "react-icons/fi";
import InfoPopup from "./InfoPopup";

export default function AttendanceLegend() {
  const [showInfoPopup, setShowInfoPopup] = useState<boolean>(false);
  const infoIconRef = useRef<HTMLDivElement>(null);

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
    <div className="hidden items-center justify-between p-4 xl:flex">
      <div className="flex w-[300px] items-center space-x-3 opacity-40">
        <span className="text-xs font-medium text-light-color dark:text-dark-color">
          Title
        </span>
      </div>
      <div className="flex w-24 items-center justify-end gap-3 text-right text-xs">
        <span className="text-xs font-medium opacity-40">Margin</span>
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
      <div className="flex items-center gap-3 rounded-full bg-light-background-darker p-0.5 text-xs font-medium opacity-40 dark:bg-dark-background-darker">
        <div className="flex items-center font-medium">
          <span className="rounded-l-full bg-light-success-background px-3 text-light-success-color dark:bg-dark-success-background dark:text-dark-success-color">
            Present
          </span>
          <span className="rounded-r-full bg-light-error-background px-3 text-light-error-color dark:bg-dark-error-background dark:text-dark-error-color">
            Absent
          </span>
        </div>
        <span className="rounded-full bg-light-color px-3 font-bold text-light-background-light opacity-80 dark:bg-dark-color dark:text-dark-background-dark">
          Total
        </span>
      </div>
      <span className="text-xs opacity-40">Percentage</span>
    </div>
  );
}
