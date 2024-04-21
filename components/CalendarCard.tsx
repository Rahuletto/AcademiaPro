import { Day } from "@/types/Calendar";
import styles from "@/styles/Calendar.module.css";

export default function CalendarCard({ element }: { element: Day }) {
  const classes = [
    styles.calendarElem,
    element.dayOrder == "-" ? styles.holiday : "",
    new Date().getDate() == Number(element.date) ? styles.today : "",
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
