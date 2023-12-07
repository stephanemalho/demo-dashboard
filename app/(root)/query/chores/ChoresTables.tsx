import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import React from "react";
import choresConfig, { ChoresConfig } from "./choresConfig";


const ChoresTables = () => {
  return (
    <>
      {choresConfig.map((process : ChoresConfig) => (
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

export default ChoresTables;