'use client';
import { Sidebar } from "@/components/Sidebar";
import React from "react";

export default function Calendar() {
  return (
    <main className="h-screen w-full bg-light-background-normal text-light-color dark:bg-dark-background-normal dark:text-dark-color">
      <Sidebar>
        <div className="flex flex-col gap-12">
          <section id="calendar" className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold">Calendar</h1>
          </section>
        </div>
      </Sidebar>
    </main>
  );
}
