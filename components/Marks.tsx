import MarksCard from "@/components/cards/MarksCard";
import type { MarksResponse } from "@/types/Marks";

const MarksTable = ({ data }: { data: MarksResponse | null }) => {
  return (
    <>
      {data && data.marks[0] ? (
        <div className="markGrid">
          {data.marks.map((element, index: number) => (
            <MarksCard
              key={index}
              overall={element.overall}
              code={element.courseCode}
              category={element.courseType}
              name={element.courseName}
              marks={element.testPerformance}
            />
          ))}
        </div>
      ) : (
        <div className="m-[12px_24px] flex h-[280px] items-center justify-center rounded-[22px] bg-backgroundLight">
          <h4 className="text-center text-[16px] opacity-80">
            No Marks have been updated. You can catch this.
          </h4>
        </div>
      )}
    </>
  );
};

export default MarksTable;
