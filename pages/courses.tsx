import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { Sidebar } from "@/components/Sidebar";
import { useDay } from "@/providers/DayProvider";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import { useCourses } from "@/providers/CourseProvider";
import CourseCard from "@/components/cards/CourseCard";

export default function Academia() {
  const router = useRouter();
  const day = useDay();
  const courses = useCourses();

  return (
    <>
      <Loader />
      <Header title={"Courses | AcademiaPro"} />
      <main className="root">
        <Sidebar day={day} page="Course" />

        <div className="flex-grow p-4">
          <h2>Course List</h2>
          <div className="courseGrid gap-2 bg-transparent">
            {" "}
            {courses &&
              courses[0] &&
              courses.map((course) => (
                <>
                  <CourseCard course={course} />
                </>
              ))}
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
}
