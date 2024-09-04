"use client";
import Loading from "@/components/States/Loading";

import { useEffect, useState } from "react";
import { useUser } from "@/provider/UserProvider";
import dynamic from "next/dynamic";

import { Sidebar } from "@/components/Sidebar";

const Attendance = dynamic(
  () => import("./components/Attendance").then((a) => a.default),
  { ssr: false },
);
const Marks = dynamic(
  () => import("./components/Marks").then((a) => a.default),
  { ssr: false },
);
const Timetable = dynamic(
  () => import("./components/Timetable").then((a) => a.default),
  { ssr: false },
);

export default function Academia() {
  const { user, isLoading, mutate, error } = useUser();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!user && !isLoading && !error) mutate()
  }, [user, isLoading, mutate, error]);

  if (!mounted) return null;

  return isLoading ? (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
      <Loading />
    </div>
  ) : (
    <div className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <div className="flex flex-col gap-12">
          <Timetable />
          <Attendance />
          <Marks />
        </div>
      </Sidebar>
    </div>
  )
}
