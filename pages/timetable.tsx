import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useTimeTable } from "@/providers/TableProvider";
import { useUser } from "@/providers/UserProvider";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaCaretLeft } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";

export default function Timetable() {
  const router = useRouter();
  const userInfo = useUser();
  const table = useTimeTable();

  const [data, setData] = useState("");

  useEffect(() => {
    if (userInfo?.userInfo) {
      fetch(`/api/timetable/${userInfo?.userInfo?.reg}`, {
        method: "POST",
        body: JSON.stringify({
          table: table,
        }),
      })
        .then((d) => d.blob())
        .then((res: Blob | MediaSource) => {
          const imageUrl = URL.createObjectURL(res);
          setData(imageUrl);
        });
    }
  }, [userInfo, table]);

  return (
    <>
      <Header title={"Timetable | AcademiaPro"} />

      <main className="flex h-screen flex-col items-center justify-center">
        <button type="button" className="back-tt" onClick={() => router.back()}>
          <FaCaretLeft />
        </button>
        <div className="flex h-full w-full items-center justify-center">
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
        </div>
        <div className="credHold">
          <Footer />
        </div>
      </main>
    </>
  );
}
