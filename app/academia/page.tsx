"use client";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Sidebar } from "@/components/Sidebar";
import Loading from "@/components/States/Loading";
import { Cookie } from "@/utils/Cookies";
import Storage from "@/utils/Storage";
import { useRouter } from "next/navigation";

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
        </div>
      </Sidebar>
    </div>
  );
}
