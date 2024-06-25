import Card from '@/components/cards/Card';
import styles from '@/styles/Attendance.module.css';
import type { AttendanceResponse, Course } from '@/types/Attendance';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AttendanceTable = ({
  data,
  todayTable,
}: {
  data: AttendanceResponse | null;
  todayTable?: (string | undefined)[];
}) => {
  return (
    <>
      <table className="w-full">
        <thead />
        <thead />
        <tbody className={[styles.attr, 'attTable'].join(' ')}>
          {data && data.attendance[0] ? (
            data.attendance.map((element: Course, index: number) => (
              <Card
                key={index}
                title={element.courseTitle}
                code={element.courseCode}
                category={element.category}
                data={{
                  present:
                    Number(element.hoursConducted) -
                    Number(element.hoursAbsent),
                  absent: Number(element.hoursAbsent),
                  total: Number(element.hoursConducted),
                }}
                percent={element.attendancePercentage}
                todayTable={todayTable}
              />
            ))
          ) : data?.expireAt ? (
            <div className="bg-backgroundLight rounded-[22px] h-[280px] flex items-center justify-center m-[12px_24px]">
              <h4 className="text-center opacity-80 text-[16px]">
                There is no attendance here, Interesting...
              </h4>
            </div>
          ) : (
            <>
              <Skeleton className="w-[60vw] h-[64px] rounded-xl opacity-60" />
              <Skeleton className="w-[60vw] h-[64px] rounded-xl opacity-10" />
              <Skeleton className="w-[60vw] h-[64px] rounded-xl opacity-60" />

              <Skeleton className="w-[60vw] h-[64px] rounded-xl opacity-10" />

              <Skeleton className="w-[60vw] h-[64px] rounded-xl opacity-60" />
              <Skeleton className="w-[60vw] h-[64px] rounded-xl opacity-10" />
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default AttendanceTable;
