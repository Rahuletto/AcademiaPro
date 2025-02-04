import { Link } from 'next-view-transitions'
import Image from 'next/image'
import React from 'react'

export default function Library() {
  return (
    <main
      className="relative p-2 flex items-center justify-center flex-col h-full w-full gap-5"
      style={{
        fontFamily: "'Bricolage Grotesque'",
      }}
    >
      <div className="flex flex-col justify-center mb-6 px-2 gap-5 items-center">
        <div
          id="title"
          className="title transition duration-200 flex flex-col gap-1 dark:text-dark-color items-center justify-start text-light-color"
        >
          <h1 className="font-semibold text-4xl">Library.</h1>

          <p className="dark:text-dark-color text-light-color text-center transition duration-200 opacity-50 text-md font-medium">
            Get access to Semester previous year papers or resources, all from ClassPro.
          </p>
        </div>
      </div>
      <div className='flex gap-4 flex-col items-center justify-center md:flex-row'>
        <Link href="/academia/library/pyq">
          <div className="relative">
            <div className="relative">
              <Image
                src="/library/sem.png"
                className='rounded-3xl border-2 aspect-square object-cover object-left-top border-light-accent dark:border-dark-accent'

                width={400}
                height={500}
                alt="Sem papers"
              />
              <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black to-transparent rounded-b-3xl" />
            </div>
            <div className='absolute bottom-0 left-0 flex flex-col gap-1 p-8'>
              <h1 className="font-semibold text-2xl">Sem PYQs.</h1>
              <p className="dark:text-dark-color text-light-color transition duration-200 opacity-50 text-base font-medium">
                Get your hands on all the semester papers you need.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/academia/library/resources">
          <div className="relative">
            <div className="relative">
              <Image
                src="/library/resources.png"
                className='rounded-3xl aspect-square border-2 object-cover object-left-top border-light-accent dark:border-dark-accent'
                width={400}
                height={500}
                alt="Resource papers"
              />
              <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black to-transparent rounded-b-3xl" />
            </div>
            <div className='absolute bottom-0 left-0 flex flex-col gap-1 p-8'>
              <h1 className="font-semibold text-2xl">Resources.</h1>
              <p className="dark:text-dark-color text-light-color transition duration-200 opacity-50 text-base font-medium">
              A dumpster fire of available files from the web.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  )
}
