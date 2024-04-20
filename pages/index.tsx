import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
import { getCookie } from "@/utils/cookies";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (getCookie("token")) router.push("/academia");
  }, []);

  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.hero}>
          <svg
            className={styles.book}
            xmlns="http://www.w3.org/2000/svg"
            width="77"
            height="59"
            viewBox="0 0 45 36"
            fill="none"
          >
            <path
              d="M42.1294 0.936277C37.9437 1.17382 29.6243 2.03846 24.4884 5.18232C24.134 5.39925 23.9331 5.78497 23.9331 6.18827V33.9812C23.9331 34.8634 24.8978 35.421 25.7112 35.0116C30.9953 32.352 38.6373 31.6264 42.4159 31.4278C43.7059 31.3598 44.7088 30.3256 44.7088 29.0859V3.28119C44.7096 1.92847 43.5364 0.85684 42.1294 0.936277ZM20.9343 5.18232C15.7992 2.03846 7.47974 1.17459 3.29403 0.936277C1.88709 0.85684 0.713867 1.92847 0.713867 3.28119V29.0867C0.713867 30.3271 1.71676 31.3613 3.00684 31.4285C6.78696 31.6271 14.4327 32.3535 19.7168 35.0146C20.528 35.4233 21.4896 34.8665 21.4896 33.9865V6.17452C21.4896 5.77046 21.2895 5.40001 20.9343 5.18232Z"
              fill="#D4D4D4"
            />
          </svg>
          <div className={styles.tag}>
            <h1>Academia</h1>
            <p>University data, beautifully presented at your fingertips</p>
          </div>
          <div className={styles.buttons}>
            <Link className={styles.login} href="/login">
              Login
            </Link>
          </div>
        </div>

        <div className={styles.features}>
          <div>
            <h3 style={{ opacity: 0.9, marginBottom: "8px" }}>
              Why Academia ?
            </h3>
            <ul>
              <li>Mobile-First approach</li>
              <li>Fast, Zippy and RAM Friendly</li>
              <li>Open source</li>
              <li>Time table generator</li>
              <li>Safe, Secure yet transparent</li>
              <li>No bloat</li>
            </ul>
          </div>
          <div>
            <h3 style={{ opacity: 0.9, marginBottom: "8px" }}>Idea behind</h3>
            <p>
              Academia is a mess. we scraped it so, we know it. lol. And we got
              SRM Check but its bloated with useless crap and ads. So here we
              are with our take. We aren&apos;t responsible for the slow loading
              times, blame the SRM servers, we tried our best.
            </p>
          </div>
          <blockquote className={styles.blockquotewarn}>
            <p>
              We scrape the information from SRM Academia, This website acts as
              a wrapper and does not store any information whatsoever!
            </p>
          </blockquote>
        </div>
      </main>
    </>
  );
}
