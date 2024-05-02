import { endingTimesSlot, startingTimesSlot } from '@/types/Times';
import { timeRange } from '@/utils/range';
import { useState } from 'react'

export function TableHeader() {
  const [d, setD] = useState(new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
  ))
  
  const arr = [];
  for (let i = 0; i < startingTimesSlot.length; i++) {
    arr.push(
      <th
        title={startingTimesSlot[i] + '-' + endingTimesSlot[i]}
        className="head-time"
      >
        <span
          className={
            timeRange(d, startingTimesSlot[i] + '-' + endingTimesSlot[i])
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
