import React from "react";

import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import versioningProcessConfig, { VersioningProcessConfig } from "./versioningProcessConfig";

const VersioningProcessTables = () => {
  return (
    <>
      {versioningProcessConfig.map((versioningProcess : VersioningProcessConfig ) => (
        <LiveContainer
          key={versioningProcess.id}
          logHeight="h-[44vh] max-2xl:h-[38vh]"
          title={versioningProcess.title}
          label={versioningProcess.title}
        >
          <versioningProcess.component />
        </LiveContainer>
      ))}
    </>
  );
};

export default VersioningProcessTables;