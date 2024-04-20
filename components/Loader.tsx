// NextJS Stuff
import React from "react";

// Styles
import styles from "@/styles/Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={[styles.loader, "loadScreen"].join(" ")}>
      <svg
        className={styles.loadingRing}
        viewBox="0 0 128 128"
        width="128px"
        height="128px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--green)" />
            <stop offset="100%" stopColor="var(--green)" />
          </linearGradient>
        </defs>
        <circle
          className={styles.circle}
          r="56"
          cx="64"
          cy="64"
          fill="none"
          stroke="var(--green)"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          className={styles.worm}
          d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="44 1111"
          strokeDashoffset="10"
        />
      </svg>
      <h2 className={styles.loadTitle}>Loading..</h2>
    </div>
  );
};

export default Loader;
