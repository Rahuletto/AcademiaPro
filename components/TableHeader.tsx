import { endingTimesSlot, startingTimesSlot } from '@/types/Times';
import { timeRange } from '@/utils/range';

export function TableHeader() {
  const arr = [];
  for (let i = 0; i < startingTimesSlot.length; i++) {
    arr.push(
      <th
        title={startingTimesSlot[i] + '-' + endingTimesSlot[i]}
        className="head-time"
      >
        <span
          className={
            timeRange(startingTimesSlot[i] + '-' + endingTimesSlot[i])
              ? 'current-time'
              : ''
          }
        >
          {i}
        </span>
      </th>,
    );
  }
  return <tr className="bg-light-gray">{...arr}</tr>;
}
