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
    fetch(`${URL}/api/info`, {
      cache: 'default',
      method: 'GET',
      headers: {
        'X-CSRF-Token': getCookie('token') as string,
        'Set-Cookie': getCookie('token') as string,
        Cookie: getCookie('token') as string,
        Connection: 'keep-alive',
        'content-type': 'application/json',
        'Cache-Control': 'private, maxage=86400, stale-while-revalidate=7200',
      },
    })
      .then((e) => e.json())
      .then((data) => {
        console.log(data);
        setUserInfo(data);
      });
  }, []);

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}
