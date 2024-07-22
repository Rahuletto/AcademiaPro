import { getCookie } from "@/utils/cookies";
import { URL } from "@/utils/url";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Error.module.css";
import { useEffect, useState } from "react";
import { IoCloudOffline } from "react-icons/io5";
import Header from "@/components/Header";
import { useUser } from "@/providers/UserProvider";

export default function Sleepy() {
  const [status, setStatus] = useState<any>({});
  const router = useRouter();
  const user = useUser();
  useEffect(() => {
    const cookie = getCookie("token");
    if (cookie)
      fetch(`${URL}/api/ping`, {
        method: "GET",
        headers: {
          "X-CSRF-Token": cookie,
          "Set-Cookie": cookie,
          Cookie: cookie,
          Connection: "keep-alive",
          "content-type": "application/json",
        },
      })
        .then((e) => e.json())
        .then((res) => {
          setStatus(res);
          if (res.healthy || user) router.push("/academia");
        });
  }, [router]);
  return (
    <>
      <Header title={"Zzz.."} />

      <main className={styles.main}>
        <div className={`relative ${styles.container}`}>
          <h1 style={{ fontSize: "98px", color: "var(--red)" }}>
            <IoCloudOffline />
          </h1>
          <h2>sleepyhead.</h2>
          <p>Seems like SRM Servers are sleeping..</p>
          <div className="mt-8 flex flex-col items-start justify-start gap-3 rounded-xl bg-backgroundLight px-6 py-3">
            <p className="font-mono text-xs">
              Healthy:{" "}
              <span className={status.healthy ? "text-green" : "text-red"}>
                {status.healthy ? "Yes" : "No"}
              </span>
            </p>

            {status.healthy && (
              <p className="font-mono text-xs">Roundtrip: {status.roundtrip}</p>
            )}
          </div>
          <p className="mt-4">If it&apos;s seem to be healthy, its online.</p>
        </div>
      </main>
    </>
  );
}
