import CalendarGenerator from '@/components/CalendarGenerator';
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

export default function Academia() {
  const router = useRouter();

  const userInfo = useUser();
  const day = useDay();
  const [page, setPage] = useState(0);
  const [calendar, setCalendar] = useState<CalendarResponse | null>(null);

  useEffect(() => {
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
