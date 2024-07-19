import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { Sidebar } from "@/components/Sidebar";
import CourseCard from "@/components/cards/CourseCard";
import { useCourses } from "@/providers/CourseProvider";
import { useDay } from "@/providers/DayProvider";
import { useTimeTable } from "@/providers/TableProvider";
import styles from "@/styles/CourseList.module.css";
import { useEffect, useState } from "react";

export default function Courses() {
  const day = useDay();
  const courses = useCourses();

  const [today, setToday] = useState<(string | undefined)[] | undefined>([]);
  const table = useTimeTable();

  useEffect(() => {
    if (day && !day.dayOrder.includes("No") && table?.table)
      setToday(table?.table[Number(day.dayOrder) - 1].subjects);
    else if (day?.dayOrder.includes("No")) {
      setToday([]);
    }
  }, [table, day]);

  return (
    <>
      <Loader />
      <Header title={"Courses | AcademiaPro"} />
      <main className="root">
        <Sidebar todayTable={today} day={day} page="Course" />
        <div className="content flex-grow">
          <h2 className="m-2 md:m-0">Course List</h2>
          <table className="w-full">
            <tbody className={styles.courseTable}>
              {courses?.[0] &&
                courses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
            </tbody>
          </table>
          <Footer />
        </div>
      </main>
    </>
  );
}
