import Header from '@/components/Header';
import { useUser } from '@/providers/UserProvider';
import { getCookie } from '@/utils/cookies';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaCaretLeft } from 'react-icons/fa6';
import Skeleton from 'react-loading-skeleton';

export default function Timetable() {
  const router = useRouter();
  const userInfo = useUser();
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(`/api/timetable/${userInfo?.userInfo?.regNo}`, {
      method: 'POST',
      body: JSON.stringify({
        cookies: getCookie('token') as string,
        batch: userInfo?.userInfo?.batch,
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
      <Header title={'Timetable | AcademiaPro'} />

      <main
        className="root"
        style={{ minHeight: '89vh', alignItems: 'center' }}
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
