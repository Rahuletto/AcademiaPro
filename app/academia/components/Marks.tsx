import Link from "@/components/Link";
import Refresh from "@/components/Refresh";
import Error from "@/components/States/Error";
import Loading from "@/components/States/Loading";
import { useMarks } from "@/provider/MarksProvider";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { FiInfo } from "react-icons/fi";
import { IoRefreshOutline } from "react-icons/io5";
import NoData from "./subcomponents/NoData";

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
  const { marks, isLoading, error } = useMarks();
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const infoIconRef = useRef<HTMLDivElement>(null);

  const toggleInfoPopup = () => setShowInfoPopup((e) => !e);

  return (
    <section id="marks" className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
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
        <Refresh type={{ mutateMarks: true }} />
      </div>
      {isLoading ? (
        <Loading size="3xl" />
      ) : error ? (
        <Error component="Marks" />
      ) : marks ? (
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
      ) : (
        <NoData component="Marks" />
      )}
    </section>
  );
}
