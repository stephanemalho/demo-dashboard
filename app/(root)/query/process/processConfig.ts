import React from "react";
import DummyDataTable from "./QueryProcess";

export interface ProcessConfig {
  id: string;
  component: React.FC;
  title: string;
  lastTable: boolean;
}

const processConfig = [
  {
    id: "process",
    component: DummyDataTable,
    title: "Last Process Execution",
    lastTable: false,
  },
  {
    id: "process-history",
    component: DummyDataTable,
    title: "Selected Process History",
    lastTable: true,
  },
];

export default processConfig;
