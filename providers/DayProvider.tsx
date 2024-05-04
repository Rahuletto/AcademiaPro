import { DayOrderResponse } from '@/types/DayOrder';
import { clearCookies, getCookie } from '@/utils/cookies';
import { URL } from '@/utils/url';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

const DayContext = createContext<DayOrderResponse | null>(null);

export function useDay() {
  return useContext(DayContext);
}

export function DayProvider({ children }: { children: ReactNode }) {
  const [day, setDay] = useState<DayOrderResponse | null>(null);

  useEffect(() => {
    const cookie = getCookie('token');
    const u = sessionStorage.getItem('dayOrder');
    if (u && JSON.parse(u).expireAt > Date.now()) setDay(JSON.parse(u));
    else if (cookie)
      fetch(`${URL}/api/dayorder`, {
        cache: 'default',
        method: 'GET',
        headers: {
          'X-CSRF-Token': cookie,
          'Set-Cookie': cookie,
          Cookie: cookie,
          Connection: 'keep-alive',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control':
            'public, s-maxage=86400, stale-while-revalidate=7200',
        },
      })
        .then((r) => r.json())
        .then((res) => {
          if (res.token_refresh) {
            clearCookies();
            window.location.reload();
          } else {
            sessionStorage.setItem('dayOrder', JSON.stringify(res));
            setDay(res);
          }
        });
  }, []);

  return <DayContext.Provider value={day}>{children}</DayContext.Provider>;
}
