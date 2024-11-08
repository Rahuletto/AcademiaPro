import React from "react";
import Form from "./components/Form";

import { FaBookOpen } from "react-icons/fa";
import Link from "@/components/Link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { IoLockClosed } from "react-icons/io5";

export default async function Login() {
  const cookie = (await cookies()).get("key");
  if (cookie) redirect("/academia");

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-light-background-normal dark:bg-dark-background-normal">
      <div className="flex flex-col justify-between gap-24 h-fit w-[95vw] rounded-[48px] bg-light-background-dark px-12 py-12 md:h-[50vh] md:w-[80vw] dark:bg-dark-background-dark">
        <div className="flex flex-col items-center justify-between md:items-start gap-12 lg:flex-row">
          <div className="flex h-fit max-w-[400px] flex-col justify-between md:h-full">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center justify-center gap-5 text-light-accent md:justify-start dark:text-dark-accent">
                <h1 className="text-2xl font-semibold md:text-4xl">ClassPro</h1>
                <FaBookOpen className="text-2xl md:text-4xl" />
              </div>
              <p className="text-center text-sm font-medium text-light-color opacity-60 md:text-lg lg:text-left dark:text-dark-color">
                University data, beautifully presented at your fingertips
              </p>
            </div>
          </div>
          <Form />
        </div>
        <div className="flex w-full items-center justify-center gap-2 -mb-24 text-light-color dark:text-dark-color opacity-30">
        <IoLockClosed /><p className="font-mono text-xs">Transparent, Open-source and secure.</p> 
        </div>
      </div>
    </main>
  );
}
