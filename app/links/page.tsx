"use client";
import React, { useState } from "react";
import { Link } from "next-view-transitions";
import useSearch from "@/hooks/useSearch";
import { Sidebar } from "@/components/Sidebar";

import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import("./components/SearchBar").then(a => a.SearchBar), { ssr: false });
const UrlSection = dynamic(() => import("./components/URLSection").then(a => a.UrlSection), { ssr: false });


export default function Urls() {
  const [searchQuery, setSearchQuery] = useState("");

  const { priority, officials, others } = useSearch({ searchQuery });

  return (
    <main className="h-screen w-full bg-light-background-normal pb-0 text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <div className="flex flex-col gap-12">
          <section id="links" className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold">Resources</h1>
            <div className="mb-3 flex w-fit flex-col rounded-2xl border-2 border-light-info-color bg-light-info-background px-6 py-3 font-mono dark:border-dark-info-color dark:bg-dark-info-background">
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

            <div className="ml-2 flex flex-col gap-20 md:ml-10">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <UrlSection special title="From AcademiaPro" urls={priority} />
              <UrlSection title="Official URLs" urls={officials} />
              <UrlSection title="Other URLs" urls={others} />
            </div>
          </section>
        </div>
      </Sidebar>
    </main>
  );
}
