// tableConfig.js
import LiveThreads from "@/components/shared/tableThreads/LiveThreads";
import LiveLogs from "@/components/shared/logBox/Logs";

export interface TableConfig {
  id: string;
  component: any;
  title: string;
  lastTable: boolean;
}

const tableConfig  = [
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