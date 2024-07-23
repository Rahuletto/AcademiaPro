"use client";
import { UserData, UserInfo } from "@/types/User";
import { Cookie as cookies } from "@/utils/Cookies";
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import useSWR from "swr";
import Storage from "@/utils/Storage";
import { ProscrapeURL } from "@/utils/URL";

interface UserContextType {
  user: UserInfo | null;
  error: Error | null;
  isLoading: boolean;
  mutate: () => Promise<void | UserInfo | null | undefined>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  error: null,
  isLoading: false,
  mutate: async () => {},
});

const fetcher = async (url: string) => {
  const cookie = cookies.get("token");
  if (!cookie) return null;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-CSRF-Token": cookie,
        "Set-Cookie": cookie,
        Cookie: cookie,
        Connection: "keep-alive",
        "content-type": "application/json",
        "Cache-Control": "private, maxage=86400, stale-while-revalidate=7200",
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorBody}`
      );
    }

    const data = await response.json();
    if (!data || !data.user) {
      throw new Error("Invalid response format");
    }

    return data.user;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({
  children,
  initialUser,
}: {
  children: ReactNode;
  initialUser?: UserInfo | null;
}) {
  const [retryCount, setRetryCount] = useState(0);

  const getCachedUser = useCallback(
    () => Storage.get<UserInfo | null>("user", null),
    []
  );

  const {
    data: user,
    error,
    isValidating,
    mutate,
  } = useSWR<UserInfo | null>(`${ProscrapeURL}/api/user`, fetcher, {
    fallbackData: initialUser || getCachedUser(),
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    onSuccess: (data) => {
      if (data) {
        Storage.set("user", data);
      }
      setRetryCount(0);
    },
    onError: (err) => {
      console.error("Error fetching user data:", err);
      if (retryCount < 3) {
        setTimeout(() => {
          setRetryCount((prev) => prev + 1);
        }, 5000 * (retryCount + 1));
      } else {
        Storage.remove("user");
      }
    },
  });

  return (
    <UserContext.Provider
      value={{
        user: user || null,
        error: error || null,
        isLoading: isValidating,
        mutate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
