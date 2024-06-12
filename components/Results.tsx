import styles from '@/styles/Attendance.module.css';
import { ExamData } from '@/types/Results';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ResultsCard from './cards/ResultsCard';

const ResultsTable = ({ data }: { data: ExamData | null }) => {
  return (
    <>
      <table style={{ width: '-webkit-fill-available' }}>
        <thead />
        <thead />
        <tbody className={[styles.attr, 'attTable'].join(' ')}>
          {data && data.marks[0] ? (
            data.marks.map((element, index: number) => (
              <ResultsCard key={index} data={element} />
            ))
          ) : data?.name ? (
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
              <h4
                style={{
                  textAlign: 'center',
                  opacity: '0.8',
                  fontSize: '16px',
                }}
              >
                There is no results here, Interesting...
              </h4>
            </div>
          ) : (
            <>
              <Skeleton
                style={{ width: '60vw', height: '64px', borderRadius: '12px' }}
              />
              <Skeleton
                style={{
                  width: '60vw',
                  height: '64px',
                  borderRadius: '12px',
                  opacity: 0.1,
                }}
              />
              <Skeleton
                style={{ width: '60vw', height: '64px', borderRadius: '12px' }}
              />

              <Skeleton
                style={{
                  width: '60vw',
                  height: '64px',
                  borderRadius: '12px',
                  opacity: 0.1,
                }}
              />

              <Skeleton
                style={{ width: '60vw', height: '64px', borderRadius: '12px' }}
              />
              <Skeleton
                style={{
                  width: '60vw',
                  height: '64px',
                  borderRadius: '12px',
                  opacity: 0.1,
                }}
              />
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ResultsTable;
