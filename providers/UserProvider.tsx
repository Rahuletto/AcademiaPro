import type { InfoResponse } from "@/types/UserInfo";
import { clearCookies, getCookie } from "@/utils/cookies";
import { URL } from "@/utils/url";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const UserContext = createContext<InfoResponse | null>(null);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<InfoResponse | null>(null);

  useEffect(() => {
    const cookie = getCookie("token");
    if (cookie)
      fetch(`${URL}/api/user`, {
        method: "GET",
        headers: {
          "X-CSRF-Token": cookie,
          "Set-Cookie": cookie,
          Cookie: cookie,
          Connection: "keep-alive",
          "content-type": "application/json",
          "Cache-Control": "private, maxage=86400, stale-while-revalidate=7200",
        },
      })
        .then((e) => e.json())
        .then((res) => {
          const data = {
            userInfo: res.user,
            expireAt: res.expireAt,
          };
          setUserInfo(data);
        });
  }, []);

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}
