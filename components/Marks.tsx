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
        <div
          style={{
            background: 'var(--background-light)',
            borderRadius: '22px',
            height: '280px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '12px 24px',
          }}
        >
          <h4 style={{ textAlign: 'center', opacity: '0.8', fontSize: '16px' }}>
            No Marks have been updated. You can catch this.
          </h4>
        </div>
      )}
    </>
  );
};

export default MarksTable;
