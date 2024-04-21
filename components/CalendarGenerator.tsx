import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "@/styles/Calendar.module.css";
import { Calendar, Day } from "@/types/Calendar";
import CalendarCard from "./CalendarCard";

const CalendarGenerator = ({ data }: { data: Calendar }) => {
  return (
    <div className={styles.calendar}>
      {data && data.days && data.month ? (
        <>
          <h3 className={styles.month}>{data.month}</h3>
          <div className={styles.calendarGrid}>
            {data.days.map((element: Day, index: any) => (
                <CalendarCard key={index} element={element} />
            ))}
          </div>
        </>
      ) : (
        <>
          <Skeleton
            style={{ width: "60vw", height: "70vh", borderRadius: "12px" }}
          />
        </>
      )}
    </div>
  );
};

export default CalendarGenerator;
