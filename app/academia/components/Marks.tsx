"use client";
import Link from "@/components/Link";
import Refresh from "@/components/Refresh";
import Error from "@/components/States/Error";
import Loading from "@/components/States/Loading";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { FiInfo } from "react-icons/fi";
import NoData from "./subcomponents/NoData";
import { useData } from "@/provider/DataProvider";
import { PiStarFourFill } from "react-icons/pi";
import { BsGraphUp } from "react-icons/bs";
import { FaPercentage } from "react-icons/fa";

const InfoPopup = dynamic(
  () => import("./subcomponents/Attendance/InfoPopup").then((a) => a.default),
  { ssr: false },
);
const Indicator = dynamic(
  () => import("@/components/Indicator").then((a) => a.default),
  { ssr: false },
);
const MarkCard = dynamic(
  () => import("./subcomponents/Marks/MarkCard").then((a) => a.default),
  { ssr: false },
);

export default function Marks() {
  const { marks, isLoading, error, courses, isValidating, mutate } = useData();
  const isOld = false;
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [openFocus, setFocus] = useState(false);
  const [graph, setGraph] = useState(false);
  const infoIconRef = useRef<HTMLDivElement>(null);

  const toggleInfoPopup = () => setShowInfoPopup((e) => !e);

  useEffect(() => {
    if (!isLoading && !error && !marks) {
      mutate();
    }
  }, [isLoading, mutate, marks, error]);

  const focusOn = marks?.filter(
    (a) =>
      Number(a.overall.total) > 4 &&
      Number(a.overall.marks) / Number(a.overall.total) < 0.6,
  );
  return (
    <section id="marks" className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">Marks</h1>
          <Link
            href="/gradex"
            secondary
            className="flex items-center justify-center text-sm after:text-[#D8FFC6] after:absolute after:-right-5 after:-top-3 after:rounded-md after:bg-[#0E100E] after:p-0.5 after:px-1 after:text-xs after:content-['NEW']"
          >
            Predict
          </Link>
          <div className="relative" ref={infoIconRef}>
            <FiInfo
              className="cursor-help opacity-40"
              onClick={toggleInfoPopup}
              onMouseEnter={toggleInfoPopup}
              onMouseLeave={() => setShowInfoPopup(false)}
            />
            {showInfoPopup && (
              <InfoPopup
                warn
                text="Calculate how many marks you want to get to grab a certain grade."
                onClose={() => setShowInfoPopup(false)}
              />
            )}
          </div>
        </div>
        <div className="flex gap-3">
          {focusOn?.[0] && (
            <button
              onClick={() => setFocus((prev) => !prev)}
              className="rounded-xl p-2 dark:border-dark-info-color dark:bg-dark-info-background"
            >
              <PiStarFourFill className="text-xl text-light-info-color dark:text-dark-info-color" />
            </button>
          )}
          <button
            tabIndex={0}
            className={`group rounded-full p-1 text-sm ${isOld ? "bg-light-info-color px-2 text-dark-color dark:bg-dark-info-color dark:text-light-color" : "text-light-color opacity-60 hover:bg-light-background-dark dark:text-dark-color dark:hover:bg-dark-background-dark"}`}
            onClick={() => setGraph((prev) => !prev)}
          >
            {graph ? <FaPercentage /> : <BsGraphUp />}
          </button>

          {!error && <Refresh type={{ mutateMarks: true }} isOld={isOld} />}
        </div>
      </div>

      {isLoading || isValidating ? (
        <Loading size="3xl" />
      ) : error ? (
        <Error component="Marks" error={error} />
      ) : marks ? (
        <>
          {focusOn?.[0] && openFocus && (
            <div className="animate-expandHeight transition-all duration-150">
              <div className="flex h-full flex-col gap-3 rounded-xl border-l-2 border-light-info-color bg-light-info-background bg-opacity-50 p-3 px-5 dark:border-dark-info-color dark:bg-dark-info-background">
                <div
                  className="flex cursor-pointer items-center justify-between"
                  role="button"
                  tabIndex={0}
                  onClick={() => setFocus((prev) => !prev)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setFocus((prev) => !prev);
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <PiStarFourFill className="animate-slowSpin text-xl text-light-info-color dark:text-dark-info-color" />
                    {openFocus && (
                      <h3 className="text-sm font-medium text-light-accent dark:text-dark-accent">
                        Focus on
                      </h3>
                    )}
                  </div>
                </div>
                {openFocus && (
                  <ul className="ml-6 list-disc">
                    {focusOn.map((a, i) => (
                      <li key={i} className="list-disc text-sm opacity-70">
                        <span className="max-w-[60vw]">
                          {!a.courseName.toLowerCase()?.includes("n/a")
                            ? a.courseName
                            : courses
                              ? courses.find((c) => c.code === a.courseCode)
                                  ?.title
                              : a.courseCode}
                        </span>{" "}
                        {" ->  "}
                        <span className="ml-2 text-light-warn-color dark:text-dark-warn-color">
                          {(
                            (Number(a.overall.marks) /
                              Number(a.overall.total)) *
                            100
                          ).toFixed(2)}
                          %
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          <div
            className={`${isValidating ? "border-light-info-color dark:border-dark-info-color" : "border-transparent"} -mx-2 flex flex-col gap-6 rounded-3xl border-4 border-dotted`}
          >
            <div className="grid animate-fadeIn grid-cols-marks gap-2 transition-all duration-200">
              {marks
                ?.filter((a) => a.courseType === "Theory")
                .map((mark, i) => (
                  <MarkCard graph={graph} key={i} mark={mark} />
                ))}
            </div>
            {marks && marks[0] && <Indicator type="Practical" separator />}

            <div className="grid animate-fadeIn grid-cols-marks gap-2 transition-all duration-200">
              {marks
                ?.filter(
                  (a) =>
                    (a.courseType === "Practical" || a.courseType === "Lab") &&
                    (a.courseCode.includes("J")
                      ? Number(a.overall.total) > 0
                      : true),
                )
                .map((mark, i) => (
                  <MarkCard graph={graph} key={i} mark={mark} />
                ))}
            </div>
          </div>
        </>
      ) : (
        <NoData component="Marks" />
      )}
    </section>
  );
}
