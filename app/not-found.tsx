"use client";

import { Sidebar } from "@/components/Sidebar";
import { Link } from "next-view-transitions";
import { FaQuestion } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar error>
        <div className="h-full w-full rounded-2xl bg-dark-background-dark p-2">
          <div className="flex h-full animate-fadeIn flex-col items-center justify-center gap-2 rounded-xl bg-light-warn-background p-8 text-light-warn-color dark:bg-dark-warn-background dark:text-dark-warn-color">
            <FaQuestion className="mb-3 text-4xl" />
            <h1 className="text-2xl font-medium text-light-warn-color dark:text-dark-warn-color">
              404.
            </h1>

            <p className="text-md text-light-warn-color opacity-90 dark:text-dark-warn-color max-w-[500px] text-center">
              <code>We don&apos;t know what you were looking for, but it never existed.</code>
            </p>
            <Link
              href="/"
              className="mt-8 rounded-full border-2 border-light-warn-color px-5 py-1 text-light-warn-color dark:border-dark-warn-color dark:text-dark-warn-color"
            >
              Go back.
            </Link>
          </div>
        </div>
      </Sidebar>
    </main>
  );
}
