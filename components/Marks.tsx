import MarksCard from '@/components/MarksCard';
import type { MarksResponse } from '@/types/Marks';

const MarksTable = ({ data }: { data: MarksResponse | null }) => {
  return (
    <>
      <div className="markGrid">
        {data && data.marks ? (
          data.marks.map((element, index: any) => (
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
          <h4 style={{ opacity: '0.6', fontSize: '16px' }}>
            No Marks have been updated. You can catch this.
          </h4>
        )}
      </div>
    </>
  );
};

export default MarksTable;
