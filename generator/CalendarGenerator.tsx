import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '@/styles/Calendar.module.css';
import { Calendar, Day } from '@/types/Calendar';
import CalendarCard from '../components/cards/CalendarCard';
import { ReactNode } from 'react';

const CalendarGenerator = ({
  data,
  page,
  children,
}: {
  data: Calendar;
  page: number;
  children: ReactNode;
}) => {
  return (
    <div className={styles.calendar}>
      {data && data.days ? (
        <>
          {children}
          <div className={styles.calendarGrid}>
            <span className={styles.calendarElem}>Date</span>
            <span className={styles.calendarElem}>Day</span>
            <span className={styles.calendarElem}>Event</span>
            <span className={styles.calendarElem}>Day Order</span>

            {data.days.map((element: Day, index: number) => (
              <CalendarCard key={index} month={page} element={element} />
            ))}
          </div>
        </>
      ) : (
        <>
          <Skeleton
            style={{ width: '60vw', height: '70vh', borderRadius: '12px' }}
          />
        </>
      )}
    </div>
  );
};

export default CalendarGenerator;
