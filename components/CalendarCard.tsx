import { Day } from "@/types/Calendar";
import styles from "@/styles/Calendar.module.css";

export default function CalendarCard({ element, month }: { element: Day, month: number }) {
  const classes = [
    styles.calendarElem,
    element.dayOrder == "-" ? styles.holiday : "",
    new Date().getMonth() == month && new Date().getDate() == Number(element.date) ? `${styles.today} today` : "",
  ].join(" ");
  return (
    <>
      <span id={new Date().getMonth() == month && new Date().getDate() == Number(element.date) ? 'today' : ''} className={classes}>{element.date}</span>
      <span className={classes}>{element.day}</span>
      <span className={classes}>{element.holiday && element.holiday?.split('/')[3] ? element.holiday?.split('-')[0] : element.holiday}</span>
      <span className={classes}>{element.dayOrder}</span>
    </>
  );
}
