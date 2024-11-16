import React from "react";
import { medalStyles } from "./GradeCard";

type MedalProps = {
  grade: "O" | "A+" | "A" | "B+" | "B" | "C";
};

const Medal: React.FC<MedalProps> = ({ grade }) => {
  const { text } = medalStyles[grade];

  return (
    <div className="group absolute bottom-2 right-2 flex flex-col items-center justify-center">
        <h3 className={`text-3xl font-bold ${text}`}>{grade}</h3>
        <span className={`font-medium text-base ${text}`}>Grade</span>
    </div>
  );
};

export default Medal;
