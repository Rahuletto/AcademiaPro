"use client";
import { Sidebar } from "../../components/Sidebar";
import Timetable from "./components/Timetable";
import Marks from "./components/Marks";
import Attendance from "./components/Attendance";
import { useEffect, useState } from "react";
import { AttendanceResponse } from "@/types/Attendance";
import { UserData } from "../../types/User";
import { useUser } from "@/provider/UserProvider";
import { ProscrapeURL } from "@/utils/URL";

export default function Academia() {
  const { user, isLoading, error } = useUser();
  const [attendance, setAttendance] = useState<AttendanceResponse | null>(null);
  useEffect(() => {
    if (!user) {
      if (!attendance) {
        fetch(`${ProscrapeURL}/api/user`);
      }
    }
  }, []);
  return (
    <div className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <div className="flex flex-col gap-12">
          <Timetable />
          <Attendance />
          <Marks />
        </div>
      </Sidebar>
    </div>
  );
}
