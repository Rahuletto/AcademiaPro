import styles from '@/styles/Timetable.module.css';
import { useRouter } from 'next/router';
import type { InfoResponse } from '@/types/UserInfo';
import { endingTimesSlot, startingTimesSlot } from '@/types/Times';
import { convertUnicode } from '@/utils/unicode';
import { truncateString } from '@/utils/truncate';

const TimeTableComponent = ({
  table,
}: {
  userInfo: InfoResponse;
  table: (string | undefined)[] | undefined;
}) => {
  const router = useRouter();

  function openGen() {
    router.push(`/timetable`);
  }
  return (
    <>
      <tbody
        onClick={() => table && openGen()}
        className={[styles.body].join(' ')}
      >
        {table &&
          table.map((element: string | undefined, index: number) =>
            element ? (
              <td
                key={index}
                className={
                  String(element).includes('Theory')
                    ? styles.theory
                    : styles.lab
                }
              >
                {truncateString(convertUnicode(element).split('(')[0])}
                <span className={styles.timeSlot}>
                  {startingTimesSlot[index]} - {endingTimesSlot[index]}
                </span>
              </td>
            ) : (
              <td key={index} />
            ),
          )}
      </tbody>
    </>
  );
};

export default TimeTableComponent;
