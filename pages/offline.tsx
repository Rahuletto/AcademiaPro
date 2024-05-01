import Head from 'next/head';
export default function Offline() {
  return (
    <main className="main">
      <Head>
        <title>Offline | AcademiaPro?</title>
      </Head>
      <div className="container">
        <h1 style={{ fontSize: '98px', color: 'var(--red)' }}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
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
      <style>
        {`
            .main {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                height: 94vh;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
              }
              
              .closebutton {
                background-color: var(--background);
                color: var(--accent);
                border: 2px solid #b3b3d127;
                border-radius: 12px;
                padding: 6px 12px;
                font-size: 16px;
                font-weight: 500;
                z-index: 3;
                cursor: pointer;
              }
              
              .container {
                width: 80vw;
                height: 80vh;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                background: #0f1217;
                border-radius: 32px;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                gap: 8px;
              }
              
              .container p {
                color: var(--level-color);
                font-size: 16px;
                text-align: center;
              }
              
              .errorStack {
                color: var(--red) !important;
                white-space: break-spaces;
              
                background: transparent !important;
                border: 0px solid transparent;
                padding: 0px !important;
              }
              
              .errorPre {
                margin: 10px 32px;
                background: var(--background);
                border: 1px solid var(--border);
                padding: 4px 10px;
                border-radius: 12px;
                width: -webkit-fill-available;
                font-family: var(--jb-font);
                font-size: 14px;
                display: block;
                white-space: pre-line;
                color: var(--color) !important;
                margin-bottom: 30px;
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
                .errorPre {
                  margin: 0px !important;
                  width: 100%;
                }
              
                .container {
                  padding: 24px;
                }
                .container p {
                  font-size: 16px;
                }
              }`}
      </style>
    </main>
  );
}
