import type { Course } from "@/types/Course";
import { getCookie } from "@/utils/cookies";
import { URL } from "@/utils/url";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CoursesContext = createContext<Course[] | null>(null);

export function useCourses() {
  return useContext(CoursesContext);
}

export function CourseProvider({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    const cookie = getCookie("token");

    if (cookie)
      fetch(`${URL}/api/courses`, {
        cache: "default",
        method: "GET",
        headers: {
          "X-CSRF-Token": cookie,
          "Set-Cookie": cookie,
          Cookie: cookie,
          Connection: "keep-alive",
          "content-type": "application/json",
          "Cache-Control": "private, maxage=86400, stale-while-revalidate=7200",
        },
      })
        .then((e) => e.json())
        .then((res) => {
          const data: Course[] = [];
          res.courses.forEach((course: Course) => {
            data.push({
              courseCode: course.courseCode,
              courseType: course.courseType,
              courseTitle: course.courseTitle,
              credit: course.credit,
              regnType: course.regnType,
              category: course.category,
              facultyName: course.facultyName,
              slot: course.slot,
              gcrCode: course.gcrCode,
              roomNo: course.roomNo,
              academicYear: course.academicYear,
            });
          });
          setCourses(data);
        });
  }, []);

  return (
    <CoursesContext.Provider value={courses}>
      {children}
    </CoursesContext.Provider>
  );
}
