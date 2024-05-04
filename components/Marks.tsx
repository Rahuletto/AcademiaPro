import MarksCard from '@/components/MarksCard';
import type { MarksResponse } from '@/types/Marks';

const MarksTable = ({ data }: { data: MarksResponse | null }) => {
  return (
    <>
      <div className="markGrid">
        {data && data.marks ? (
          data.marks.map((element, index: number) => (
            <MarksCard
              key={index}
              overall={element.overall}
              code={element.courseCode}
              category={element.courseType}
              name={element.courseName}
              marks={element.testPerformance}
            />
          ))
        ) : (
          <h4 style={{ opacity: '0.8', fontSize: '16px', margin: '12px 24px' }}>
            No Marks have been updated. You can catch this.
          </h4>
        )}
      </div>
    </>
  );
};

export default MarksTable;
