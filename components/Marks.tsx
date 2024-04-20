import MarksCard from "@/components/MarksCard";
import type { Marks, MarksResponse } from "@/types/Marks";

const MarksTable = ({ data }: { data: MarksResponse | null }) => {
  if(!data) return <></>;

  return (
    <>
      <div
        className="markGrid"
        style={{
          borderRadius: 34,
          background: "var(--background)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(16rem, 1fr))",
          gridTemplateRows: "min-content",
          marginBottom: 32,
        }}
      >
        {data && data.marks ? (
          data.marks.map((element, index: any) => (
            <MarksCard
              key={index}
              code={element.courseCode}
              category={element.courseType}
              name={element.courseName}
              marks={element.testPerformance}
            />
          ))
        ) : (
          <h4 style={{ opacity: "0.6", fontSize: "16px" }}>
            No Marks have been updated. You can do this.
          </h4>
        )}
      </div>
    </>
  );
};

export default MarksTable;
