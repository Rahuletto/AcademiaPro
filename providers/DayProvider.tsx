import { DayOrderResponse } from '@/types/DayOrder';
import { clearCookies, getCookie } from '@/utils/cookies';
import { URL } from '@/utils/url';

import { createContext, useContext, useEffect, useState } from 'react';

const DayContext = createContext<DayOrderResponse | null>(null);

export function useDay() {
  return useContext(DayContext);
}

export function DayProvider({ children }: any) {
  const [day, setDay] = useState<DayOrderResponse | null>(null);

  useEffect(() => {
    fetch(`${URL}/api/dayorder`, {
      cache: 'default',
      method: 'GET',
      headers: {
        'X-CSRF-Token': getCookie('token') as string,
        'Set-Cookie': getCookie('token') as string,
        Cookie: getCookie('token') as string,
        Connection: 'keep-alive',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=7200',
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
  }, []);

  return <DayContext.Provider value={day}>{children}</DayContext.Provider>;
}
