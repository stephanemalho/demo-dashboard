import React from "react";
import VersioningProcess from "./VersioningProcess";

export interface VersioningProcessConfig {
  id: string;
  component: React.FC;
  title: string;
  lastTable: boolean;
}

const versioningProcessConfig  = [
  {
    id: "VersioningProcess",
    component: VersioningProcess ,  
    title: "Versioning Process",
    lastTable: false,
  },
];

export default versioningProcessConfig;