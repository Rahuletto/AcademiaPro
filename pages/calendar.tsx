import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import type { DayOrderResponse } from '@/types/DayOrder';
import type { InfoResponse } from '@/types/UserInfo';

import { getCookie, clearCookies } from '@/utils/cookies';

import Loader from '@/components/Loader';
import Header from '@/components/Header';
import { CalendarResponse } from '@/types/Calendar';
import CalendarGenerator from '@/components/CalendarGenerator';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';
import { URL } from '@/utils/url';
import { Sidebar } from '@/components/Sidebar';

export default function Academia() {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState<InfoResponse | null>(null);
  const [day, setDay] = useState<DayOrderResponse | null>(null);

  const [page, setPage] = useState(0);
  const [calendar, setCalendar] = useState<CalendarResponse | null>(null);

  useEffect(() => {
    // marks timetable attendance dayorder
    const u = localStorage.getItem('userData');

    if (u) setUserInfo(JSON.parse(u));

    if (!u)
      fetch(`${URL}/api/info`, {
        method: 'GET',
        headers: {
          'X-CSRF-Token': getCookie('token') as string,
          'Set-Cookie': getCookie('token') as string,
          Cookie: getCookie('token') as string,
          Connection: 'keep-alive',
          'content-type': 'application/json',
        },
      })
        .then((e) => e.json())
        .then((data) => {
          setUserInfo(data);
        });

    fetch(`${URL}/api/dayorder`, {
      method: 'GET',
      headers: {
        'X-CSRF-Token': getCookie('token') as string,
        'Set-Cookie': getCookie('token') as string,
        Cookie: getCookie('token') as string,
        Connection: 'keep-alive',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Cache-Control': 's-maxage=86400, stale-while-revalidate=7200',
      },
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.token_refresh) {
          clearCookies();
          window.location.reload();
        } else {
          setDay(res);
        }
      });

    if (!getCookie('token')) router.push('/login');

    setTimeout(() => {
      const todayScroll = document.getElementById('today');

      todayScroll?.scrollIntoView();
    }, 2000);
  }, []);

  useEffect(() => {
    if (userInfo) {
      fetch(`${URL}/api/calendar`, {
        method: 'GET',
        headers: {
          'X-CSRF-Token': getCookie('token') as string,
          'Set-Cookie': getCookie('token') as string,
          Cookie: getCookie('token') as string,
          Connection: 'keep-alive',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 's-maxage=86400, stale-while-revalidate=7200',
        },
      })
        .then((r) => r.json())
        .then((res) => {
          if (res.token_refresh) {
            clearCookies();
            window.location.reload();
          } else {
            setCalendar(res);
          }
        })
        .catch(() => {});
    }
  }, [userInfo]);

  useEffect(() => {
    setPage(new Date().getMonth());
  }, [calendar]);

  return (
    <>
      <Loader />
      <Header title={'Calendar | AcademiaPro'} />
      <main className="root">
        <Sidebar userInfo={userInfo} day={day} page="Calendar" />

        <div className="content" style={{ height: 'auto' }}>
          {calendar && (
            <>
              <CalendarGenerator page={page} data={calendar.calendar[page]}>
                <div className="paginate">
                  <button
                    onClick={() => setPage((e) => e - 1)}
                    disabled={page <= 0}
                  >
                    <FaCaretLeft />
                  </button>
                  <h3 className="month">{calendar.calendar[page].month}</h3>

                  <button
                    onClick={() => setPage((e) => e + 1)}
                    disabled={page >= calendar?.calendar.length - 1}
                  >
                    <FaCaretRight />
                  </button>
                </div>
              </CalendarGenerator>
            </>
          )}
        </div>
      </main>
    </>
  );
}
