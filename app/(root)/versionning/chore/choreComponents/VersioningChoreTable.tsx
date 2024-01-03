import React from "react";

import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import versioningChoreConfig, { VersioningChoreConfig } from "./versioningChoreConfig";

const VersioningChoreTables = () => {
  return (
    <>
      {versioningChoreConfig.map((versioningChore : VersioningChoreConfig ) => (
        <LiveContainer
          key={versioningChore.id}
          logHeight="h-[44vh] max-2xl:h-[38vh]"
          title={versioningChore.title}
          label={versioningChore.title}
        >
          <versioningChore.component />
        </LiveContainer>
      ))}
    </>
  );
};

export default VersioningChoreTables;