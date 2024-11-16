import React, { useEffect } from "react";
import { medalStyles } from "./GradeCard";

type MedalProps = {
  grade: "O" | "A+" | "A" | "B+" | "B" | "C";
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const Medal: React.FC<MedalProps> = ({ grade, edit, setEdit }) => {
  const { text, bg, border } = medalStyles[grade];

  return (
    <button
      tabIndex={0}
      onClick={() => setEdit((prev) => !prev)}
      className={`group flex w-full gap-3 ${bg} ${edit ? "py-1" : "py-5"} rounded-xl ${border} items-center justify-center`}
    >
      <h3 className={`text-3xl font-bold ${text}`}>{grade}</h3>
      <span className={`text-base font-medium ${text}`}>Grade</span>
    </button>
  );
};

export default Medal;
