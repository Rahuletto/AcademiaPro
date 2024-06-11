import Link from 'next/link';
import { TbMenu2 } from 'react-icons/tb';

import { BiHelpCircle } from 'react-icons/bi';
import { FaGraduationCap, FaLink } from 'react-icons/fa6';
import Skeleton from 'react-loading-skeleton';
import DayOrder from './badges/DayOrder';
import Hour from './badges/Hour';
import Profile from './badges/Profile';
import { DayOrderResponse } from '@/types/DayOrder';
import { useEffect, useRef } from 'react';

import { Hyperping } from '@/utils/hyperping';
import { MdOutlineAutoGraph, MdViewTimeline } from 'react-icons/md';
import { PiExamFill } from 'react-icons/pi';
import { BsCalendar2WeekFill } from 'react-icons/bs';
import ProfileDialog from './ProfileDialog';
import { useUser } from '@/providers/UserProvider';

interface SidebarProps {
  todayTable?: (string | undefined)[] | undefined;
  day?: DayOrderResponse | null;
  page?: 'Home' | 'Calendar' | 'Link';
}

export function Sidebar({ todayTable, day, page }: SidebarProps) {
  const hyper = useRef<any>(null);

  const userInfo = useUser();

  useEffect(() => {
    if (!hyper.current) {
      hyper.current = Hyperping.init({
        statuspage: 'https://academia-pro.hyperping.app',
        border: 'none',
        borderColor: '',
        uptime: false,
        dot: false,
        dotSize: 10,
        isNeutral: false,
        dotOk: '#2BAC76',
        dotIncident: '#FFAF36',
        dotOutage: '#E95858',
        dotMaintenance: '#0070F3',
        dotNeutral: '#0070F3',
        operational: 'Smooth sailing',
        incident: 'Minor incident',
        outage: "Something's off",
        maintenance: 'Under maintainance',
      });
    }

    const btn = document.querySelector('.open');
    const nav = document.querySelector('.nav');
    const navCloser = document.querySelector('.nav-hider');

    function visible(e: any) {
      e.preventDefault();
      nav?.classList.toggle('viewable');
      navCloser?.classList.toggle('viewable');
    }

    function hide() {
      nav?.classList.remove('viewable');
      navCloser?.classList.remove('viewable');
    }

    btn?.addEventListener('click', visible);

    navCloser?.addEventListener('click', hide);

    return () => {
      btn?.removeEventListener('click', visible);
      navCloser?.removeEventListener('click', hide);
    };
  }, []);
  return (
    <>
      <div className="nav-hider"></div>
      <ProfileDialog />
      <div className="nav">
        <div className="navbox">
          <div className="nav-title">
            <a id="hyperping-badge">
              <h1>Academia</h1>
            </a>

            <Link href="/docs">
              <BiHelpCircle title="How to use it like a pro?" />
            </Link>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <>
              {day ? (
                <DayOrder data={day} />
              ) : (
                <Skeleton
                  style={{
                    width: '100px',
                    height: '30px',
                    borderRadius: '12px',
                    opacity: 0.6,
                  }}
                />
              )}
              {todayTable && userInfo && (
                <Hour data={todayTable.filter((e) => e)?.length} />
              )}
            </>
          </div>
          <hr />

          <div className="nav-buttons">
            <Link
              className={
                'h-button' + (!page || page == 'Home' ? ' active' : '')
              }
              href="/academia#timetable"
            >
              Time Table
              <MdViewTimeline style={{ fontSize: 24 }} />
            </Link>

            <Link className="h-button" href="/academia#attendance">
              Attendance
              <MdOutlineAutoGraph style={{ fontSize: 24 }} />
            </Link>

            <Link className="h-button" href="/academia#marks">
              Marks
              <PiExamFill style={{ fontSize: 24 }} />
            </Link>

            <Link
              className={'h-button' + (page == 'Calendar' ? ' active' : '')}
              href="/calendar#today"
            >
              Calendar
              <BsCalendar2WeekFill style={{ fontSize: 24 }} />
            </Link>

            {/* <Link
              className={'h-button' + (page == 'Link' ? ' active' : '')}
              href="/courses"
            >
              Course list
              <FaGraduationCap style={{ fontSize: 22 }} />
            </Link> */}

            <Link
              className={'h-button' + (page == 'Link' ? ' active' : '')}
              href="/links"
            >
              Useful Links
              <FaLink style={{ fontSize: 22 }} />
            </Link>
          </div>
        </div>
        <div className="nav-foot">
          {userInfo ? (
            <Profile data={userInfo} />
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
        </div>
      </div>

      <button name="Open navbar" className="open">
        <TbMenu2 />
      </button>
    </>
  );
}
