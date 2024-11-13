import Link from "@/components/Link";
import { FaBookOpen } from "react-icons/fa";
import dynamic from "next/dynamic";

const Bento = dynamic(() =>
  import("../components/Bento").then((a) => a.default),
);

export default function Academia() {
  return (
    <main className="flex flex-col items-center justify-start gap-4 bg-light-background-normal p-4 dark:bg-dark-background-normal">
      <div className="flex h-full w-full animate-fadeIn flex-col items-center justify-start gap-2 rounded-3xl bg-light-background-dark px-6 py-12 transition-all duration-300 md:px-12 lg:flex-row lg:gap-6 lg:py-6 dark:bg-dark-background-dark">
        <FaBookOpen className="text-6xl text-light-accent lg:text-4xl dark:text-dark-accent" />
        <h1 className="text-2xl font-semibold text-light-color lg:text-xl dark:text-dark-color">
          ClassPro.
        </h1>
        <p className="text-md text-center font-medium text-light-color opacity-70 lg:hidden lg:text-lg dark:text-dark-color">
          University data, beautifully presented at your fingertips
        </p>
        <Link
          href="/auth/login"
          className="text-md flex w-auto transform items-center justify-center rounded-xl border-2 border-transparent bg-light-accent px-3 py-1 text-lg font-semibold text-dark-color transition-all duration-300 hover:border-light-accent hover:bg-transparent hover:px-7 hover:text-light-accent dark:bg-dark-accent dark:text-light-color hover:dark:border-dark-accent hover:dark:text-dark-accent"
        >
          Login
        </Link>
      </div>

      <div className="h-auto w-full animate-fadeIn flex-col items-center justify-center gap-6 rounded-3xl bg-light-background-dark px-8 py-6 transition-all duration-300 sm:w-3/4 md:px-12 md:py-12 dark:bg-dark-background-dark">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <h1 className="text-3xl font-semibold text-light-color dark:text-dark-color">
            Privacy Policy
          </h1>
          <p className="text-md text-light-color dark:text-dark-color">
            ClassPro (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
            committed to safeguarding your privacy. This Privacy Policy
            describes how we collect, use, and protect the minimal data
            necessary for our services. By using ClassPro, you agree to the
            practices outlined below.
          </p>

          <h2 className="text-xl font-semibold text-light-color dark:text-dark-color">
            1. Who We Are
          </h2>
          <p className="text-md text-light-color dark:text-dark-color">
            ClassPro is an independent app designed to enhance your access to
            university-related information like attendance and marks, delivering
            a simple, efficient, and visually engaging experience.{" "}
            <strong>
              We are not affiliated with, endorsed by, or connected to SRM
              University, Zoho, or any other organization.
            </strong>
          </p>

          <h2 className="text-xl font-semibold text-light-color dark:text-dark-color">
            2. Data We Collect
          </h2>
          <p className="text-md text-light-color dark:text-dark-color">
            ClassPro only collects and stores specific academic data essential
            for providing our services. This includes:
            <ul className="list-disc pl-6">
              <li>
                Attendance Data: Information about your attendance records to
                generate accurate and timely reports.
              </li>
              <li>
                Marks Data: Your grades and performance records, allowing you to
                view and manage your academic progress conveniently.
              </li>
            </ul>
            We do not collect or store any additional personal information, such
            as names, emails, or contact information.
          </p>

          <h2 className="text-xl font-semibold text-light-color dark:text-dark-color">
            3. How We Use Your Data
          </h2>
          <p className="text-md text-light-color dark:text-dark-color">
            The data collected is used only to display your attendance and
            grades within the app, generate custom timetables, and provide fast,
            responsive access to your data through secure storage solutions.
          </p>

          <h2 className="text-xl font-semibold text-light-color dark:text-dark-color">
            4. Data Storage and Security
          </h2>
          <p className="text-md text-light-color dark:text-dark-color">
            All data is stored securely on Supabase servers with robust
            encryption to protect your attendance and marks data both in transit
            and at rest. We use encryption practices to protect your information
            from unauthorized access, stored solely for fast response times and
            improved app performance.
          </p>

          <h2 className="text-xl font-semibold text-light-color dark:text-dark-color">
            5. Data Retention
          </h2>
          <p className="text-md text-light-color dark:text-dark-color">
            Your attendance and marks data are stored only as long as necessary
            to provide our services effectively. If you decide to delete your
            account, all associated data will be permanently removed from our
            servers.
          </p>

          <h2 className="text-xl font-semibold text-light-color dark:text-dark-color">
            6. Third-Party Services
          </h2>
          <p className="text-md text-light-color dark:text-dark-color">
            ClassPro does not share your data with any third parties. Any
            third-party services used, such as for performance improvements and
            caching, are selected to ensure they align with our security and
            privacy standards. These services do not have access to your data.
          </p>

          <h2 className="text-xl font-semibold text-light-color dark:text-dark-color">
            7. Open Source and Transparency
          </h2>
          <p className="text-md text-light-color dark:text-dark-color">
            ClassPro is an open-source project, developed entirely by a team of
            two dedicated individuals. Our codebase is open for public review,
            ensuring full transparency in our data handling and security
            practices. You are welcome to explore the project and even
            contribute. The source code is available on our official repository:{" "}
            <a
              className="underline"
              target="_blank"
              href="https://github.com/Rahuletto/ClassPro"
            >
              Github
            </a>
          </p>

          <h2 className="text-xl font-semibold text-light-color dark:text-dark-color">
            8. Your Privacy Rights
          </h2>
          <p className="text-md text-light-color dark:text-dark-color">
            You may request to view or delete your attendance and marks data at
            any time by contacting us.
          </p>

          <h2 className="text-xl font-semibold text-light-color dark:text-dark-color">
            9. Policy Changes
          </h2>
          <p className="text-md text-light-color dark:text-dark-color">
            We may periodically update this Privacy Policy to reflect changes in
            our practices. Any updates will be posted here, so please review
            this policy regularly to stay informed.
          </p>

          <h2 className="text-xl font-semibold text-light-color dark:text-dark-color">
            10. Contact Us
          </h2>
          <p className="text-md text-light-color dark:text-dark-color">
            For any questions or concerns regarding this Privacy Policy or your
            data, feel free to contact us at [Your Contact Information].
          </p>
        </div>
      </div>
    </main>
  );
}
