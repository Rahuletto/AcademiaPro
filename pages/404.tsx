import Header from "@/components/Header";
import styles from "@/styles/Error.module.css";

export default function Error404() {
  return (
    <>
    <Header title={'404 | Ac4D3m1APr0'} />
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 style={{ fontSize: "98px", color: "var(--yellow)" }}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7v4a1 1 0 0 0 1 1h3"></path>
            <path d="M7 7v10"></path>
            <path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z"></path>
            <path d="M17 7v4a1 1 0 0 0 1 1h3"></path>
            <path d="M21 7v10"></path>
          </svg>
        </h1>
        <h3>uh oh.</h3>
        <p>You are not supposed to be here comrade</p>
        <button
          className={styles.closebutton}
          type="button"
          style={{
            borderWidth: 1.8,
          }}
          onClick={() => (window.location.href = "/")}
          title="Home"
        >
          Return to Home
        </button>
      </div>
    </main>
    </>
  );
}
