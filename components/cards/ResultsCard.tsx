import styles from "@/styles/Card.module.css";
import { truncateString } from "../../utils/truncate";
import { ExamMarks } from "@/types/Results";

interface Props {
  data: ExamMarks;
}

const ResultsCard = ({ data }: Props) => {
  return (
    <>
      <tr
        className={`card attCard`}
        title={`Semester ${data.semester} - ${data.courseTitle}`}
      >
        <td className="h-20">
          <div className="flex h-full w-full items-start justify-start gap-2 p-2">
            <h4 title={`Semester ${data.semester}`}>
              {truncateString(data.courseTitle)}
            </h4>
          </div>
        </td>
        <td>
          <p className="margin">
            <span>{data.courseCode}</span>
          </p>
        </td>

        <td>
          <div className="flex items-center gap-3 pl-1.5">
            <span className="text-sm opacity-40">Credit:</span>{" "}
            <span
              className={`total ${
                !data.credit || data.credit === "" || Number(data.credit) === 0
                  ? "bg-red-500 opacity-50"
                  : ""
              }`}
            >
              {data.credit || 0}
            </span>
          </div>
        </td>
        <td>
          <h3
            className={`text-2xl ${data.result === "PASS" ? "text-green" : "text-red"}`}
          >
            {data.grade} <span className="gradeMark">grade</span>
          </h3>
        </td>
      </tr>
    </>
  );
};

export default ResultsCard;
