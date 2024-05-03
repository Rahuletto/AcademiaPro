import { endingTimesSlot, startingTimesSlot } from '@/types/Times';
import { timeRange } from '@/utils/range';
import { useState, useEffect } from 'react';

export function TableHeader() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const currentTime = new Date();

    const currentOffset = currentTime.getTimezoneOffset();

    const ISTOffset = 330;

    setTime(
      new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000),
    );
  }, []);

  const arr = [];
  for (let i = 0; i < startingTimesSlot.length; i++) {
    arr.push(
      <th
        title={startingTimesSlot[i] + '-' + endingTimesSlot[i]}
        className="head-time"
      >
        <span
          className={
            timeRange(time, startingTimesSlot[i] + '-' + endingTimesSlot[i])
              ? 'current-time'
              : ''
          }
        >
          {i + 1}
        </span>
      </th>,
    );
  }
  return <tr className="bg-light-gray">{...arr}</tr>;
}
