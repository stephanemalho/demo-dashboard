// tableConfig.js
import LiveThreads from "@/app/(root)/dashboard/thread-components/LiveThreads";
import LiveLogs from "@/app/(root)/dashboard/logs-components/LiveLogs";

export interface TableConfig {
  id: string;
  component: any;
  title: string;
  lastTable: boolean;
}

const tableConfig = [
  {
    id: "liveThreads",
    component: LiveThreads,
    title: "Live Threads",
    lastTable: false,
  },
  {
    id: "logs",
    component: LiveLogs,
    title: "Live Logs",
    lastTable: true,
  },
];

export default tableConfig;
