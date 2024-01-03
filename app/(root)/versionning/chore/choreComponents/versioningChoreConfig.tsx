import React from "react";
import VersioningChore from "./VersioninChore";

export interface VersioningChoreConfig {
  id: string;
  component: React.FC;
  title: string;
  lastTable: boolean;
}

const versioningChoreConfig  = [
  {
    id: "VersioningChore",
    component: VersioningChore ,  
    title: "Versioning Chore",
    lastTable: false,
  },
];

export default versioningChoreConfig;