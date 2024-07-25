import React from "react";
import Form from "./components/Form";
import { FaBookOpen } from "react-icons/fa";
import Link from "@/components/Link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Login() {
  const cookie = cookies().get("token");
  if (cookie) redirect("/academia");

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-light-background-normal dark:bg-dark-background-normal">
      <div className="flex h-fit w-[90vw] flex-col items-center justify-between gap-6 rounded-[24px] bg-light-background-dark px-8 py-8 sm:px-6 md:h-[60vh] lg:flex-row dark:bg-dark-background-dark">
        <div className="flex h-fit max-w-[400px] flex-col justify-between md:h-full">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <div className="flex flex-row items-center gap-3 text-light-accent dark:text-dark-accent">
              <h1 className="text-2xl font-semibold md:text-4xl">
                AcademiaPro
              </h1>
              <FaBookOpen className="text-2xl md:text-4xl" />
            </div>
            <p className="md:text-md text-center text-sm font-medium text-light-color opacity-60 lg:text-left dark:text-dark-color">
              University data, beautifully presented at your fingertips
            </p>
          </div>
          <div className="absolute bottom-8 left-0 flex w-screen items-center justify-center md:static md:w-full md:items-start md:justify-start">
            <Link
              secondary
              className="text-md border-2 border-light-accent bg-light-background-normal py-2 md:border-0 md:bg-light-background-normal md:text-lg dark:border-dark-accent dark:bg-dark-button md:dark:bg-dark-background-normal"
              href="https://better-lab.vercel.app"
              title="Redirect to Better-Lab"
              target="_blank"
            >
              Better-Lab
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Form />
        </div>
      </div>
    </main>
  );
}
