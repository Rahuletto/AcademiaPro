import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "@/styles/Calendar.module.css";
import { Calendar, Day } from "@/types/Calendar";
import CalendarCard from "../components/cards/CalendarCard";
import { ReactNode, useEffect, useRef } from "react";

const CalendarGenerator = ({
  data,
  page,
  children,
}: {
  data: Calendar;
  page: number;
  children: ReactNode;
}) => {
  const header = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerDiv = header.current;
    const bodyDiv = body.current;

    bodyDiv?.addEventListener("scroll", () => {
      headerDiv?.scrollTo(bodyDiv.scrollLeft, 0);
    });
  }, []);
  return (
    <div className={`${styles.calendar} overflow-hidden p-1`}>
      {data && data.days ? (
        <>
          {children}

          <div
            ref={header}
            className={`${styles.calendarHead} overflow-none w-auto`}
          >
            <span className={styles.calendarElem}>Date</span>
            <span className={styles.calendarElem}>Day</span>
            <span className={styles.calendarElem}>Event</span>
            <span className={styles.calendarElem}>Day Order</span>
          </div>
          <div
            ref={body}
            className={`${styles.calendarGrid} w-auto overflow-auto`}
          >
            {data.days
              .filter(
                (a) =>
                  a.date !== "IAT:" && a.date !== "IA:" && a.date !== "LWD:",
              )
              .map((element: Day, index: number) => (
                <CalendarCard key={index} month={page} element={element} />
              ))}
          </div>
        </>
      ) : (
        <>
          <Skeleton
            className="rounded-xl opacity-70"
            width={"60vw"}
            height={"70vh"}
          />
        </>
      )}
    </div>
  );
};

export default CalendarGenerator;
