import { ColumnDef } from "@tanstack/react-table";

export interface VersioningRuleEntry {
  level: string;
  processName: string;
  lastExecutionDate: string;
  duration: string;
  executor: string;
  fullLog: string;
  version: string | null;
}

export const columns: ColumnDef<VersioningRuleEntry>[] = [
  // Définissez ici les colonnes en fonction de la structure de jsonData
  { accessorKey: "level", header: "Level" },
  { accessorKey: "processName", header: "Process Name" },
  { accessorKey: "lastExecutionDate", header: "Last Execution Date" },
  { accessorKey: "duration", header: "Duration" },
  { accessorKey: "executor", header: "Executor" },
  { accessorKey: "fullLog", header: "Full Log" },
  { accessorKey: "version", header: "Version" },
];