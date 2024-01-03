import React from "react";

import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import versioningProcessConfig, { VersioningProcessConfig } from "./versioningProcessConfig";

const VersioningProcessTables = () => {
  return (
    <>
      {versioningProcessConfig.map((versioningChore : VersioningProcessConfig ) => (
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

export default VersioningProcessTables;