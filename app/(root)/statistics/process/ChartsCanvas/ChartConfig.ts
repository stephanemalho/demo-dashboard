import dynamic from 'next/dynamic';
import EmptyChart from './EmptyChart';

const RamAndGarbage = dynamic(() => import('./RamAndGarbage'), { ssr: false });
const ActiveThreads = dynamic(() => import('./ActiveThreads'), { ssr: false });
const StartupTime = dynamic(() => import('./StartupTime'), { ssr: false });

const chartConfig = [
  {
    title: "RAM & Garbage Use",
    Component: RamAndGarbage,
    props: {} 
  },
  {
    title: "Active Threads & Connected Users",
    Component: ActiveThreads,
    props: {}
  },
  {
    title: "Startup Time Historic",
    Component: StartupTime,
    props: {}
  },
  {
    title: "Request & Error Rates",
    Component: EmptyChart,
    props: {}
  }
];

export default chartConfig;