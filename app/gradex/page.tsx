"use client";
import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";

export default function Urls() {
  return (
    <main className="h-screen w-full bg-light-background-normal pb-0 text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <div className="flex flex-col gap-12">
          <section id="links" className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold">GradeX</h1>

            <div className="ml-2 flex flex-col gap-20 md:ml-10"></div>
          </section>
        </div>
      </Sidebar>
    </main>
  );
}
