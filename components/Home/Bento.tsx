import React from "react";
import Image from "next/image";

export default function Bento() {
  return (
    <div className="z-10 w-full lg:grid flex flex-col lg:auto-rows-[18rem] lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
      <div className="w-full row-span-2 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-dark-background-light bg-light-background-light justify-between flex flex-col space-y-2">
        <div className="px-2 transition duration-200">
          <div className="font-sans lg:text-2xl text-xl font-bold dark:text-dark-color text-light-color mb-2 mt-2">
            Generate Timetable
          </div>
          <div className="font-sans lg:text-lg text-md font-normal opacity-60 dark:text-dark-color text-light-color">
            Generates a full timetable image for your class schedule.
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

      <div className="hover:border-accent border border-transparent row-span-1 col-span-2 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-dark-background-light bg-light-background-light justify-between flex lg:flex-row flex-col lg:space-x-4 space-y-2">
        <div className="px-2 transition duration-200">
          <div className="font-sans lg:text-2xl text-xl font-bold dark:text-dark-color text-light-color mb-2 mt-2">
            Just drop em&apos;
          </div>
          <div className="font-sans lg:text-lg text-md font-normal opacity-60 dark:text-dark-color text-light-color">
            I can handle different formats of lectures and can understand from
            it. Yet I curate it to simpler notes as always.
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

      <div className="hover:border-accent border border-transparent row-span-2 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-dark-background-light bg-light-background-light justify-between flex flex-col space-y-2">
        <div className="px-2 transition duration-200">
          <div className="font-sans lg:text-2xl text-xl font-bold dark:text-dark-color text-light-color mb-2 mt-2">
            Transcribed lectures
          </div>
          <div className="font-sans lg:text-lg text-md font-normal opacity-60 dark:text-dark-color text-light-color">
            I can transcribe your lectures so you can find that exact term
            you&apos;re looking for.
          </div>
        </div>
        <Image
          className="saturate-150 aspect-square rounded-2xl object-cover object-left-top"
          src="/images/audio.png"
          alt="audio"
          height={1000}
          width={1000}
        />
      </div>

      <div className="hover:border-accent border border-transparent row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-dark-background-light bg-light-background-light justify-between flex flex-col space-y-2">
        <div className="px-2 transition duration-200">
          <div className="font-sans lg:text-2xl text-xl font-bold dark:text-dark-color text-light-color mb-2">
            Test your knowledge
          </div>
        </div>
        <Image
          className="saturate-150 rounded-2xl object-cover object-left-top"
          src="/images/flash.png"
          alt="flash"
          height={500}
          width={500}
        />
      </div>

      <div className="hover:border-accent border border-transparent row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-dark-background-light bg-light-background-light justify-between flex flex-col space-y-2">
        <div className="px-2 transition duration-200">
          <div className="font-sans lg:text-2xl text-xl font-bold dark:text-dark-color text-light-color mb-2 mt-2">
            Very legal
          </div>
          <div className="font-sans lg:text-lg text-md font-normal opacity-60 dark:text-dark-color text-light-color">
            I won&apos;t give you out answers, instead provide you with valuable
            materials to prepare for your battles. So yes, we comply with all
            University guidelines and honor code.
          </div>
        </div>
      </div>

      <div className="hover:border-accent border border-transparent row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-dark-background-light bg-light-background-light justify-between flex flex-col space-y-2">
        <div className="px-2 transition duration-200">
          <div className="font-sans lg:text-2xl text-xl font-bold dark:text-dark-color text-light-color mb-2 mt-2">
            Last line of defence
          </div>
          <div className="font-sans lg:text-lg text-md font-normal opacity-60 dark:text-dark-color text-light-color">
            If you cannot understand my summary, Wait for my last trick, I will
            always mention a crippled down version of the summary.
          </div>
        </div>
      </div>
    </div>
  );
}
