import Head from "next/head";

export default function Offline() {
  return (
    <main className="flex h-[94vh] items-center justify-center">
      <Head>
        <title>Offline | AcademiaPro?</title>
      </Head>
      <div className="flex h-[80vh] w-[80vw] flex-col items-center justify-center gap-2 rounded-[32px] bg-gray-900 text-gray-400">
        <h1 className="text-[98px] text-[#f75b5b]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 256 256"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M144,204a16,16,0,1,1-16-16A16,16,0,0,1,144,204ZM217,80l15.52-15.51a12,12,0,0,0-17-17L200,63,184.49,47.51a12,12,0,0,0-17,17L183,80,167.51,95.51a12,12,0,0,0,17,17L200,97l15.51,15.52a12,12,0,0,0,17-17Zm-41.9,75.3a80,80,0,0,0-94.13,0,12,12,0,1,0,14.13,19.4,56,56,0,0,1,65.87,0,12,12,0,0,0,14.13-19.4ZM131.71,68h.3a12,12,0,0,0,.28-24c-1.43,0-2.86,0-4.29,0A176.27,176.27,0,0,0,16.39,83.91a12,12,0,1,0,15.23,18.55A152.24,152.24,0,0,1,128,68C129.24,68,130.48,68,131.71,68Zm-.12,48a12,12,0,0,0,.82-24C131,92,129.47,92,128,92a126.66,126.66,0,0,0-79.45,27.64,12,12,0,0,0,14.9,18.81A102.89,102.89,0,0,1,128,116C129.2,116,130.41,116,131.59,116.06Z"></path>
          </svg>
        </h1>
        <h3>uhm.</h3>
        <p>You went offline. Turn on your internet</p>
      </div>
      <style jsx>{`
        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-weight: 500;
          line-height: 1.2;
          color: #d4d4d4;
          font-family: var(--main-font), system-ui;
        }

        body {
          background-color: #0c1015 !important;
          padding: 18px !important;
          margin: 0px !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }

        @media only screen and (max-width: 540px) {
          .container {
            width: 95vw;
            height: 95vh;
          }
        }

        @media only screen and (max-width: 460px) {
          .main {
            margin: 12px;
          }

          .container {
            padding: 24px;
          }
        }
      `}</style>
    </main>
  );
}
