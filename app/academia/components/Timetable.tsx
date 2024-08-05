import React, { useEffect, useRef, useState } from "react";
import Error from "@/components/States/Error";
import { useTimetable } from "@/provider/TimetableProvider";
import Loading from "@/components/States/Loading";
import Link from "@/components/Link";
import Container from "./subcomponents/Timetable/Container";
import { FiInfo } from "react-icons/fi";
import InfoPopup from "./subcomponents/Attendance/InfoPopup";

export default function Timetable() {
  const { timetable, isLoading, error, mutate } = useTimetable();
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const infoIconRef = useRef<HTMLDivElement>(null);

  const toggleInfoPopup = () => setShowInfoPopup((e) => !e);

  useEffect(() => {
    if (!isLoading && !timetable) mutate();
  }, [isLoading, mutate, timetable]);

  return (
    <section id="timetable" className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Timetable</h1>
        <Link
          href="/timetable"
          secondary
          className="flex items-center justify-center text-sm text-light-accent dark:text-dark-accent"
        >
          Download
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
              bottom
              text="Generate your full schedule timetable and download it as image."
              onClose={() => setShowInfoPopup(false)}
            />
          )}
        </div>
      </div>
      {timetable ? (
        <Container />
      ) : isLoading ? (
        <Loading />
      ) : (
        error && <Error component="timetable" />
      )}
    </section>
  );
}
