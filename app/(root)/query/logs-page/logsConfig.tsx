import React from "react";
import DummyQueryLogs from "./DummyQueryLogs";


export interface QueryLogsConfig {
  id: string;
  component: React.FC;
  title: string;
  lastTable: boolean;
}

const queryLogsConfig  = [
  {
    id: "QueryLogs",
    component: DummyQueryLogs  ,  
    title: "Query Logs",
    lastTable: false,
  },
];

export default queryLogsConfig;