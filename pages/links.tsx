import styles from '@/styles/Links.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
    type: 'unofficial',
  },
  {
    site: 'Leave Portal',
    url: 'http://10.1.105.62/srmleaveapp',
    type: 'official',
  },
  {
    site: 'Map',
    url: '/map',
    type: 'official',
  },

  {
    site: 'Events',
    url: 'https://www.srmist.edu.in/events/',
    type: 'official',
  },

  {
    site: 'Weather',
    url: 'https://srmaoml.wixsite.com/home/forecast',
    type: 'official',
  },
  {
    site: 'Staff Finder',
    url: 'https://www.srmist.edu.in/staff-finder/',
    type: 'official',
  },
  {
    site: 'Course Feedback',
    url: 'https://academia.srmist.edu.in/#Course_Feedback',
    type: 'official',
  },
  {
    site: 'Online Education',
    url: 'https://www.srmonline.in/',
    type: 'official',
  },
  {
    site: 'Online Resources',
    url: 'https://www.srmist.edu.in/library/online-resources/',
    type: 'official',
  },
  {
    site: 'Student Portal',
    url: 'https://sp.srmist.edu.in',
    type: 'official',
  },
  {
    site: 'E-Library',
    url: 'https://emanager.srmist.edu.in/elibrary/',
    type: 'official',
  },
  {
    site: 'Service Request',
    url: '/ssr',
    type: 'official',
  },
  {
    site: 'Hostel Booking',
    url: 'https://sp.srmist.edu.in',
    type: 'official',
  },
  {
    site: 'Bus Booking',
    url: 'https://sp.srmist.edu.in',
    type: 'official',
  },
  {
    site: 'SRM Website',
    url: 'https://srmist.edu.in',
    type: 'official',
  },
  {
    site: 'SRM Wifi',
    url: 'https://iac.srmist.edu.in/Connect/PortalMain',
    type: 'official',
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

import type { DayOrderResponse } from '@/types/DayOrder';
import type { InfoResponse } from '@/types/UserInfo';

import { clearCookies, getCookie } from '@/utils/cookies';

import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { Sidebar } from '@/components/Sidebar';
import { URL } from '@/utils/url';
import Fuse from 'fuse.js';
import { url } from 'inspector';
import { GoDotFill } from 'react-icons/go';

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
            {array.filter((url) => url.type == 'official').length > 0 ? (
              <div className={styles.official}>
                {array
                  .filter((link) => link.type == 'official')
                  .map((k: any, i) => (
                    <div className={styles.urlBox} key={i}>
                      <span>{k.item ? k.item.site : k.site}</span>
                      <Link
                        href={k.item ? k.item.url : k.url}
                        className={styles.url}
                      >
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
              </div>
            ) : null}
            {array.filter((url) => url.type == 'unofficial').length > 0 ? (
              <div className={styles.unofficial}>
                {array
                  .filter((link) => link.type == 'unofficial')
                  .map((k: any, i) => (
                    <div className={styles.urlBox} key={i}>
                      <span>{k.item ? k.item.site : k.site}</span>
                      <Link
                        href={k.item ? k.item.url : k.url}
                        className={styles.url}
                      >
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
              </div>
            ) : null}

            <div style={{ marginBottom: 64 }} />
          </div>
        </div>
      </main>
    </>
  );
}
