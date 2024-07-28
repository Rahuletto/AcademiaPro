import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Link } from "next-view-transitions";
import { priorityUrl, urls } from "./links";
import LinkList from "./LinkList";

export default function Urls() {
  return (
    <main className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <div className="flex flex-col gap-12">
          <section id="links" className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold">Resources</h1>
            <div className="mb-3 flex w-full flex-col rounded-2xl border-2 border-light-info-color bg-light-info-background px-6 py-3 font-mono dark:border-dark-info-color dark:bg-dark-info-background">
              <p className="text-sm opacity-80">
                You can add your own links here just by doing a{" "}
                <Link
                  className="underline decoration-dark-info-color decoration-solid"
                  href="https://github.com/Rahuletto/academiapro"
                  target="_blank"
                >
                  Github Pull Request
                </Link>
              </p>
            </div>

            <div className="ml-10 flex flex-col gap-20">
              <div id="academiapro">
                <h3 className="text-2xl font-semibold">From AcademiaPro</h3>
                <div className="ml-6 mt-4 flex flex-col gap-3 text-light-info-color dark:text-dark-info-color">
                  {priorityUrl.map((url, i) => (
                    <LinkList url={url} key={i} />
                  ))}
                </div>
              </div>

              <div id="academiapro">
                <h3 className="text-2xl font-semibold">Official URLs</h3>
                <div className="ml-6 mt-4 flex flex-col gap-3">
                  {urls.map((url, i) => (
                    <LinkList url={url} key={i} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Sidebar>
    </main>
  );
}
