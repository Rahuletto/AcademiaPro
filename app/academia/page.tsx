"use client";
import { Sidebar } from "../../components/Sidebar";
import Timetable from "./components/Timetable";
import Marks from "./components/Marks";
import Attendance from "./components/Attendance";
import { useUser } from "@/provider/UserProvider";
import Loading from "@/components/States/Loading";

export default function Academia() {
  
  const { user, isLoading } = useUser();
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
  ) : null
}
