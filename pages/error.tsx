import { FaDoorOpen } from "react-icons/fa6";
import { LuServerCrash } from "react-icons/lu";

import styles from "@/styles/Error.module.css";
import Header from "@/components/Header";
import { useEffect } from "react";
import { clearCookies } from "@/utils/cookies";
import { useRouter } from "next/router";

export default function ErrorStack({ error }: { error: Error }) {
  const router = useRouter()

  useEffect(() => {
    // clearCookies()
    // setTimeout(() => router.push('/login'), 4000)
  }, [])

  return (
    <>
      <Header title={"Error | Ac4D3m1APr0"} />

      <main className={styles.main}>
        <div className={styles.container}>
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
            <p>You successfully crashed it. congo</p>
          ) : (
            <p>There is no error but you forced yourself to see this page</p>
          )}
          <pre className={styles.errorPre}>
            <code className={styles.errorStack}>
              {error?.stack ||
                "Wait, there is no error stack here. wtf\n\nGo back to home, there is nothing here... is there?"}
            </code>
          </pre>
        </div>
      </main>
    </>
  );
}
