"use client";
import { Sidebar } from "../../components/Sidebar";
import Timetable from "./components/Timetable";
import Marks from "./components/Marks";
import Attendance from "./components/Attendance";
import { useUser } from "@/provider/UserProvider";
import Loading from "@/components/States/Loading";
import { useEffect, useState } from "react";
import { useTransitionRouter as useRouter } from "next-view-transitions";

export default function Academia() {
  const router = useRouter();
  const { user, isLoading, mutate } = useUser();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!user && isLoading === false) {
      mutate().then(() => router.refresh());
    }
  }, [isLoading, user, mutate, router]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return user ? (
    <div className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <div className="flex flex-col gap-12">
          <Timetable />
          <Attendance />
          <Marks />
        </div>
      </Sidebar>
    </div>
  ) : isLoading ? (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
      <Loading />
    </div>
  ) : null;
}
