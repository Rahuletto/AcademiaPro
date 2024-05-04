import { InfoResponse } from '@/types/UserInfo';
import { getCookie } from '@/utils/cookies';
import { URL } from '@/utils/url';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext<InfoResponse | null>(null);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: any) {
  const [userInfo, setUserInfo] = useState<InfoResponse | null>(null);

  useEffect(() => {
    const cookie = getCookie('token');

    const u = localStorage.getItem('userInfo');
    if (u && JSON.parse(u).expireAt > Date.now()) setUserInfo(JSON.parse(u));
    else if (cookie)
      fetch(`${URL}/api/info`, {
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
        .then((data) => {
          localStorage.setItem('userInfo', JSON.stringify(data));
          setUserInfo(data);
        });
  }, []);

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}
