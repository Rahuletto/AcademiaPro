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
      <table style={{ width: '-webkit-fill-available' }}>
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
            <div
              style={{
                background: 'var(--background-light)',
                borderRadius: '22px',
                height: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '12px 24px',
              }}
            >
              <h4
                style={{
                  textAlign: 'center',
                  opacity: '0.8',
                  fontSize: '16px',
                }}
              >
                There is no attendance here, Interesting...
              </h4>
            </div>
          ) : (
            <>
              <Skeleton
                style={{ width: '60vw', height: '64px', borderRadius: '12px' }}
              />
              <Skeleton
                style={{
                  width: '60vw',
                  height: '64px',
                  borderRadius: '12px',
                  opacity: 0.1,
                }}
              />
              <Skeleton
                style={{ width: '60vw', height: '64px', borderRadius: '12px' }}
              />

              <Skeleton
                style={{
                  width: '60vw',
                  height: '64px',
                  borderRadius: '12px',
                  opacity: 0.1,
                }}
              />

              <Skeleton
                style={{ width: '60vw', height: '64px', borderRadius: '12px' }}
              />
              <Skeleton
                style={{
                  width: '60vw',
                  height: '64px',
                  borderRadius: '12px',
                  opacity: 0.1,
                }}
              />
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default AttendanceTable;
