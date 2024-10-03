export default function Maintenance() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-4 bg-light-background-normal p-4 dark:bg-dark-background-normal">
      <div className="flex w-1/2 animate-fadeIn flex-col gap-6 self-center rounded-3xl bg-light-warn-background px-6 py-4 md:px-12 md:py-6 dark:bg-dark-warn-background">
        <h3 className="text-center text-light-warn-color dark:text-dark-warn-color">
          Academia has made a few changes, we will work on integrating them,
          Sorry for the inconvenience caused.
        </h3>
      </div>
      <h2 className="rounded-3xl bg-light-background-light px-6 py-4 text-center text-light-color dark:bg-dark-background-light dark:text-dark-color">
        In the meantime use the official{" "}
        <a className="underline" href="https://academia.srmist.edu.in/">
          Academia
        </a>
        , by Zoho{" "}
      </h2>
    </main>
  );
}
