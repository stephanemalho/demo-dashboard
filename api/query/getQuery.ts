import { QueryLogEntry } from "@/app/(root)/query/logs-page/columns";
import logData from "@/data/logQuery.json";
import { QueryProcessEntry } from "@/app/(root)/query/process/columns";
import processData from "@/data/logProcess.json";

export async function getQueryLogData(): Promise<QueryLogEntry[]> {
  return logData;
}

export async function getQueryProcessData(): Promise<QueryProcessEntry[]> {
  return processData;
}