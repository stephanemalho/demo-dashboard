import { dashboard } from "@/data/dashboard";
import { Threads } from "@/app/(root)/dashboard/thread-components/columns";
import { DashboardLogEntry } from "@/app/(root)/dashboard/logs-components/columns";

import LiveThreads from "@/data/dashboard/threads.json";

export async function getDashboardData(): Promise<Threads[]> {
    return LiveThreads;
}

export async function getLogsData(): Promise<DashboardLogEntry[]> {
  const data = dashboard;
  const LogsData = data.Logs;

  return Object.keys(LogsData).map((logKey) => {
    const logEntry = LogsData[logKey as unknown as keyof typeof LogsData];
    return {
      ID: logEntry.ID.toString(), // Convertissez 'ID' en chaîne ici
      ThreadID: logEntry.ThreadID.toString(),
      SessionID: logEntry.SessionID.toString(),
      Level: logEntry.Level,
      TimeStamp: logEntry.TimeStamp,
      Logger: logEntry.Logger,
      Message: logEntry.Message,
    };
  });
}