import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { Sidebar } from "@/components/Sidebar";
import CourseCard from "@/components/cards/CourseCard";
import { useCourses } from "@/providers/CourseProvider";
import { useDay } from "@/providers/DayProvider";
import styles from "@/styles/CourseList.module.css";
import { useRouter } from "next/router";

export default function Courses() {
  const day = useDay();
  const courses = useCourses();

  return (
    <>
      <Loader />
      <Header title={"Courses | AcademiaPro"} />
      <main className="root">
        <Sidebar day={day} page="Course" />
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
