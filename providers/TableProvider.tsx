import { Table, TimeTableResponse } from '@/types/TimeTable';
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

    const u = localStorage.getItem('dailyTable');
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
            localStorage.setItem('dailyTable', JSON.stringify(res));
            const table: TimeTableResponse = {
              table: [
                {
                  day: 1,
                  dayOrder: 'Day 1',
                  subjects: ['OODP (Theory)', undefined, 'Maths (Theory)', undefined, undefined, 'Physics (Lab)', 'Chemistry (Lab)', 'Maths (Theory)', 'Maths (Theory)', undefined],
                },
                {
                  day: 2,
                  dayOrder: 'Day 2',
                  subjects: ['OODP (Theory)', undefined, 'Maths (Theory)', undefined, undefined, 'Physics (Lab)', 'Chemistry (Lab)', 'Maths (Theory)', 'Maths (Theory)', undefined],
                },
                {
                  day: 3,
                  dayOrder: 'Day 3',
                  subjects: ['OODP (Theory)', undefined, 'Maths (Theory)', undefined, undefined, 'Physics (Lab)', 'Chemistry (Lab)', 'Maths (Theory)', 'Maths (Theory)', undefined],
                },
                {
                  day: 4,
                  dayOrder: 'Day 4',
                  subjects: ['OODP (Theory)', undefined, 'Maths (Theory)', undefined, undefined, 'Physics (Lab)', 'Chemistry (Lab)', 'Maths (Theory)', 'Maths (Theory)', undefined],
                },
                {
                  day: 5,
                  dayOrder: 'Day 5',
                  subjects: ['OODP (Theory)', undefined, 'Maths (Theory)', undefined, undefined, 'Physics (Lab)', 'Chemistry (Lab)', 'Maths (Theory)', 'Maths (Theory)', undefined],
                },
              ],
              expireAt: Date.now() + 12 * 3600 * 1000,
            }
            setTable(table);
          }
        });
  }, [userInfo]);

  return (
    <TableContext.Provider value={table}>{children}</TableContext.Provider>
  );
}
