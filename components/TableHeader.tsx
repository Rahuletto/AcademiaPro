import { endingTimesSlot, startingTimesSlot } from "@/types/Times";
import { timeRange } from "@/utils/range";
import { useInterval } from "@/utils/useInterval";
import { type ReactNode, useEffect, useState } from "react";

export function TableHeader() {
  const [time, setTime] = useState(new Date());
  const [arr, setArr] = useState<ReactNode[]>([]);

  useEffect(() => {
    const currentTime = new Date();

    const currentOffset = currentTime.getTimezoneOffset();

    const ISTOffset = 330;

    setTime(
      new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000),
    );
  }, []);

  useInterval(() => {
    const currentTime = new Date();

    const currentOffset = currentTime.getTimezoneOffset();

    const ISTOffset = 330;

    setTime(
      new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000),
    );
  }, 30 * 1000);

  useEffect(() => {
    if (arr.length >= 10) return;

    for (let i = 0; i < startingTimesSlot.length; i++) {
      const newValue = (
        <th
          key={i}
          title={startingTimesSlot[i] + "-" + endingTimesSlot[i]}
          className="head-time hidden p-2 md:table-cell"
        >
          {timeRange(time, startingTimesSlot[i] + "-" + endingTimesSlot[i]) ? (
            <span className={"current-time"}>{i + 1}</span>
          ) : (
            <span>{i + 1}</span>
          )}
        </th>
      );
      setArr((oldArray) => [...oldArray, newValue]);
    }
  }, [time]);

  return (
    <tr className="bg-light-gray flex h-full flex-col md:table-row md:h-auto">
      {...arr.length > 10 ? arr.splice(0, 10) : arr}
    </tr>
  );
}
