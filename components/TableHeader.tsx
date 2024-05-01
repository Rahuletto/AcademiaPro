import { endingTimesSlot, startingTimesSlot } from '@/types/Times';
import { useState, useEffect } from 'react';

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
            isTimeInRange(startingTimesSlot[i] + '-' + endingTimesSlot[i])
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

function isTimeInRange(timeRange: string) {
  const [startTime, endTime] = timeRange.split('-');
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  if (
    currentHour > startHour ||
    (currentHour === startHour && currentMinute >= startMinute)
  ) {
    if (
      currentHour < endHour ||
      (currentHour === endHour && currentMinute < endMinute)
    ) {
      return true;
    }
  }
  return false;
}
