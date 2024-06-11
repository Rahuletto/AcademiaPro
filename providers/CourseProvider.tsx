import { Course } from '@/types/Course';
import { getCookie } from '@/utils/cookies';
import { URL } from '@/utils/url';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

const CoursesContext = createContext<Course[] | null>(null);

export function useCourses() {
  return useContext(CoursesContext);
}

export function CourseProvider({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    const cookie = getCookie('token');

    const u = localStorage.getItem('courses');
    if (u && JSON.parse(u).expireAt > Date.now()) setCourses(JSON.parse(u));
    else if (cookie)
      fetch(`${URL}/api/courses`, {
        cache: 'default',
        method: 'GET',
        headers: {
          'X-CSRF-Token': cookie,
          'Set-Cookie': cookie,
          Cookie: cookie,
          Connection: 'keep-alive',
          'content-type': 'application/json',
          'Cache-Control': 'private, maxage=86400, stale-while-revalidate=7200',
        },
      })
        .then((e) => e.json())
        .then((res) => {
          let data: Course[] = [];
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

          localStorage.setItem('courses', JSON.stringify(data));
          setCourses(data);
        });
  }, []);

  return (
    <CoursesContext.Provider value={courses}>{children}</CoursesContext.Provider>
  );
}
