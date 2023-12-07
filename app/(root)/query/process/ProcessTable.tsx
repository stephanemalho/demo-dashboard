import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import React from "react";
import processConfig, { ProcessConfig } from "./processConfig";


const ProcessTables = () => {
  return (
    <>
      {processConfig.map((process : ProcessConfig) => (
        <LiveContainer
          key={process.id}
          logHeight="h-[44vh] max-2xl:h-[38vh]"
          title={process.title}
          label={process.title}
        >
          <process.component />
        </LiveContainer>
      ))}
    </>
  );
};

export default ProcessTables;