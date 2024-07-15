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
    if (userInfo?.userInfo && table) {
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

      <main className="flex h-full min-h-[97vh] flex-col items-center justify-center">
        <button
          type="button"
          className="fixed left-6 top-6 rounded-full bg-red px-4 py-2 text-xl text-background"
          onClick={() => router.back()}
        >
          <FaCaretLeft />
        </button>
        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
          <h2>
            {userInfo?.userInfo.section} - {userInfo?.userInfo.classroom}
          </h2>
          {data && table ? (
            <Image
              className="tt-page scale-95 rounded-3xl"
              alt="timetable"
              src={data}
              width={2000}
              height={766}
            />
          ) : (
            <Skeleton
              height={400}
              containerClassName="w-[80vw] h-96 mt-3"
              style={{ borderRadius: 32 }}
            />
          )}
        </div>
        <a
          href={data}
          download={`${userInfo?.userInfo.section}-${userInfo?.userInfo.classroom}-timetable.png`}
          className="download fixed bottom-5"
          style={{ paddingLeft: "24px", paddingRight: "24px", fontSize: 18 }}
        >
          Download
        </a>
      </main>
    </>
  );
}
