import CalendarGenerator from '@/generator/CalendarGenerator';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { Sidebar } from '@/components/Sidebar';
import { useDay } from '@/providers/DayProvider';
import { useUser } from '@/providers/UserProvider';
import { CalendarResponse } from '@/types/Calendar';
import { clearCookies, getCookie } from '@/utils/cookies';
import { URL } from '@/utils/url';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';
import Footer from '@/components/Footer';
import { useCourses } from '@/providers/CourseProvider';
import CourseCard from '@/components/cards/CourseCard';

export default function Academia() {
  const router = useRouter();
  const day = useDay();
  const courses = useCourses();

  return (
    <>
      <Loader />
      <Header title={'Courses | AcademiaPro'} />
      <main className="root">
        <Sidebar day={day} page="Calendar" />

        <div className="content" style={{ height: 'auto' }}>
          <h2>Course List</h2>
          <div className="markGrid">
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
