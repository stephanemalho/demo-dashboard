import { QueryLogEntry } from "@/app/(root)/query/logs-page/columns";
import jsonData from "@/data/logQuery.json";

export async function getQueryLogData(): Promise<QueryLogEntry[]> {
  return jsonData;
}
