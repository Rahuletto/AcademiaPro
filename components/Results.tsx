import styles from "@/styles/Attendance.module.css";
import { ExamData } from "@/types/Results";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ResultsCard from "./cards/ResultsCard";

const ResultsTable = ({ data }: { data: ExamData | null }) => {
  return (
    <>
      <table className="w-full">
        <thead />
        <thead />
        <tbody className={[styles.attr, "attTable"].join(" ")}>
          {data && data.marks[0] ? (
            data.marks.map((element, index: number) => (
              <ResultsCard key={index} data={element} />
            ))
          ) : data?.name ? (
            <div className="m-[12px_24px] flex h-[280px] items-center justify-center rounded-[22px] bg-backgroundLight">
              <h4 className="text-center text-[16px] opacity-80">
                There is no results here, Interesting...
              </h4>
            </div>
          ) : (
            <>
              <Skeleton className="h-[64px] w-[60vw] rounded-xl opacity-10" />
              <Skeleton className="h-[64px] w-[60vw] rounded-xl opacity-60" />
              <Skeleton className="h-[64px] w-[60vw] rounded-xl opacity-10" />

              <Skeleton className="h-[64px] w-[60vw] rounded-xl opacity-60" />

              <Skeleton className="h-[64px] w-[60vw] rounded-xl opacity-10" />
              <Skeleton className="h-[64px] w-[60vw] rounded-xl opacity-60" />
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ResultsTable;
