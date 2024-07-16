import { FaDoorOpen } from "react-icons/fa6";
import { LuServerCrash } from "react-icons/lu";

import Header from "@/components/Header";
import styles from "@/styles/Error.module.css";
import { clearCookies } from "@/utils/cookies";

export default function ErrorStack({ error }: { error: Error }) {
  return (
    <>
      <Header title={"Error | Ac4D3m1APr0"} />

      <main className={styles.main}>
        <div className={`relative ${styles.container}`}>
          <h1
            style={
              error
                ? { fontSize: "98px", color: "var(--red)" }
                : { fontSize: "98px", color: "var(--green)" }
            }
          >
            {error ? <LuServerCrash /> : <FaDoorOpen />}
          </h1>
          {error ? <h3>*intense crash sound*</h3> : <h3>Nothing{"'"}s here</h3>}
          {error ? (
            <p>Oops, I stumbled down for you?</p>
          ) : (
            <p>There is no error but you forced yourself to see this page</p>
          )}
          <details className="my-4 w-[70%] rounded-2xl bg-backgroundLight px-4 py-2">
            <summary className="m-3 cursor-pointer">Error Stack</summary>
            <pre className={styles.errorPre}>
              <code className={styles.errorStack}>
                {error?.stack ||
                  "Wait, there is no error stack here. wtf\n\nGo back to home, there is nothing here... or is it?"}
              </code>
            </pre>
          </details>
          <div className="absolute bottom-6 flex flex-col items-center justify-center gap-4">
            <p className="text-xs opacity-70">
              Frequent errors? try clearing the data. {"(it logs you out tho)"}
            </p>
            <button
              type="button"
              onClick={clearCookies}
              className="rounded-full bg-accent px-4 py-2 text-xl text-background"
            >
              Clear cookies
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
