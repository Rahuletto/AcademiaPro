import React, { useEffect, useState } from "react";
import { PiConfettiBold } from "react-icons/pi";
import Button from "./Button";

export default function Poster() {
  const [hide, setHide] = useState(true);
  useEffect(() => {
    const isPoster = localStorage.getItem("poster");
    if (!isPoster) return setHide(false);
  }, []);
  return (
    !hide && (
      <div
        style={{ WebkitBackdropFilter: "blur(10px)" }}
        className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.1)] backdrop-blur-md dark:bg-[rgba(0,0,0,0.5)] dark:backdrop-blur-md"
      >
        <div className="flex h-[89%] w-[90%] flex-col rounded-3xl bg-light-background-normal px-12 py-12 lg:w-[800px] dark:bg-dark-background-normal">
          <div className="mb-6 flex flex-col gap-2">
            <h1 className="mb-6 font-mono text-5xl font-semibold text-light-warn-color md:text-7xl dark:text-dark-warn-color">
              <PiConfettiBold />
            </h1>
            <h3 className="text-xl font-medium opacity-90 md:text-2xl">
              AcademiaPro has evolved to{" "}
              <span className="text-light-success-color dark:text-dark-success-color">
                Version 2
              </span>
              !
            </h3>
            <p className="text-md font-normal opacity-70">
              We re-did AcademiaPro with many features and using new
              technologies.
            </p>
          </div>
          <div className="mt-6 h-[95%] overflow-y-auto py-3 md:rounded-xl md:p-2">
            <h1 className="mb-6 text-xl font-semibold text-light-info-color underline decoration-light-info-color decoration-2 dark:text-dark-info-color dark:decoration-dark-info-color">
              New Features:
            </h1>
            <ul className="mb-12 space-y-1">
              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  Light Mode
                </code>
                <p className="pl-2 opacity-60">
                  Our most requested feature, We promise not to judge you.
                </p>
              </li>
              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  Rich Animations and Key Bindings
                </code>
                <p className="pl-2 opacity-60">
                  Experience fluid animations and intuitive key bindings
                  designed to enhance usability.
                </p>
              </li>
              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  Attendance Prediction
                </code>
                <p className="pl-2 opacity-60">
                  Predict your attendance percentage and margin by giving the
                  dates you won&apos;t show up.
                </p>
              </li>
              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  Faculty URLs
                </code>
                <p className="pl-2 opacity-60">
                  Course list now has Faculty URLs which you can open and see
                  which faculty is going to do lectures.
                </p>
              </li>
              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  Legends Everywhere
                </code>
                <p className="pl-2 opacity-60">
                  Now things have legends so it&apos;s pretty much obvious which
                  is what.
                </p>
              </li>
              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  User-friendly Calendar
                </code>
                <p className="pl-2 opacity-60">
                  Now the calendar is just like your native Calendar app, with
                  the details you wanted the most.
                </p>
              </li>
              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  Swipeable Sidebar
                </code>
                <p className="pl-2 opacity-60">
                  We noticed people were trying to get the sidebar by swiping in
                  natural motion, so we implemented so you can swipe down the
                  sidebar.
                </p>
              </li>
            </ul>

            <h1 className="mb-6 text-xl font-semibold text-light-info-color underline decoration-light-info-color decoration-2 dark:text-dark-info-color dark:decoration-dark-info-color">
              Tweaks:
            </h1>
            <ul className="space-y-4">
              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  Full Accessibility Support
                </code>
                <p className="pl-2 opacity-60">
                  We are committed to inclusivity, fully supporting a11y
                  guidelines to ensure accessibility for all users. Even
                  color-blind friendly!
                </p>
              </li>
              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  Enhanced Performance & Protection
                </code>
                <p className="pl-2 opacity-60">
                  Our new caching mechanism makes sure you get up-to-date data
                  with encryption! Open your localStorage and see it yourself.
                </p>
              </li>
              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  Lightning-Fast Load Speeds
                </code>
                <p className="pl-2 opacity-60">
                  Enjoy faster access to your data with our comprehensive
                  optimizations.
                </p>
              </li>
              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  Better User Experience
                </code>
                <p className="pl-2 opacity-60">
                  Separated theory and practical sessions in attendance, marks,
                  and course list.
                </p>
              </li>
              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  Improved Error Handling
                </code>
                <p className="pl-2 opacity-60">
                  Better error management ensures a seamless experience,
                  minimizing disruptions.
                </p>
              </li>

              <li className="rounded-md px-1 pb-2 shadow">
                <code className="text-md rounded-md bg-light-background-light px-2 py-1 font-mono font-semibold dark:bg-dark-background-light">
                  Faster Search
                </code>
                <p className="pl-2 opacity-60">
                  Search for your URLs faster and easier than ever!
                </p>
              </li>
            </ul>
          </div>
          <Button
            onClick={() => {
              localStorage.setItem("poster", "true");
              setHide(true);
            }}
            className="mt-5 w-full"
          >
            Understood!
          </Button>
        </div>
      </div>
    )
  );
}
