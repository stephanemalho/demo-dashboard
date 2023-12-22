import ActiveThreads from "./ActiveThreads";
import EmptyChart from "./EmptyChart";
import RamAndGarbage from "./RamAndGarbage";
import StartupTime from "./StartupTime";

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