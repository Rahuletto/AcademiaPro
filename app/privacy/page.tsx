import Link from "@/components/Link";
import { FaBookOpen } from "react-icons/fa";
import { cookies } from "next/headers";

export default async function Privacy() {
  const cookie = (await cookies()).get("key");

  return (
    <main className="flex flex-col items-center lg:p-32 md:p-24 p-16 gap-8 transition-all duration-150">
      <div className="fixed bottom-12 right-12 flex items-center justify-center">
        {cookie ? (
          <Link
            href="/auth/login"
            className="w-52 flex items-center justify-center rounded-xl border-2 border-transparent bg-light-accent px-3 py-1 text-lg font-semibold text-dark-color transition-all duration-300 hover:border-light-accent hover:bg-transparent hover:px-7 hover:text-light-accent dark:bg-dark-accent dark:text-light-color hover:dark:border-dark-accent hover:dark:text-dark-accent"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            href="/academia"
            className="w-auto flex items-center justify-center rounded-xl border-2 border-transparent bg-light-accent px-2 py-1 text-lg font-semibold text-dark-color transition-all duration-300 hover:border-light-accent hover:bg-transparent hover:px-7 hover:text-light-accent dark:bg-dark-accent dark:text-light-color hover:dark:border-dark-accent hover:dark:text-dark-accent"
          >
            Login
          </Link>
        )}
      </div>

      <div className="flex flex-col max-w-5xl mx-auto gap-8">
        <header className="flex items-center gap-4 text-3xl lg:text-5xl font-semibold text-light-color dark:text-dark-color underline decoration-light-accent dark:decoration-dark-accent">
          <FaBookOpen className="text-4xl lg:text-5xl text-light-accent dark:text-dark-accent" />
          Privacy Policy
        </header>

        <section className="text-base text-light-color dark:text-dark-color">
          <p>
            ClassPro (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to safeguarding your privacy. This <span className="underline decoration-light-accent dark:decoration-dark-accent">Privacy Policy</span> describes how we collect, use, and protect the minimal data necessary for our services. By using ClassPro, you agree to the practices outlined below.
          </p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color">
          <h2 className="text-2xl mb-2 font-semibold text-light-accent dark:text-dark-accent ">
            1. Who We Are
          </h2>
          <p>
            ClassPro is an independent app designed to enhance your access to university-related information like attendance and marks, delivering a simple, efficient, and visually engaging experience. <strong className="underline decoration-light-accent dark:decoration-dark-accent">We are not affiliated with, endorsed by, or connected to SRM University, Zoho, or any other organization.</strong>
          </p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color">
          <h2 className="text-2xl mb-2 font-semibold text-light-accent dark:text-dark-accent ">
            2. Data We Collect
          </h2>
          <p>ClassPro only collects and stores specific academic data essential for providing our services, including:</p>
          <ul className="list-disc pl-6">
            <li><span className="underline decoration-light-accent dark:decoration-dark-accent">Attendance Data:</span> Information about your attendance records for accurate and timely reports.</li>
            <li><span className="underline decoration-light-accent dark:decoration-dark-accent">Marks Data:</span> Your grades and performance records, allowing you to view and manage your academic progress conveniently.</li>
          </ul>
          <p>We do not collect or store additional personal information, such as names, emails, or contact information.</p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color">
          <h2 className="text-2xl mb-2 font-semibold text-light-accent dark:text-dark-accent ">
            3. How We Use Your Data
          </h2>
          <p>The data collected is used solely to display your attendance and grades within the app, generate custom timetables, and provide secure, responsive access to your data.</p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color">
          <h2 className="text-2xl mb-2 font-semibold text-light-accent dark:text-dark-accent ">
            4. Data Storage and Security
          </h2>
          <p>
            All data is stored securely on Supabase servers with robust encryption to protect your data both in transit and at rest. We use encryption practices to prevent unauthorized access, ensuring it is stored solely for fast response times and improved app performance.
          </p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color">
          <h2 className="text-2xl mb-2 font-semibold text-light-accent dark:text-dark-accent ">
            5. Data Retention
          </h2>
          <p>Your attendance and marks data are stored only as long as necessary for our services. If you delete your account, all associated data will be permanently removed from our servers.</p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color">
          <h2 className="text-2xl mb-2 font-semibold text-light-accent dark:text-dark-accent ">
            6. Third-Party Services
          </h2>
          <p>ClassPro does not share your data with any third parties. Any third-party services used are selected to align with our security standards and do not have access to your data.</p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color">
          <h2 className="text-2xl mb-2 font-semibold text-light-accent dark:text-dark-accent ">
            7. Open Source and Transparency
          </h2>
          <p>
            ClassPro is open-source, developed by a team of two. Our codebase is open for public review, ensuring transparency in data handling. You are welcome to explore or contribute via our official repository:{" "}
            <a
              className="underline decoration-light-accent dark:decoration-dark-accent"
              target="_blank"
              href="https://github.com/Rahuletto/ClassPro"
            >
              Github
            </a>
          </p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color">
          <h2 className="text-2xl mb-2 font-semibold text-light-accent dark:text-dark-accent ">
            8. Your Privacy Rights
          </h2>
          <p>You may request to view or delete your attendance and marks data anytime by contacting us.</p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color">
          <h2 className="text-2xl mb-2 font-semibold text-light-accent dark:text-dark-accent ">
            9. Policy Changes
          </h2>
          <p>We may periodically update this Privacy Policy. Any updates will be posted here, so please review regularly.</p>
        </section>

        <section className="text-base text-light-color dark:text-dark-color">
          <h2 className="text-2xl mb-2 font-semibold text-light-accent dark:text-dark-accent ">
            10. Contact Us
          </h2>
          <p>For any questions or concerns regarding this Privacy Policy, please contact us at Whatsapp.</p>
        </section>
      </div>
    </main>
  );
}
