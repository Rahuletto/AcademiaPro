"use client";
import { Sidebar } from "../../components/Sidebar";
import Timetable from "./components/Timetable";
import Marks from "./components/Marks";
import Attendance from "./components/Attendance";
import Loading from "@/components/States/Loading";
import { useEffect, useState } from "react";
// ---
import { useUser } from "@/provider/UserProvider";
import { useAttendance } from "@/provider/AttendanceProvider";
import { useDay } from "@/provider/DayProvider";
import { useMarks } from "@/provider/MarksProvider";
import { useTimetable } from "@/provider/TimetableProvider";

function useMutateAll() {
  const { mutate: mutateAttendance } = useAttendance();
  const { mutate: mutateDay } = useDay();
  const { mutate: mutateMarks } = useMarks();
  const { mutate: mutateTimetable } = useTimetable();
  const { mutate: mutateUser } = useUser();

  return () => {
    mutateUser();
    mutateAttendance();
    mutateDay();
    mutateMarks();
    mutateTimetable();
  };
}

export default function Academia() {
  const { user, isLoading } = useUser();

  const [mounted, setMounted] = useState(false);
  const mutateAll = useMutateAll();

  useEffect(() => {
    setMounted(true);
    mutateAll();
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
