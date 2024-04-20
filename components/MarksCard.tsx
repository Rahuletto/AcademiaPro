import { useEffect, useState } from "react";
import styles from "@/styles/MarksCard.module.css";
import { TestPerformance } from "@/types/Marks";

interface Props {
  name: string;
  category: string;
  marks: TestPerformance[];
  code: string;
}

const MarksCard = ({ name, marks, code, category }: Props) => {
  const [arr, setArr] = useState<any[]>([]);

  useEffect(() => {
    setArr([...marks]);
  }, [marks]);

  return (
    <>
      {arr[0] ? (
        <div
          title={`${code} (${category})`}
          className={[styles.card, "markCard"].join(" ")}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              justifyContent: "space-between",
              width: "-webkit-fill-available",
            }}
          >
            <h4 className={styles.title}>{name}</h4>

            <div
              className={
                category == "Theory"
                  ? styles.circle
                  : [styles.circle, styles.greenCircle].join(" ")
              }
            ></div>
          </div>

          <div className={styles.marks}>
            {marks.map((element, index) => (
              <div key={index} className={styles.row}>
                <span className={[styles.muted_title, "col-6"].join(" ")}>
                  {element.test}
                </span>

                <div className={styles.markPill}>
                  <span
                    className={
                      element.marks.scored == "Abs" ||
                      parseFloat(element.marks.scored) / 2 >
                        parseFloat(element.marks.total)
                        ? styles.red
                        : styles.mark
                    }
                  >
                    {element.marks.scored}
                  </span>
                  <span className={styles.total}>{element.marks.total.split('.')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MarksCard;
