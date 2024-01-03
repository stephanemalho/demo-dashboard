import React from "react";
import QueryLogs from "./QueryLogs";


export interface QueryLogsConfig {
  id: string;
  component: React.FC;
  title: string;
  lastTable: boolean;
}

const queryLogsConfig  = [
  {
    id: "QueryLogs",
    component: QueryLogs  ,  
    title: "Query Logs",
    lastTable: false,
  },
];

export default queryLogsConfig;