
import { VersioningChoreEntry } from "@/app/(root)/versionning/chore/choreComponents/columns";
import { VersioningProcessEntry } from "@/app/(root)/versionning/process/processComponents/columns";
import { VersioningRuleEntry } from "@/app/(root)/versionning/rule-page/ruleComponents/columns";

import versioningChoreData from "@/data/versioning/chore.json";
import versioningProcessData from "@/data/versioning/process.json";
import versioningRuleData from "@/data/versioning/rule.json";


export async function getVersioningChoreData(): Promise<VersioningChoreEntry[]> {
  return versioningChoreData ;
}

export async function getVersioningProcessData(): Promise<VersioningProcessEntry[]> {
  return versioningProcessData ;
}

export async function getVersioningRuleData(): Promise<VersioningRuleEntry[]> {
  return versioningRuleData ;
}