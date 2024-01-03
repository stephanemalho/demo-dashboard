import React from "react";
import VersioningRule from "./VersioningRule";

export interface VersioningRuleConfig {
  id: string;
  component: React.FC;
  title: string;
  lastTable: boolean;
}

const versioningRuleConfig  = [
  {
    id: "VersioningRule",
    component: VersioningRule ,  
    title: "Versioning Rule",
    lastTable: false,
  },
];

export default versioningRuleConfig;