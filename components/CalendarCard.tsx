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
      <td className={classes}>{element.date}</td>
      <td className={classes}>{element.day}</td>
      <td className={classes}>{element.holiday}</td>
      <td className={classes}>{element.dayOrder}</td>
    </>
  );
}
