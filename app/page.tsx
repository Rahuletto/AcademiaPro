import Link from "@/components/Link";
import { FaBookOpen } from "react-icons/fa";
import dynamic from "next/dynamic";

const Bento = dynamic(() => import("./components/Bento").then(a => a.default), { ssr: false });

export default function Academia() {
  return (
    <main className="flex gap-4 flex-col dark:bg-dark-background-normal bg-light-background-normal items-center justify-start p-4">
      <div className="flex lg:flex-row flex-col dark:bg-dark-background-dark lg:gap-6 gap-2 h-full w-full bg-light-background-dark items-center justify-start md:px-12 px-6 lg:py-6 py-12 rounded-3xl animate-fadeIn duration-300 transition-all">
        <FaBookOpen className="lg:text-4xl text-6xl dark:text-dark-accent text-light-accent" />
        <h1 className="lg:text-xl text-2xl dark:text-dark-color text-light-color font-semibold">
          AcademiaPro.
        </h1>
        <p className="lg:hidden lg:text-lg text-md dark:text-dark-color text-light-color font-medium opacity-70 text-center">
          University data, beautifully presented at your fingertips
        </p>
        <Link
          href="/auth/login"
          className="flex items-center justify-center px-3 py-1 text-md hover:px-7 text-lg hover:bg-transparent hover:dark:border-dark-accent hover:border-light-accent border-2 border-transparent dark:bg-dark-accent bg-light-accent text-dark-color hover:text-light-accent hover:dark:text-dark-accent dark:text-light-color font-semibold rounded-xl transition-all duration-300 transform w-auto"
        >
          Login
        </Link>
      </div>

      <div className="duration-300 transition-all items-center justify-center animate-fadeIn dark:bg-dark-background-dark flex-col gap-6 h-auto w-full bg-light-background-dark md:py-12 md:px-12 py-6 px-8 rounded-3xl">
        <div className="mx-auto max-w-7xl flex flex-col gap-8">
          <h1 className="text-3xl text-light-color dark:text-dark-color font-semibold">
            Features
          </h1>
          <Bento />
        </div>
      </div>
      <div className="animate-fadeIn dark:bg-dark-warn-background flex-col gap-6 h-auto w-full bg-light-warn-background md:py-6 md:px-12 py-4 px-6 rounded-3xl">
        <h3 className="dark:text-dark-warn-color text-light-warn-color">
          We scrape the information from SRM Academia, This website acts as a
          wrapper and does not store any information whatsoever!
        </h3>
      </div>
    </main>
  );
}
