"use client";
import React from "react";
import Form from "./components/Form";
import { FaBookOpen } from "react-icons/fa";
import Link from "@/components/Link";

export default function Login() {
  return (
    <main className="w-screen h-screen flex items-center justify-center dark:bg-dark-background-normal bg-light-background-normal">
      <div className="dark:bg-dark-background-dark bg-light-background-dark md:h-[60vh] h-fit w-[80vw] justify-between items-start py-12 rounded-[48px] flex lg:flex-row flex-col gap-12 px-12">
        <div className="md:h-full h-fit flex max-w-[400px] flex-col justify-between pb-2">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-5 items-center dark:text-dark-accent text-light-accent">
              <h1 className="text-4xl font-semibold">Academia</h1>
              <FaBookOpen className="text-4xl" />
            </div>
            <p className="text-md dark:text-dark-color text-light-color font-medium opacity-60 text-left">
              University data, beautifully presented at your fingertips
            </p>
          </div>
          <div className="flex md:items-start md:justify-start md:w-full w-screen left-0 md:static items-center justify-center absolute bottom-12">
            <Link
              secondary
              className="md:border-0 border-2 dark:border-dark-accent border-light-accent"
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
