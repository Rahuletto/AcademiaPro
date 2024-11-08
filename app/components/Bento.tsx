import React from "react";
import Image from "next/image";

export default function Bento() {
  return (
    <div className="z-10 mx-auto flex w-full max-w-7xl flex-col gap-4 lg:grid lg:auto-rows-[18rem] lg:grid-cols-3">
      <div className="group/bento shadow-input row-span-2 flex w-full flex-col justify-between space-y-2 rounded-3xl border border-transparent bg-light-background-normal p-4 transition duration-200 hover:border-light-accent hover:shadow-xl dark:bg-dark-background-normal dark:shadow-none hover:dark:border-dark-accent">
        <div className="px-2 transition duration-200">
          <div className="mb-2 mt-2 font-sans text-xl font-bold text-light-color lg:text-2xl dark:text-dark-color">
            Generate Timetable
          </div>
          <div className="text-md font-sans font-normal text-light-color opacity-60 lg:text-lg dark:text-dark-color">
            Generates a full timetable image based on your class schedule.
          </div>
        </div>
        <Image
          className="saturate-110 aspect-square rounded-2xl object-cover object-left-top"
          src="/images/timetable.png"
          alt="timetable"
          height={500}
          width={500}
        />
      </div>

      <div className="group/bento shadow-input col-span-2 row-span-1 flex flex-col justify-between space-y-2 rounded-3xl border border-transparent bg-light-background-normal p-4 transition duration-200 hover:border-light-accent hover:shadow-xl lg:flex-row lg:space-x-4 dark:bg-dark-background-normal dark:shadow-none hover:dark:border-dark-accent">
        <div className="px-2 transition duration-200">
          <div className="mb-2 mt-2 font-sans text-xl font-bold text-light-color lg:text-2xl dark:text-dark-color">
            Data at your fingertips
          </div>
          <div className="text-md font-sans font-normal text-light-color opacity-60 lg:text-lg dark:text-dark-color">
            Look at today&apos;s day order, the hours of class you have that
            day, and any academia data in your fingertips.
          </div>
        </div>
        <Image
          className="mt-0 aspect-square rounded-2xl object-cover object-left-top saturate-150 lg:max-w-[40%]"
          src="/images/academia.png"
          alt="academia"
          height={500}
          width={500}
        />
      </div>

      <div className="group/bento shadow-input row-span-2 flex flex-col justify-between space-y-2 rounded-3xl border border-transparent bg-light-background-normal p-4 transition duration-200 hover:border-light-accent hover:shadow-xl dark:bg-dark-background-normal dark:shadow-none hover:dark:border-dark-accent">
        <div className="px-2 transition duration-200">
          <div className="mb-2 mt-2 font-sans text-xl font-bold text-light-color lg:text-2xl dark:text-dark-color">
            Plan your comeback.
          </div>
          <div className="text-md font-sans font-normal text-light-color opacity-60 lg:text-lg dark:text-dark-color">
            Look out and plan your academics with up-to-date planner{" "}
            {"(calendar)"}, with many indications to make you focus
          </div>
        </div>
        <Image
          className="aspect-square rounded-2xl object-cover object-left-top saturate-150"
          src="/images/calendar.png"
          alt="calendar"
          height={1000}
          width={1000}
        />
      </div>

      <div className="group/bento shadow-input row-span-1 flex flex-col justify-between space-y-2 rounded-3xl border border-transparent bg-light-background-normal p-4 transition duration-200 hover:border-light-accent hover:shadow-xl dark:bg-dark-background-normal dark:shadow-none hover:dark:border-dark-accent">
        <div className="px-2 transition duration-200">
          <div className="mb-2 font-sans text-xl font-bold text-light-color lg:text-2xl dark:text-dark-color">
            Up-to-date attendance.
          </div>
        </div>
        <Image
          className="rounded-2xl object-cover object-left-top saturate-150"
          src="/images/attendance.png"
          alt="attendance"
          height={300}
          width={500}
        />
      </div>

      <div className="group/bento shadow-input row-span-1 flex flex-col justify-between space-y-2 rounded-3xl border border-transparent bg-light-background-normal p-4 transition duration-200 hover:border-light-accent hover:shadow-xl dark:bg-dark-background-normal dark:shadow-none hover:dark:border-dark-accent">
        <div className="px-2 transition duration-200">
          <div className="mb-2 mt-2 font-sans text-xl font-bold text-light-color lg:text-2xl dark:text-dark-color">
            Useful Resources
          </div>
          <div className="text-md font-sans font-normal text-light-color opacity-60 lg:text-lg dark:text-dark-color">
            ClassPro comes with useful resource links so you can get any SRM
            related thing in milliseconds, Powered by lazy searching.
          </div>
        </div>
      </div>

      <div className="group/bento shadow-input row-span-1 flex flex-col justify-between space-y-2 rounded-3xl border border-transparent bg-light-background-normal p-4 transition duration-200 hover:border-light-accent hover:shadow-xl dark:bg-dark-background-normal dark:shadow-none hover:dark:border-dark-accent">
        <div className="px-2 transition duration-200">
          <div className="mb-2 mt-2 font-sans text-xl font-bold text-light-color lg:text-2xl dark:text-dark-color">
            ⚡ Zip-Zap Performance
          </div>
          <div className="text-md font-sans font-normal text-light-color opacity-60 lg:text-lg dark:text-dark-color">
            We use top of-the-line edge networks to provide you the data in the
            fastest way to you, even faster than SRM academia.
          </div>
        </div>
      </div>
    </div>
  );
}
