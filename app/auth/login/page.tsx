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
    <main className="w-screen h-screen flex items-center justify-center dark:bg-dark-background-normal bg-light-background-normal">
      <div className="dark:bg-dark-background-dark bg-light-background-dark md:h-[60vh] h-fit w-[95vw] md:w-[80vw] justify-between items-center md:items-start py-12 rounded-[48px] flex lg:flex-row flex-col gap-12 px-12">
        <div className="md:h-full h-fit flex max-w-[400px] flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-5 items-center dark:text-dark-accent justify-center md:justify-start text-light-accent">
              <h1 className="text-2xl font-semibold md:text-4xl">AcademiaPro</h1>
              <FaBookOpen className="text-2xl md:text-4xl" />
            </div>
            <p className="md:text-lg text-center text-sm font-medium text-light-color opacity-60 lg:text-left dark:text-dark-color">
              University data, beautifully presented at your fingertips
            </p>
          </div>
          <div className="flex lg:items-start lg:justify-start lg:w-full w-screen left-0 lg:static items-center justify-center absolute bottom-12">
            <Link
              secondary
              className="lg:border-0 lg:dark:bg-dark-background-normal lg:bg-light-background-normal dark:bg-dark-button bg-light-background-normal border-2 dark:border-dark-background-darker border-light-background-darker py-2 text-lg"
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