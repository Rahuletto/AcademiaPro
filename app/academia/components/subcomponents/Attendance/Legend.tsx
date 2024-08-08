import React from 'react';

export default function AttendanceLegend() {
  return (
    <div className="hidden items-center justify-between p-4 opacity-40 xl:flex">
      <div className="flex w-[300px] items-center space-x-3">
        <span className="text-xs font-medium text-light-color dark:text-dark-color">
          Title
        </span>
      </div>
      <div className="w-24 text-right text-xs">
        <span className="text-xs font-medium">Margin</span>
      </div>
      <div className="flex items-center gap-3 rounded-full bg-light-background-darker p-0.5 text-xs font-medium dark:bg-dark-background-darker">
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
      <span className="text-xs">Percentage</span>
    </div>
  );
}