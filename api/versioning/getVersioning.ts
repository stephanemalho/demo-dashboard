
import { VersioningChoreEntry } from "@/app/(root)/versionning/chore/choreComponents/columns";
import { VersioningProcessEntry } from "@/app/(root)/versionning/process/processComponents/columns";
import versioningChoreData from "@/data/versioning/chore.json";
import versioningProcessData from "@/data/versioning/process.json";


export async function getVersioningChoreData(): Promise<VersioningChoreEntry[]> {
  return versioningChoreData ;
}

export async function getVersioningProcessData(): Promise<VersioningProcessEntry[]> {
  return versioningProcessData ;
}