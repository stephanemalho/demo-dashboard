import React from "react";

import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import versioningRuleConfig, { VersioningRuleConfig } from "./versioningRuleConfig";

const VersioningRuleTable = () => {
  return (
    <>
      {versioningRuleConfig.map((versioningRule : VersioningRuleConfig ) => (
        <LiveContainer
          key={versioningRule.id}
          logHeight="h-[44vh] max-2xl:h-[38vh]"
          title={versioningRule.title}
          label={versioningRule.title}
        >
          <versioningRule.component />
        </LiveContainer>
      ))}
    </>
  );
};

export default VersioningRuleTable;