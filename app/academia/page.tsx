"use client";
import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import Timetable from "./components/Timetable";
import { useRouter } from "next/navigation";
import { Cookie } from "@/utils/Cookies";

export default function Academia() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true);
    const cookies = Cookie.get('key')
    if(!cookies) router.push('/auth/login')
  }, []);

  if (!isMounted) {
    return null;
  } else
    return (
      <div className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
        <Sidebar>
          <Timetable />
        </Sidebar>
      </div>
    );
}
