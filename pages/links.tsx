import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/Links.module.css';

const priorityUrl = [
  {
    site: 'Better-Lab',
    url: 'https://better-lab.vercel.app',
    starlet: true,
  },
  {
    site: 'Grade Calculator',
    url: 'https://gradex.vercel.app',
    starlet: true,
  },
];
const urls = [
  {
    site: "What's in my mess",
    url: 'https://whatsinmess.vercel.app/',
  },
  {
    site: 'Leave Portal',
    url: 'http://10.1.105.62/srmleaveapp',
  },
  {
    site: 'Map',
    url: '/map',
  },

  {
    site: 'Events',
    url: 'https://www.srmist.edu.in/events/',
  },

  {
    site: 'Weather',
    url: 'https://srmaoml.wixsite.com/home/forecast',
  },
  {
    site: 'Staff Finder',
    url: 'https://www.srmist.edu.in/staff-finder/',
  },
  {
    site: 'Course Feedback',
    url: 'https://academia.srmist.edu.in/#Course_Feedback',
  },
  {
    site: 'Online Education',
    url: 'https://www.srmonline.in/',
  },
  {
    site: 'Online Resources',
    url: 'https://www.srmist.edu.in/library/online-resources/',
  },
  {
    site: 'Student Portal',
    url: 'https://sp.srmist.edu.in',
  },
  {
    site: 'E-Library',
    url: 'https://emanager.srmist.edu.in/elibrary/',
  },
  {
    site: 'Service Request',
    url: '/ssr',
  },
  {
    site: 'Hostel Booking',
    url: 'https://sp.srmist.edu.in',
  },
  {
    site: 'Bus Booking',
    url: 'https://sp.srmist.edu.in',
  },
  {
    site: 'SRM Website',
    url: 'https://srmist.edu.in',
  },
  {
    site: 'SRM Wifi',
    url: 'https://iac.srmist.edu.in/Connect/PortalMain',
  },
].sort(function (a, b) {
  if (a.site < b.site) {
    return -1;
  }
  if (a.site > b.site) {
    return 1;
  }
  return 0;
});

const DayOrder = dynamic(
  () => import('@/components/badges/DayOrder').then((mod) => mod.default),
  { ssr: false },
);

const Hour = dynamic(
  () => import('@/components/badges/Hour').then((mod) => mod.default),
  { ssr: false },
);

const Profile = dynamic(
  () => import('@/components/badges/Profile').then((mod) => mod.default),
  { ssr: false },
);

import type { DayOrderResponse } from '@/types/DayOrder';
import type { InfoResponse } from '@/types/UserInfo';

import { getCookie, clearCookies } from '@/utils/cookies';

import Loader from '@/components/Loader';
import Header from '@/components/Header';
import { FaCalendar, FaLink } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import Fuse from 'fuse.js';
import { URL } from '@/utils/url';
import { BiHelpCircle } from 'react-icons/bi';
import { Sidebar } from '@/components/Sidebar';

export default function Urls() {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState<InfoResponse | null>(null);
  const [day, setDay] = useState<DayOrderResponse | null>(null);

  const [array, setArray] = useState(urls);
  const [fuse, setFuse] = useState<any>(null);

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (fuse) {
      const searched = fuse.search(search);
      setArray(searched[0] ? searched : urls);
    }
  }, [search, fuse]);

  useEffect(() => {
    setFuse(
      new Fuse(urls, {
        keys: ['site', 'url'],
      }),
    );

    const info = localStorage.getItem('userData');
    if (info && info?.length > 1) setUserInfo(JSON.parse(info));
    else {
      fetch(`${URL}/api/info`, {
        method: 'GET',
        headers: {
          'X-CSRF-Token': getCookie('token') as string,
          'Set-Cookie': getCookie('token') as string,
          Cookie: getCookie('token') as string,
          Connection: 'keep-alive',
          'content-type': 'application/json',
        },
      })
        .then((e) => e.json())
        .then((data) => {
          setUserInfo(data);
        });
    }

    fetch(`${URL}/api/dayorder`, {
      method: 'GET',
      headers: {
        'X-CSRF-Token': getCookie('token') as string,
        'Set-Cookie': getCookie('token') as string,
        Cookie: getCookie('token') as string,
        Connection: 'keep-alive',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Cache-Control': 's-maxage=86400, stale-while-revalidate=7200',
      },
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.token_refresh) {
          clearCookies();
          window.location.reload();
        } else {
          setDay(res);
        }
      });

    if (!getCookie('token')) router.push('/login');

    const searchbox = document.getElementById('searchbox');

    window.addEventListener('keydown', (e) => {
      if (e.metaKey && e.key == 'k') {
        e.preventDefault();
        searchbox?.focus();
      } else if (e.key == '/') {
        e.preventDefault();
        searchbox?.focus();
      }
      if (e.key == 'Escape') searchbox?.blur();
    });
  }, []);

  return (
    <>
      <Loader />
      <Header title={'Directory | AcademiaPro'} />

      <main className="root">
        <Sidebar userInfo={userInfo} day={day} page="Link" />

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
                  <span
                    style={{
                      display: 'inline-flex',
                      gap: 16,
                      alignItems: 'center',
                    }}
                  >
                    {k.site}{' '}
                    <GoDotFill
                      title="Starlet websites"
                      style={{ color: '#6C479A' }}
                    />
                  </span>
                  <Link href={k.url} className={styles.url}>
                    {k.url}
                  </Link>
                  <Link href={k.url} className={styles.mobile}>
                    Open
                  </Link>
                </div>
              ))}
            </div>
            <span> </span>
            {array.map((k: any, i) => (
              <div className={styles.urlBox} key={i}>
                <span>{k.item ? k.item.site : k.site}</span>
                <Link href={k.item ? k.item.url : k.url} className={styles.url}>
                  {k.item ? k.item.url : k.url}
                </Link>
                <Link
                  href={k.item ? k.item.url : k.url}
                  className={styles.mobile}
                >
                  Open
                </Link>
              </div>
            ))}
            <div style={{ marginBottom: 64 }} />
          </div>
        </div>
      </main>
    </>
  );
}
