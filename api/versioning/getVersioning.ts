
import { VersioningChoreEntry } from "@/app/(root)/versionning/chore/choreComponents/columns";
import versioningData from "@/data/versioning/chore.json";


export async function getVersioningChoreData(): Promise<VersioningChoreEntry[]> {
  return versioningData ;
}