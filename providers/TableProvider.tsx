import { TimeTableResponse } from '@/types/TimeTable';
import { getCookie } from '@/utils/cookies';
import { URL } from '@/utils/url';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useUser } from './UserProvider';

const TableContext = createContext<TimeTableResponse | null>(null);

export function useTimeTable() {
  return useContext(TableContext);
}

export function TableProvider({ children }: { children: ReactNode }) {
  const [table, setTable] = useState<TimeTableResponse | null>(null);
  const userInfo = useUser();

  useEffect(() => {
    const cookie = getCookie('token');

    const u = localStorage.getItem('timetable');
    if (u && JSON.parse(u).expireAt > Date.now()) setTable(JSON.parse(u));
    else if (cookie && userInfo)
      fetch(`${URL}/api/timetable?batch=${userInfo?.userInfo?.batch}`, {
        next: { revalidate: 12 * 3600 },
        method: 'GET',
        headers: {
          'X-CSRF-Token': cookie,
          'Set-Cookie': cookie,
          Cookie: cookie,
          Connection: 'keep-alive',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'private, maxage=86400',
        },
      })
        .then((r) => r.json())
        .then((res) => {
          if (!res.token_refresh) {
            localStorage.setItem('timetable', JSON.stringify(res));
            setTable(res);
          }
        });
  }, [userInfo]);

  return (
    <TableContext.Provider value={table}>{children}</TableContext.Provider>
  );
}
