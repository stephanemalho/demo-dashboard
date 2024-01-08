import { dashboard } from "@/data/dashboard";
import { Threads } from "@/app/(root)/dashboard/thread-components/columns";
import { DashboardLogEntry } from "@/app/(root)/dashboard/logs-components/columns";

export async function getDashboardData(): Promise<Threads[]> {
  const data = dashboard;
  const threads = data.Threads;

  return Object.keys(threads).map((logKey) => {
    const threadsEntry = threads[logKey as unknown as keyof typeof threads];
    return {
      id: threadsEntry.ID,
      function: threadsEntry.Function,
      user: threadsEntry.Name,
      type: threadsEntry.Type,
      context: threadsEntry.Context,
      waitTime: threadsEntry.WaitTime,
      elapsedTime: threadsEntry.ElapsedTime,
      state: threadsEntry.State,
      delete: threadsEntry.ID,
      actions: [],
    };
  });
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