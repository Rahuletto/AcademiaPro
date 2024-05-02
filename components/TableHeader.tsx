import { endingTimesSlot, startingTimesSlot } from '@/types/Times';
import { timeRange } from '@/utils/range';
import { useState } from 'react'

export function TableHeader() {
  const [d, setD] = useState(new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
  ))

  const intervalRef = useInterval(
    () => {
      setD(new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
  ))
    },
    60 * 1000
  );
  
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

function useInterval(callback: any, delay: number | null) {
  const intRef: any = useRef();
  const cb = useRef(callback);

  useEffect(() => {
    cb.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === "number") {
      intRef.current = window.setInterval(() => cb.current(), delay);

      return () => window.clearInterval(intRef.current);
    }
  }, [delay]);

  return intRef;
}
