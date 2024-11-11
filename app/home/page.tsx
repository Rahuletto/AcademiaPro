import Link from "@/components/Link";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { FaBookOpen } from "react-icons/fa";

const Bento = dynamic(() => import("../components/Bento").then(a => a.default), {
  
});

export default async function Academia() {
  const cookie = (await cookies()).get("key");
  return (
    <main className="flex flex-col items-center justify-start gap-4 bg-light-background-normal p-4 dark:bg-dark-background-normal">
      <div className="flex h-full w-full animate-fadeIn flex-col items-center justify-start gap-2 rounded-3xl bg-light-background-dark px-6 py-12 transition-all duration-300 md:px-12 lg:flex-row lg:gap-6 lg:py-6 dark:bg-dark-background-dark">
        <FaBookOpen className="text-6xl text-light-accent lg:text-4xl dark:text-dark-accent" />
        <h1 className="text-2xl font-semibold text-light-color lg:text-xl dark:text-dark-color">
          ClassPro.
        </h1>
        <p className="text-md text-center font-medium text-light-color opacity-70 lg:hidden lg:text-lg dark:text-dark-color">
          University data, beautifully presented at your fingertips
        </p>
        { cookie ? 
          <Link
          href="/auth/login"
          className="flex items-center justify-center px-3 py-1 text-md hover:px-7 text-lg hover:bg-transparent hover:dark:border-dark-accent hover:border-light-accent border-2 border-transparent dark:bg-dark-accent bg-light-accent text-dark-color hover:text-light-accent hover:dark:text-dark-accent dark:text-light-color font-semibold rounded-xl transition-all duration-300 transform w-52"
        >
          Dashboard
        </Link>
        :
        <Link
          href="/academia"
          className="flex items-center justify-center px-2 py-1 text-md hover:px-7 text-lg hover:bg-transparent hover:dark:border-dark-accent hover:border-light-accent border-2 border-transparent dark:bg-dark-accent bg-light-accent text-dark-color hover:text-light-accent hover:dark:text-dark-accent dark:text-light-color font-semibold rounded-xl transition-all duration-300 transform w-auto"
        >
          Login
        </Link>
        }
      </div>

      <div className="h-auto w-full animate-fadeIn flex-col items-center justify-center gap-6 rounded-3xl bg-light-background-dark px-8 py-6 transition-all duration-300 md:px-12 md:py-12 dark:bg-dark-background-dark">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <h1 className="text-3xl font-semibold text-light-color dark:text-dark-color">
            Features
          </h1>
          <Bento />
        </div>
      </div>
      <div className="h-auto w-full animate-fadeIn flex-col gap-6 rounded-3xl bg-light-warn-background px-6 py-4 md:px-12 md:py-6 dark:bg-dark-warn-background">
        <h3 className="text-light-warn-color dark:text-dark-warn-color">
          We scrape the information from SRM Academia, This website acts as a
          wrapper and does not store any information whatsoever!
        </h3>
      </div>
    </main>
  );
}
