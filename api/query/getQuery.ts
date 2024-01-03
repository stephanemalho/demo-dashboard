import { QueryLogEntry } from "@/app/(root)/query/logs-page/columns";
import logData from "@/data/logQuery.json";
import { QueryProcessEntry } from "@/app/(root)/query/process/columns";
import processData from "@/data/logProcess.json";
import { QueryChoresEntry } from "@/app/(root)/query/chores/columns";
import choresData from "@/data/logChores.json";

export async function getQueryLogData(): Promise<QueryLogEntry[]> {
  return logData;
}

export async function getQueryProcessData(): Promise<QueryProcessEntry[]> {
  return processData;
}

export async function getQueryChoresData(): Promise<QueryChoresEntry[]> {
  return choresData;
}