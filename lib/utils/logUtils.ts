import { LogsRecord } from "@/data/dashboard";

export const getLogEntryKeys = (logs : LogsRecord) => {
  if (!logs || Object.keys(logs).length === 0) {
    return [];
  }
  const firstLogKey = Object.keys(logs)[0];
  const firstLogEntry = logs[firstLogKey];

  return Object.keys(firstLogEntry).filter(key => key !== 'ID');
};