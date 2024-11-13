"use client";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Sidebar } from "@/components/Sidebar";
import Loading from "@/components/States/Loading";
import { Cookie } from "@/utils/Cookies";
import Storage from "@/utils/Storage";
import { useRouter } from "next/navigation";
import { HiTableCells } from "react-icons/hi2";
import { CiViewTimeline } from "react-icons/ci";
import { BsClockHistory, BsPersonCheckFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";

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
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const key = Cookie.get("key");
    if (!key || key.includes("undefined")) {
      Storage.clear();
      Cookie.clear();
      router.push("/auth/login");
    }
  }, [router]);

  if (!mounted) return null;

  return (
    <div className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <div className="flex flex-col gap-12">
          <Timetable />
          <Suspense fallback={<Loading size="xl" />}>
            <Attendance />
          </Suspense>
          <Suspense fallback={<Loading size="xl" />}>
            <Marks />
          </Suspense>

          <div className="group sticky bottom-4 flex w-full items-center justify-center gap-4 transition-all duration-150 hover:gap-12 hover:p-0.5 lg:hidden">
            <div className="flex w-fit items-center justify-center gap-2 rounded-full border-2 border-light-input bg-light-background-light shadow-xl dark:border-dark-input dark:bg-dark-background-dark">
              <a
                title="Timetable"
                aria-label="Timetable"
                href="#timetable"
                className="rounded-full p-3 transition-all duration-150 hover:bg-white/10 hover:p-4"
              >
                <BsClockHistory className="text-xl text-light-color dark:text-dark-color" />
              </a>
              <a
                title="Attendance"
                aria-label="Attendance"
                className="rounded-full p-3 transition-all duration-150 hover:bg-white/10 hover:p-4"
                href="#attendance"
              >
                <BsPersonCheckFill className="text-xl text-light-color dark:text-dark-color" />
              </a>
              <a
                title="Marks"
                aria-label="Marks"
                className="rounded-full p-3 transition-all duration-150 hover:bg-white/10 hover:p-4"
                href="#marks"
              >
                <FaGraduationCap className="text-xl text-light-color dark:text-dark-color" />
              </a>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
