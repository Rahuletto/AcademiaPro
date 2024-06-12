import styles from '@/styles/Result.module.css';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { Sidebar } from '@/components/Sidebar';
import { useDay } from '@/providers/DayProvider';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import { useUser } from '@/providers/UserProvider';
import { useEffect, useState } from 'react';
import { ExamData } from '@/types/Results';
import { URL } from '@/utils/url';
import ResultsTable from '@/components/Results';

const grade_points: { [key: string]: number } = {
  O: 10,
  'A+': 9,
  A: 8,
  'B+': 7,
  B: 6,
  C: 5.5,
  W: 0,
  F: 0,
  Ab: 0,
  I: 0,
  '*': 0,
};

export default function Results() {
  const router = useRouter();
  const day = useDay();
  const user = useUser();

  const [result, setResult] = useState<ExamData | null>(null);

  const [reg, setReg] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState(false);

  const [cgpa, setCgpa] = useState(0);

  useEffect(() => {
    setReg(user?.userInfo.reg || '');
  }, [user]);

  useEffect(() => {
    function cgpaCalculator() {
      var points = 0;
      var sum_credit = 0;
      result?.marks.forEach((course) => {
        if (course.credit === '') course.credit = '0';
        sum_credit += Number(course.credit) || 0;
        var gp = grade_points[course.grade];
        points += Number(course.credit) * gp;
      });
      var gpa = points / sum_credit;

      setCgpa(isNaN(gpa) ? 0 : parseFloat(gpa.toPrecision(3)));
    }

    if (result?.name) {
      cgpaCalculator();
    }
  }, [result]);

  function submit() {
    fetch(`${URL}/api/result`, {
      next: { revalidate: 12 * 3600 },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reg: reg,
        dob: dob,
      }),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.name) {
          setResult(res);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.warn(err);
        setError(true);
      });
  }
  return (
    <>
      <Loader />
      <Header title={'Exam Results | AcademiaPro'} />
      <main className="root">
        <Sidebar day={day} page="Results" />

        <div className="content" style={{ height: 'auto', padding: '2.2rem' }}>
          <h2 style={{ marginBottom: '48px' }}>SRM 2024 Results</h2>
          {!result ? (
            <div
              className={styles.results}
              style={error ? { borderColor: 'var(--red)' } : {}}
            >
              <div className={styles.inputs}>
                <div>
                  <p>Registration Number</p>
                  <p>Date of Birth</p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Registration Number"
                    value={reg}
                    onChange={(e) => setReg(e.target.value)}
                  />
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </div>
              <button onClick={submit} type="submit">
                Check out
              </button>
            </div>
          ) : (
            <>
              <div className={styles.gridResult}>
                <div className={styles.details}>
                  <h3>{result.name}</h3>
                  <h4 style={{ color: 'var(--accent)', fontSize: 16 }}>
                    {reg}
                  </h4>
                </div>
                <div className={styles.dept}>
                  <h3 style={{ opacity: 0, userSelect: 'none' }}>lol</h3>
                  <h4
                    style={{
                      color: 'var(--accent)',
                      fontSize: 16,
                      textAlign: 'right',
                    }}
                  >
                    {result.examDate}
                  </h4>
                </div>
              </div>
              <ResultsTable data={result} />
              {cgpa && (
                <div
                  style={{
                    marginTop: 32,
                    paddingRight: 32,
                    textAlign: 'right',
                  }}
                >
                  <h3
                    style={
                      cgpa > 5
                        ? { color: 'var(--green)', fontSize: '32px' }
                        : { color: 'var(--red)', fontSize: '32px' }
                    }
                  >
                    <span
                      style={{
                        color: 'var(--accent)',
                        opacity: '0.4',
                        fontSize: '16px',
                      }}
                    >
                      CGPA:
                    </span>{' '}
                    {cgpa}
                  </h3>
                </div>
              )}
            </>
          )}

          <Footer />
        </div>
      </main>
    </>
  );
}
