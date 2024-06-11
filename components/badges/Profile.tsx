import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '@/styles/Profile.module.css';
import { useEffect, useState } from 'react';
import { clearCookies } from '@/utils/cookies';
import { InfoResponse } from '@/types/UserInfo';
import { useRouter } from 'next/router';
import { IoMdLogOut } from 'react-icons/io';
import { FaUserGraduate } from 'react-icons/fa6';

export default function Profile({ data }: { data: InfoResponse | null }) {
  const [name, setName] = useState('');
  const router = useRouter();

  function logoutSequence() {
    const out = confirm('Are you sure want to log out?');
    if (out) {
      clearCookies();
      router.push('/');
    } else return;
  }

  useEffect(() => {
    if (data && data?.userInfo)
      setName(
        data?.userInfo?.name
          .toLowerCase()
          .split(' ')
          .filter((a: string) => a.length != 1)
          .join(' '),
      );
  }, [data]);

  return (
    <>
      {data?.userInfo && name ? (
        <div className={styles.pill}>
          <div className={styles.pic}>
            <span>{name[0]}</span>
          </div>
          <h3 className={styles.name}>
            {name.slice(0, 20) +
              (name.length == name.slice(0, 20).length ? '' : '...')}
          </h3>
          <button
            name="user"
            className={styles.userInfo}
            title="User Info"
            onClick={() => {
              logoutSequence();
            }}
          >
            <FaUserGraduate />
          </button>
        </div>
      ) : (
        <Skeleton
          style={{
            width: '100%',
            height: '64px',
            borderRadius: '12px',
            opacity: 0.6,
          }}
        />
      )}
    </>
  );
}
