import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const AttendanceTable = dynamic(
  () => import('@/components/Attendance').then((mod) => mod.default),
  { ssr: false },
);

const MarksTable = dynamic(
  () => import('@/components/Marks').then((mod) => mod.default),
  { ssr: false },
);

const TimeTableComponent = dynamic(
  () => import('@/components/Timetable').then((mod) => mod.default),
  { ssr: false },
);

import type { AttendanceResponse } from '@/types/Attendance';
import type { MarksResponse } from '@/types/Marks';
import type { TimeTableResponse } from '@/types/TimeTable';

import { clearCookies, getCookie } from '@/utils/cookies';

import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { Sidebar } from '@/components/Sidebar';
import { TableHeader } from '@/components/TableHeader';
import { useDay } from '@/providers/DayProvider';
import { useUser } from '@/providers/UserProvider';
import { URL } from '@/utils/url';

export default function Academia() {
  const router = useRouter();
  const userInfo = useUser();
  const day = useDay();
  const [attendance, setAttendance] = useState<AttendanceResponse | null>(null);
  const [table, setTable] = useState<TimeTableResponse | null>(null);
  const [todayTable, setToday] = useState<(string | undefined)[] | undefined>(
    [],
  );
  const [marks, setMarks] = useState<MarksResponse | null>(null);

  useEffect(() => {
    const m = sessionStorage.getItem('marks');
    const tt = localStorage.getItem('timetable');
    const a = sessionStorage.getItem('attendance');
    if (m) setMarks(JSON.parse(m));
    if (tt) setTable(JSON.parse(tt));
    if (a) setAttendance(JSON.parse(a));

    if (!getCookie('token')) router.push('/login');

    const sections = document.querySelectorAll('section');
    const menu_links = document.querySelectorAll('.h-button');

    const container = document.querySelector('.content');

    const makeActive = (link: number) =>
      menu_links[link].classList.add('active');
    const removeActive = (link: number) =>
      menu_links[link].classList.remove('active');
    const removeAllActive = () =>
      [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    const sectionMargin = 100;

    let currentActive = 0;

    container?.addEventListener('scroll', (e) => {
      const current =
        sections.length -
        [...sections]
          .reverse()
          .findIndex(
            (section) =>
              container.scrollTop >= section.offsetTop - sectionMargin,
          ) -
        1;

      if (current !== currentActive) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
      }
    });
  }, []);

  useEffect(() => {
    if (userInfo) {
      fetch(`${URL}/api/attendance`, {
        next: { revalidate: 2 * 3600 },
        cache: 'default',
        method: 'GET',
        headers: {
          'X-CSRF-Token': getCookie('token') as string,
          'Set-Cookie': getCookie('token') as string,
          Cookie: getCookie('token') as string,
          Connection: 'keep-alive',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'private, maxage=86400, stale-while-revalidate=7200',
        },
      })
        .then((r) => r.json())
        .then((res) => {
          if (res.token_refresh) {
            clearCookies();
            window.location.reload();
          } else {
            sessionStorage.setItem('attendance', JSON.stringify(res));
            setAttendance(res);
          }
        })
        .catch(() => {});

      if (!table?.table) {
        fetch(`${URL}/api/timetable?batch=${userInfo?.userInfo?.batch}`, {
          next: { revalidate: 30 * 24 * 3600 },
          cache: 'default',
          method: 'GET',
          headers: {
            'X-CSRF-Token': getCookie('token') as string,
            'Set-Cookie': getCookie('token') as string,
            Cookie: getCookie('token') as string,
            Connection: 'keep-alive',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Cache-Control':
              'private, maxage=86400, stale-while-revalidate=7200',
          },
        })
          .then((r) => r.json())
          .then((res) => {
            if (res.token_refresh) {
              clearCookies();
              window.location.reload();
            } else {
              localStorage.setItem('timetable', JSON.stringify(res));
              setTable(res);
            }
          })
          .catch(() => {});
      }

      fetch(`${URL}/api/marks`, {
        cache: 'default',
        next: { revalidate: 2 * 3600 },
        method: 'GET',
        headers: {
          'X-CSRF-Token': getCookie('token') as string,
          'Set-Cookie': getCookie('token') as string,
          Cookie: getCookie('token') as string,
          Connection: 'keep-alive',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'private, maxage=86400, stale-while-revalidate=7200',
        },
      })
        .then((r) => r.json())
        .then((res) => {
          if (res.token_refresh) {
            clearCookies();
            window.location.reload();
          } else {
            sessionStorage.setItem('marks', JSON.stringify(res));
            setMarks(res);
          }
        })
        .catch(() => {});
    }
  }, [userInfo]);

  useEffect(() => {
    if (day && !day.dayOrder.includes('No'))
      setToday(table?.table[Number(day.dayOrder) - 1].subjects);
    else if (day && day.dayOrder.includes('No')) {
      setToday([]);
    }
  }, [table, day]);

  return (
    <>
      <Loader />
      <Header title={'Academia | AcademiaPro'} />

      <main className="root">
        <Sidebar userInfo={userInfo} day={day} todayTable={todayTable} />
        <div className="content">
          <section id="timetable">
            <h2 className="subtitle">
              Timetable{' '}
              {userInfo?.userInfo ? (
                <a href={`/timetable`} className="download">
                  View all
                </a>
              ) : null}
            </h2>
            <div className="table-responsive">
              <table className="table-bordered table text-center">
                <thead>
                  <TableHeader />
                </thead>
                {todayTable && userInfo && (
                  <TimeTableComponent table={todayTable} userInfo={userInfo} />
                )}
              </table>
            </div>
          </section>

          <section id="attendance" className="attendance">
            <h2 className="subtitle">Attendance</h2>
            <AttendanceTable data={attendance} todayTable={todayTable} />
          </section>

          <section className="marks" id="marks">
            <h2 className="subtitle">Marks</h2>
            <MarksTable data={marks} />
          </section>
        </div>
      </main>
    </>
  );
}
