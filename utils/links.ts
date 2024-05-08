import { LinkUrl } from '@/types/Links';

export const priorityUrl = [
  {
    site: 'Better-Lab',
    url: 'https://better-lab.vercel.app',
    type: 'starlet',
  },
  {
    site: 'Grade Calculator',
    url: 'https://gradex.vercel.app',
    type: 'starlet',
  },
];

export const urls: LinkUrl[] = [
  {
    site: "What's in my mess",
    url: 'https://whatsinmess.vercel.app/',
    type: 'unofficial',
  },
  {
    site: 'EveHubSrm',
    url: 'https://evehubsrm.vercel.app/',
    type: 'unofficial',
  },
  // {
  //   site: "MessMenu",
  //   url: 'https://evehubsrm.vercel.app/',
  //   type: 'unofficial',
  // },
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
    site: 'E-Library',
    url: 'https://emanager.srmist.edu.in/elibrary/Home.jsp',
    type: 'official',
  },
{
    site: 'Question papers',
    url: 'http://dspace.srmist.edu.in/dspace',
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
    site: 'Service Desk',
    url: 'https://sd.srmist.edu.in',
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
  {
    site: 'Service desk',
    url: 'https://itkmservicedesk.srmist.edu.in/',
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
