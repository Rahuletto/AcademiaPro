import Link from "@/components/Link";
import { useMarks } from "@/provider/MarksProvider";
import React, { useEffect, useRef, useState } from "react";
import MarkCard from "./subcomponents/Marks/MarkCard";
import Indicator from "@/components/Indicator";
import Loading from "@/components/States/Loading";
import Error from "@/components/States/Error";
import { FiInfo } from "react-icons/fi";
import InfoPopup from "./subcomponents/Attendance/InfoPopup";

export default function Marks() {
  const { marks, isLoading, error, mutate } = useMarks();
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const infoIconRef = useRef<HTMLDivElement>(null);

  const toggleInfoPopup = () => setShowInfoPopup((e) => !e);

  useEffect(() => {
    if (!isLoading && !marks && !error) mutate();
  }, [isLoading, mutate, marks, error]);

  return (
    <section id="marks" className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Marks</h1>
        <Link
          href="https://gradex.vercel.app"
          target="_blank"
          secondary
          className="flex items-center justify-center text-sm text-light-accent dark:text-dark-accent"
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
      {isLoading ? (
        <Loading size="3xl" />
      ) : error ? (
        <Error component="Marks" />
      ) : (
        <>
          <div className="grid animate-fadeIn grid-cols-marks gap-2 transition-all duration-200">
            {marks
              ?.filter((a) => a.courseType === "Theory")
              .map((mark, i) => <MarkCard key={i} mark={mark} />)}
          </div>
          {marks && marks[0] && <Indicator type="Practical" separator />}

          <div className="grid animate-fadeIn grid-cols-marks gap-2 transition-all duration-200">
            {marks
              ?.filter(
                (a) => a.courseType === "Practical" || a.courseType === "Lab",
              )
              .map((mark, i) => <MarkCard key={i} mark={mark} />)}
          </div>
        </>
      )}
    </section>
  );
}
