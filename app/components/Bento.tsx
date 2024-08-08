import React from "react";
import Image from "next/image";

export default function Bento() {
  return (
    <div className="z-10 w-full lg:grid flex flex-col lg:auto-rows-[18rem] lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
      <div className="hover:dark:border-dark-accent hover:border-light-accent border border-transparent w-full row-span-2 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-dark-background-normal bg-light-background-normal justify-between flex flex-col space-y-2">
        <div className="px-2 transition duration-200">
          <div className="font-sans lg:text-2xl text-xl font-bold dark:text-dark-color text-light-color mb-2 mt-2">
            Generate Timetable
          </div>
          <div className="font-sans lg:text-lg text-md font-normal opacity-60 dark:text-dark-color text-light-color">
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

      <div className="hover:dark:border-dark-accent hover:border-light-accent border border-transparent row-span-1 col-span-2 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-dark-background-normal bg-light-background-normal justify-between flex lg:flex-row flex-col lg:space-x-4 space-y-2">
        <div className="px-2 transition duration-200">
          <div className="font-sans lg:text-2xl text-xl font-bold dark:text-dark-color text-light-color mb-2 mt-2">
            Data at your fingertips
          </div>
          <div className="font-sans lg:text-lg text-md font-normal opacity-60 dark:text-dark-color text-light-color">
            Look at today&apos;s day order, the hours of class you have that
            day, and any academia data in your fingertips.
          </div>
        </div>
        <Image
          className="saturate-150 aspect-square rounded-2xl lg:max-w-[40%] object-cover mt-0 object-left-top"
          src="/images/academia.png"
          alt="academia"
          height={500}
          width={500}
        />
      </div>

      <div className="hover:dark:border-dark-accent hover:border-light-accent border border-transparent row-span-2 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-dark-background-normal bg-light-background-normal justify-between flex flex-col space-y-2">
        <div className="px-2 transition duration-200">
          <div className="font-sans lg:text-2xl text-xl font-bold dark:text-dark-color text-light-color mb-2 mt-2">
            Plan your comeback.
          </div>
          <div className="font-sans lg:text-lg text-md font-normal opacity-60 dark:text-dark-color text-light-color">
            Look out and plan your academics with up-to-date planner{" "}
            {"(calendar)"}, with many indications to make you focus
          </div>
        </div>
        <Image
          className="saturate-150 aspect-square rounded-2xl object-cover object-left-top"
          src="/images/calendar.png"
          alt="calendar"
          height={1000}
          width={1000}
        />
      </div>

      <div className="hover:dark:border-dark-accent hover:border-light-accent border border-transparent row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-dark-background-normal bg-light-background-normal justify-between flex flex-col space-y-2">
        <div className="px-2 transition duration-200">
          <div className="font-sans lg:text-2xl text-xl font-bold dark:text-dark-color text-light-color mb-2">
            Up-to-date attendance.
          </div>
        </div>
        <Image
          className="saturate-150 rounded-2xl object-cover object-left-top"
          src="/images/attendance.png"
          alt="attendance"
          height={300}
          width={500}
        />
      </div>

      <div className="hover:dark:border-dark-accent hover:border-light-accent border border-transparent row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-dark-background-normal bg-light-background-normal justify-between flex flex-col space-y-2">
        <div className="px-2 transition duration-200">
          <div className="font-sans lg:text-2xl text-xl font-bold dark:text-dark-color text-light-color mb-2 mt-2">
            Useful Resources
          </div>
          <div className="font-sans lg:text-lg text-md font-normal opacity-60 dark:text-dark-color text-light-color">
            AcademiaPro comes with useful resource links so you can get any SRM
            related thing in milliseconds, Powered by lazy searching.
          </div>
        </div>
      </div>

      <div className="hover:dark:border-dark-accent hover:border-light-accent border border-transparent row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-dark-background-normal bg-light-background-normal justify-between flex flex-col space-y-2">
        <div className="px-2 transition duration-200">
          <div className="font-sans lg:text-2xl text-xl font-bold dark:text-dark-color text-light-color mb-2 mt-2">
            ⚡ Zip-Zap Performance
          </div>
          <div className="font-sans lg:text-lg text-md font-normal opacity-60 dark:text-dark-color text-light-color">
            We use top of-the-line edge networks to provide you the data in the
            fastest way to you, even faster than SRM academia.
          </div>
        </div>
      </div>
    </div>
  );
}
