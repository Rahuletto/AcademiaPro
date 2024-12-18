import React from "react";
import Form from "./components/Form";

import { FaBookOpen } from "react-icons/fa";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { IoLockClosed } from "react-icons/io5";
import { Link as ALink } from "next-view-transitions";
import ThemeToggle from "@/components/Sidebar/Buttons/ThemeToggle";


export default async function Login() {
  const cookie = (await cookies()).get("key");
  if (cookie) redirect("/academia");

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-light-background-normal dark:bg-dark-background-normal">
      <div className="fixed top-8 right-8">
        <ThemeToggle />
      </div>
      <div className="flex h-fit w-[95vw] flex-col justify-between gap-24 rounded-[48px] bg-light-background-dark px-12 lg:w-[70vw] dark:bg-dark-background-dark " style={{paddingTop:'1rem'}} >
        <div className="flex flex-col items-center justify-between gap-12 lg:items-start lg:flex-row">
          <div className="flex h-fit max-w-[400px] flex-col justify-between lg:h-full">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center justify-center gap-5 text-light-accent lg:justify-start dark:text-dark-accent">
                <h1 className="text-2xl font-semibold lg:text-4xl">ClassPro</h1>
                <FaBookOpen className="text-2xl lg:text-4xl" />
              </div>
              <p className="text-center text-sm font-medium text-light-color opacity-60 lg:text-lg lg:text-left dark:text-dark-color">
                University data, beautifully presented at your fingertips
              </p>
            </div>
          </div>
          <Form />
        </div>
        <div className="md:-mb-24 -mb-32 flex md:flex-row flex-col w-full items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-2 text-light-color opacity-30 dark:text-dark-color">
            <IoLockClosed />
            <p className="font-mono text-xs">
              Transparent, Open-source and secure.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <ALink
              href="/whatsapp"
              className="rounded-lg px-3 py-1 text-sm font-medium text-light-accent opacity-90 transition-all duration-150 hover:bg-black/10 dark:text-dark-accent dark:hover:bg-white/5"
            >
              Help
            </ALink>
            <ALink
              href="/privacy"
              className="rounded-lg px-3 py-1 text-sm font-medium text-light-accent opacity-90 transition-all duration-150 hover:bg-black/10 dark:text-dark-accent dark:hover:bg-white/5"
            >
              Privacy
            </ALink>
          </div>
        </div>
      </div>
    </main>
  );
}
