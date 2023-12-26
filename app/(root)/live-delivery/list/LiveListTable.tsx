import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import React from "react";
import liveListConfig, { LiveListConfig } from "./liveListConfig";

const LiveListTables = () => {
  return (
    <>
      {liveListConfig.map((list: LiveListConfig) => (
        <LiveContainer
          key={list.id}
          logHeight="h-[80vh] max-2xl:h-[80vh]"
          title={list.title}
          label={list.title}
        >
          <list.component />
        </LiveContainer>
      ))}
    </>
  );
};

export default LiveListTables;
