import React from "react";
import queryLogsConfig, { QueryLogsConfig } from "./logsConfig";
import LiveContainer from "@/components/shared/boxContainer/LiveContainer";


const QueryLogsTables = () => {
  return (
    <>
      {queryLogsConfig.map((queryLogs : QueryLogsConfig) => (
        <LiveContainer
          key={queryLogs.id}
          logHeight="h-[44vh] max-2xl:h-[38vh]"
          title={queryLogs.title}
          label={queryLogs.title}
        >
          <queryLogs.component />
        </LiveContainer>
      ))}
    </>
  );
};

export default QueryLogsTables;