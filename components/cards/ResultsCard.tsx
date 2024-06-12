import styles from '@/styles/Card.module.css';
import { truncateString } from '../../utils/truncate';
import { ExamMarks } from '@/types/Results';

interface Props {
  data: ExamMarks;
}

const ResultsCard = ({ data }: Props) => {
  return (
    <>
      <tr
        className={[styles.card, 'attCard'].join(' ')}
        title={`Semester ${data.semester} - ${data.courseTitle}`}
      >
        <td style={{ height: '80px' }}>
          <div
            style={{
              padding: '8px 4px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
              height: '100%',
              justifyContent: 'flex-start',
              width: '-webkit-fill-available',
            }}
          >
            <h4 title={`Semester ${data.semester}`}>
              {truncateString(data.courseTitle)}
            </h4>
          </div>
        </td>
        <td>
          <p className={styles.margin}>
            <span>{data.courseCode}</span>
          </p>
        </td>

        <td>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              paddingLeft: 6,
            }}
          >
            <span style={{ fontSize: 14, opacity: '0.4' }}>Credit:</span>{' '}
            <span
              className={styles.total}
              style={
                !data.credit || data.credit === '' || Number(data.credit) == 0
                  ? { backgroundColor: 'var(--red)', opacity: 0.5 }
                  : {}
              }
            >
              {data.credit || 0}
            </span>
          </div>
        </td>
        <td>
          <h3
            style={{ fontSize: 28 }}
            className={data.result === 'PASS' ? styles.green : styles.red}
          >
            {data.grade}{' '}
            <span style={{ fontSize: 14, opacity: '0.4' }}>grade</span>
          </h3>
        </td>
      </tr>
    </>
  );
};

export default ResultsCard;
