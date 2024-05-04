import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { Sidebar } from '@/components/Sidebar';
import { useDay } from '@/providers/DayProvider';
import { useUser } from '@/providers/UserProvider';
import styles from '@/styles/Links.module.css';
import { LinkUrl } from '@/types/Links';
import { getCookie } from '@/utils/cookies';
import { priorityUrl, urls } from '@/utils/links';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';

export default function Urls() {
  const router = useRouter();
  const userInfo = useUser();
  const day = useDay();

  const [array, setArray] = useState<LinkUrl[]>(urls);
  const [fuse, setFuse] = useState<Fuse<LinkUrl> | null>(null);

  const [search, setSearch] = useState('');

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
        keys: ['site', 'url'],
      }),
    );

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
              <div className={styles.usefulLinks}>
                <h3>Official Sites</h3>
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
              <div className={styles.usefulLinks}>
                <h3>Unofficial Sites</h3>
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
