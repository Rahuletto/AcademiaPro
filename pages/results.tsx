import styles from "@/styles/Result.module.css";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { Sidebar } from "@/components/Sidebar";
import { useDay } from "@/providers/DayProvider";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import { useUser } from "@/providers/UserProvider";
import { useEffect, useState } from "react";
import { ExamData } from "@/types/Results";
import { URL } from "@/utils/url";
import ResultsTable from "@/components/Results";

const grade_points: { [key: string]: number } = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5.5,
  W: 0,
  F: 0,
  Ab: 0,
  I: 0,
  "*": 0,
};

export default function Results() {
  const router = useRouter();
  const day = useDay();
  const user = useUser();

  const [result, setResult] = useState<ExamData | null>(null);

  const [reg, setReg] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState(false);

  const [cgpa, setCgpa] = useState(0);

  useEffect(() => {
    setReg(user?.userInfo.reg || "");
  }, [user]);

  useEffect(() => {
    function cgpaCalculator() {
      var points = 0;
      var sum_credit = 0;
      result?.marks.forEach((course) => {
        if (course.credit === "") course.credit = "0";
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      <Header title={"Exam Results | AcademiaPro"} />
      <main className="flex">
        <Sidebar day={day} page="Results" />

        <div className="h-[95.5vh] flex-grow overflow-auto p-8">
          <div className="mb-12 flex flex-col gap-1">
            <h2>SRM 2024 Results</h2>
            <p>
              I thought I disabled this. uhm? If you still accessed it,
              that&apos;s cool!
            </p>
          </div>
          {!result ? (
            <div className={`border ${error ? "border-red-500" : ""}`}>
              <div className="pc flex flex-col">
                <div className="flex flex-col">
                  <p>Registration Number</p>
                  <input
                    disabled
                    type="text"
                    placeholder="Registration Number"
                    value={reg}
                    className="mb-2 rounded border p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <p>Date of Birth</p>
                  <input
                    title="Date of Birth"
                    min="1990-01-01"
                    max="2010-12-31"
                    defaultValue={"2005-01-31"}
                    type="date"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="rounded border p-2"
                  />
                </div>
              </div>
              <div className="mobile flex flex-col gap-4">
                <div className="flex flex-col">
                  <p className="p-1">Registration Number</p>
                  <input
                    type="text"
                    placeholder="Registration Number"
                    value={reg}
                    disabled
                    className="mb-2 rounded border p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="p-1">Date of Birth</p>
                  <input
                    title="Date of Birth"
                    min="1990-01-01"
                    max="2010-12-31"
                    defaultValue={"2005-01-31"}
                    type="date"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="rounded border p-2"
                  />
                </div>
              </div>
              <button
                onClick={submit}
                type="submit"
                className="mt-4 rounded bg-blue-500 p-2 text-white"
              >
                Check out
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div>
                  <h3>{result.name}</h3>
                  <h4 className="text-lg text-accent">{reg}</h4>
                </div>
                <div className="text-right">
                  <h3 className="select-none opacity-0">lol</h3>
                  <h4 className="text-lg text-accent">{result.examDate}</h4>
                </div>
              </div>
              <ResultsTable data={result} />
              {cgpa && (
                <div className="mt-8 pr-8 text-right">
                  <h3
                    className={`mb-12 text-2xl ${
                      cgpa > 5 ? "text-green" : "text-red"
                    }`}
                  >
                    <span className="text-base text-accent opacity-40">
                      SGPA:
                    </span>{" "}
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
