import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import type { TimeTableResponse } from "@/types/TimeTable";

import { getCookie, clearCookies } from "@/utils/cookies";

import Header from "@/components/Header";
import Image from "next/image";

export default function Timetable() {

  const [data, setData] = useState('');

  useEffect(() => {
    const da = localStorage.getItem("userData");
    console.log(da)
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
        console.log(imageUrl)
      });
  }, []);

  return (
    <>
      <Header title={"Timetable | AcademiaPro"} />

      <main className="root">{data && <Image className='tt-page' alt='timetable' src={data} width={2400} height={920} />}</main>
    </>
  );
}
