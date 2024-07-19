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
    const datas = localStorage.length;

    if (datas > 1) clearCookies();

    const sessionUser = sessionStorage.getItem("user");

    if (sessionUser) {
      const user = JSON.parse(sessionUser);
      setUserInfo(user);
    } else if (cookie)
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
          sessionStorage.setItem("user", JSON.stringify(data));
          setUserInfo(data);
        });
  }, []);

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}
