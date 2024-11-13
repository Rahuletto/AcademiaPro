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

          <div className="sticky bottom-3 flex w-full items-center justify-center gap-4 shadow-xl lg:hidden">
            <div className="flex w-fit items-center justify-center gap-2 rounded-full bg-light-background-light dark:bg-dark-background-dark">
              <a
                href="#timetable"
                className="rounded-full p-3  hover:bg-white/10"
              >
                <BsClockHistory className="text-2xl text-light-accent dark:text-dark-accent" />
              </a>
              <a
                className="rounded-full p-3  hover:bg-white/10"
                href="#attendance"
              >
                <BsPersonCheckFill className="text-2xl text-light-accent dark:text-dark-accent" />
              </a>
              <a
                className="rounded-full p-3  hover:bg-white/10"
                href="#marks"
              >
                <FaGraduationCap className="text-2xl text-light-accent dark:text-dark-accent" />
              </a>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
