import React from "react";
import Form from "./components/Form";

import { FaBookOpen } from "react-icons/fa";
import Link from "@/components/Link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Login() {
  const cookie = cookies().get("key");
  if (cookie) redirect("/academia");

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-light-background-normal dark:bg-dark-background-normal">
      <div className="flex h-fit w-[95vw] flex-col items-center justify-between gap-12 rounded-[48px] bg-light-background-dark px-12 py-12 md:h-[60vh] md:w-[80vw] md:items-start lg:flex-row dark:bg-dark-background-dark">
        <div className="flex h-fit max-w-[400px] flex-col justify-between md:h-full">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center justify-center gap-5 text-light-accent md:justify-start dark:text-dark-accent">
              <h1 className="text-2xl font-semibold md:text-4xl">
                AcademiaPro
              </h1>
              <FaBookOpen className="text-2xl md:text-4xl" />
            </div>
            <p className="text-center text-sm font-medium text-light-color opacity-60 md:text-lg lg:text-left dark:text-dark-color">
              University data, beautifully presented at your fingertips
            </p>
          </div>
          <div className="absolute bottom-12 left-0 flex w-screen items-center justify-center lg:static lg:w-full lg:items-start lg:justify-start">
            <Link
              secondary
              className="border-2 border-light-background-darker bg-light-background-normal py-2 text-lg lg:border-0 lg:bg-light-background-normal dark:border-dark-background-darker dark:bg-dark-button lg:dark:bg-dark-background-normal"
              href="https://better-lab.vercel.app"
              title="Redirect to Better-Lab"
              target="_blank"
            >
              Better-Lab
            </Link>
          </div>
        </div>
        <Form />
      </div>
    </main>
  );
}
