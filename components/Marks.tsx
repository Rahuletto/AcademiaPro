import MarksCard from '@/components/cards/MarksCard';
import type { MarksResponse } from '@/types/Marks';

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
        <div className="bg-backgroundLight rounded-[22px] h-[280px] flex items-center justify-center m-[12px_24px]">
          <h4 className="text-center opacity-80 text-[16px]">
            No Marks have been updated. You can catch this.
          </h4>
        </div>
      )}
    </>
  );
};

export default MarksTable;
