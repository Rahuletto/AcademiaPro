import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { Sidebar } from "@/components/Sidebar";
import { useDay } from "@/providers/DayProvider";
import { useUser } from "@/providers/UserProvider";
import styles from "@/styles/Links.module.css";
import type { LinkUrl } from "@/types/Links";
import { getCookie } from "@/utils/cookies";
import { priorityUrl, urls } from "@/utils/links";
import Fuse from "fuse.js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Urls() {
  const router = useRouter();
  const userInfo = useUser();
  const day = useDay();

  const [array, setArray] = useState<LinkUrl[]>(urls);
  const [fuse, setFuse] = useState<Fuse<LinkUrl> | null>(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (fuse) {
      const searched = fuse.search(search);
      const tempArr = searched.map((obj) => obj.item);
      setArray(tempArr[0] ? tempArr : urls);
    }
  }, [search, fuse]);

  useEffect(() => {
    setFuse(
      new Fuse(urls, {
        keys: ["site", "url"],
      }),
    );

    if (!getCookie("token")) router.push("/login");

    const searchbox = document.getElementById("searchbox");

    window.addEventListener("keydown", (e) => {
      if (e.metaKey && e.key === "k") {
        e.preventDefault();
        searchbox?.focus();
      } else if (e.key === "/") {
        e.preventDefault();
        searchbox?.focus();
      }
      if (e.key === "Escape") searchbox?.blur();
    });
  }, []);

  return (
    <>
      <Loader />
      <Header title={"Directory | AcademiaPro"} />

      <main className="root">
        <Sidebar day={day} page="Link" />

        <div className="content">
          <input
            id="searchbox"
            className={styles.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
          <div className={styles.linkGrid}>
            <div className={styles.urlBox} style={{ marginBottom: 18 }}>
              <h2>Websites</h2>
              <h2>URLs</h2>
            </div>
            <div className={styles.priority}>
              {priorityUrl.map((k, i) => (
                <div className={styles.urlBox} title="Sites we made" key={i}>
                  <span className="inline-flex items-center gap-4">
                    {k.site}{" "}
                  </span>
                  <Link
                    style={{
                      backgroundColor: "#3E80D7",
                      color: "var(--background-dark)",
                    }}
                    href={k.url}
                    className={styles.url}
                  >
                    {k.url}
                  </Link>
                  <Link
                    style={{
                      backgroundColor: "#3E80D7",
                      color: "var(--background-dark)",
                    }}
                    href={k.url}
                    className={styles.mobile}
                  >
                    Open
                  </Link>
                </div>
              ))}
            </div>
            <span> </span>
            {array.filter((url) => url.type === "official").length > 0 ? (
              <div className={styles.usefulLinks}>
                <h3>Official Sites</h3>
                {array
                  .filter((link) => link.type === "official")
                  .map((k: LinkUrl, i) => (
                    <div className={styles.urlBox} key={i}>
                      <span>{k.site}</span>
                      <Link href={k.url} className={styles.url}>
                        {k.url}
                      </Link>
                      <Link href={k.url} className={styles.mobile}>
                        Open
                      </Link>
                    </div>
                  ))}
              </div>
            ) : null}
            {array.filter((url) => url.type === "unofficial").length > 0 ? (
              <div className={styles.usefulLinks}>
                <h3>Unofficial Sites</h3>
                {array
                  .filter((link) => link.type === "unofficial")
                  .map((k: LinkUrl, i) => (
                    <div className={styles.urlBox} key={i}>
                      <span>{k.site}</span>
                      <Link href={k.url} className={styles.url}>
                        {k.url}
                      </Link>
                      <Link href={k.url} className={styles.mobile}>
                        Open
                      </Link>
                    </div>
                  ))}
              </div>
            ) : null}

            <div className="mt-16">
              <Footer />
            </div>

            <div className="mt-16" />
          </div>
        </div>
      </main>
    </>
  );
}
