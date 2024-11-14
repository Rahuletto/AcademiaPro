import Link from "@/components/Link";
import { FaBookOpen } from "react-icons/fa";
import { cookies } from "next/headers";

export default async function Privacy() {
  const cookie = (await cookies()).get("key");

  return (
    <main className="flex flex-col items-center gap-8 p-16 transition-all duration-150 md:p-24 lg:p-32">
      <div className="fixed bottom-12 right-12 flex items-center justify-center">
        {cookie ? (
          <Link
            href="/auth/login"
            className="flex w-52 items-center justify-center rounded-xl border-2 border-transparent bg-light-accent px-3 py-1 text-lg font-semibold text-dark-color transition-all duration-300 hover:border-light-accent hover:bg-transparent hover:px-7 hover:text-light-accent dark:bg-dark-accent dark:text-light-color hover:dark:border-dark-accent hover:dark:text-dark-accent"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            href="/academia"
            className="flex w-auto items-center justify-center rounded-xl border-2 border-transparent bg-light-accent px-2 py-1 text-lg font-semibold text-dark-color transition-all duration-300 hover:border-light-accent hover:bg-transparent hover:px-7 hover:text-light-accent dark:bg-dark-accent dark:text-light-color hover:dark:border-dark-accent hover:dark:text-dark-accent"
          >
            Login
          </Link>
        )}
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-8 leading-relaxed  text-justify">
        <header className="flex items-center gap-4 text-3xl font-semibold text-light-color underline decoration-light-accent lg:text-5xl dark:text-dark-color dark:decoration-dark-accent">
          <FaBookOpen className="text-4xl text-light-accent lg:text-5xl dark:text-dark-accent" />
          Privacy Policy
        </header>
        <p className="text-light-accent opacity-40 -mt-4 dark:text-dark-accent">Last Updated: 14 November 2024</p>
        

        <section className="text-base text-light-color dark:text-dark-color leading-relaxed">
          <p>
            ClassPro ("we," "us," or "our") is committed to safeguarding your
            privacy. This{" "}
            <span className="underline decoration-light-accent dark:decoration-dark-accent">
              Privacy Policy
            </span>{" "}
            describes how we collect, use, and protect the minimal data
            necessary for our services. By using ClassPro, you agree to the
            practices outlined below.
          </p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color leading-relaxed">
          <h2 className="mb-2 text-2xl font-semibold text-light-accent dark:text-dark-accent">
            1. Who We Are
          </h2>
          <p className="opacity-90">
            ClassPro is an independent app designed to enhance your access to
            university-related information like timetables, delivering a simple,
            efficient, and visually engaging experience.{" "}
            <strong className="underline decoration-light-accent dark:decoration-dark-accent">
              We are not affiliated with, endorsed by, or connected to SRM
              University, Zoho, or any other organization.
            </strong>
          </p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color leading-relaxed">
          <h2 className="mb-2 text-2xl font-semibold text-light-accent dark:text-dark-accent">
            2. Data We Collect and Store
          </h2>
          <p className="opacity-90">ClassPro collects and securely stores academic data, including:</p>
          <ul className="list-disc pl-6">
            <li>
              <span className="underline decoration-light-accent dark:decoration-dark-accent">
                Timetable Data:
              </span>{" "}
              Information about your class schedules, which is actively used
              within the app for generating personalized timetables.
            </li>
            <li>
              <span className="underline decoration-light-accent dark:decoration-dark-accent">
                Attendance Data:
              </span>{" "}
              Your attendance records, securely stored but treated as cached
              information, used to improve app performance.
            </li>
            <li>
              <span className="underline decoration-light-accent dark:decoration-dark-accent">
                User Data:
              </span>{" "}
              General account information, which is securely stored but only
              used as necessary for functionality.
            </li>
          </ul>
          <p className="opacity-90">
            Although these types of data are stored on our servers, only the
            timetable data is actively utilized. All other data functions as
            temporary cache and is automatically erased daily.
          </p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color leading-relaxed">
          <h2 className="mb-2 text-2xl font-semibold text-light-accent dark:text-dark-accent">
            3. Data Security and Encryption
          </h2>
          <p className="opacity-90">
            Your data is protected with AES-256 encryption both in transit and
            at rest on our Supabase servers, ensuring it remains private and
            secure. Not even the ClassPro team can access your data thanks to
            these high security measures.
          </p>
          <p className="opacity-90">
            Each day, our system performs an automatic data cleanup process,
            erasing cached information to maintain privacy and ensure that data
            is retained only temporarily. This process allows you to retain full
            control over your data, with no additional steps required if you
            choose to stop using the app.
          </p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color leading-relaxed">
          <h2 className="mb-2 text-2xl font-semibold text-light-accent dark:text-dark-accent">
            4. Data Retention and User Control
          </h2>
          <p className="opacity-90">
            Timetable, attendance, and user data are stored temporarily to
            support app functionality and improve performance. However, data is
            erased automatically each day, effectively removing long-term
            records. By choosing not to use the app, you automatically opt out
            of data retention without any further action.
          </p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color leading-relaxed">
          <h2 className="mb-2 text-2xl font-semibold text-light-accent dark:text-dark-accent">
            5. Third-Party Services
          </h2>
          <p className="opacity-90">
            ClassPro does not share your data with any third parties. Any
            third-party services used comply with our security standards and do
            not have access to your data.
          </p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color leading-relaxed">
          <h2 className="mb-2 text-2xl font-semibold text-light-accent dark:text-dark-accent">
            6. Open Source and Transparency
          </h2>
          <p className="opacity-90">
            ClassPro is open-source, developed by a team of two. Our codebase is
            open for public review, ensuring transparency in data handling. You
            are welcome to explore or contribute via our official repository:{" "}
            <a
              className="underline decoration-light-accent dark:decoration-dark-accent"
              target="_blank"
              href="https://github.com/Rahuletto/ClassPro"
            >
              Github
            </a>
          </p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color leading-relaxed">
          <h2 className="mb-2 text-2xl font-semibold text-light-accent dark:text-dark-accent">
            7. Policy Changes
          </h2>
          <p className="opacity-90">
            We may periodically update this Privacy Policy. Any updates will be
            posted here, so please review regularly.
          </p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color leading-relaxed">
          <h2 className="mb-2 text-2xl font-semibold text-light-accent dark:text-dark-accent">
            8. Contact Us
          </h2>
          <p className="opacity-90">
            For any questions or concerns regarding this Privacy Policy, please
            contact us on WhatsApp.
          </p>
        </section>
      </div>
    </main>
  );
}
