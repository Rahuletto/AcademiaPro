import { useEffect, useState } from "react";

import { getCookie } from "@/utils/cookies";

import Header from "@/components/Header";
import Image from "next/image";
import Loader from "@/components/Loader";
import { FaCaretLeft } from "react-icons/fa6";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

export default function Timetable() {
  const router = useRouter();
  const [data, setData] = useState("");

  useEffect(() => {
    const da = localStorage.getItem("userData");
    const user = JSON.parse(da as string);

    fetch(`/api/timetable/${user.userInfo?.regNo}`, {
      method: "POST",
      body: JSON.stringify({
        cookies: getCookie("token") as string,
        batch: user.userInfo?.batch,
      }),
    })
      .then((d) => d.blob())
      .then((res: any) => {
        const imageUrl = URL.createObjectURL(res);
        setData(imageUrl);
      });
  }, []);

  return (
    <>
      <Loader />
      <Header title={"Timetable | AcademiaPro"} />

      <main
        className="root"
        style={{ minHeight: "89vh", alignItems: "center" }}
      >
        <button className="back-tt" onClick={() => router.back()}>
          <FaCaretLeft />
        </button>
        {data ? (
          <Image
            className="tt-page"
            alt="timetable"
            src={data}
            width={2400}
            height={920}
          />
        ) : (
          <Skeleton width={2400} height={920} className="tt-page" />
        )}
      </main>
    </>
  );
}
