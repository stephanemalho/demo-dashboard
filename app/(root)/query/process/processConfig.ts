import React from "react";
import QueryProcessTable from "./QueryProcess";

export interface ProcessConfig {
  id: string;
  component: React.FC;
  title: string;
  lastTable: boolean;
}

const processConfig = [
  {
    id: "process",
    component: QueryProcessTable,
    title: "Last Process Execution",
    lastTable: false,
  },
  {
    id: "process-history",
    component: QueryProcessTable,
    title: "Selected Process History",
    lastTable: true,
  },
];

export default processConfig;
