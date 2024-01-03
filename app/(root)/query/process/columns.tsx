import { ColumnDef } from "@tanstack/react-table";

export interface QueryProcessEntry {
  level: string;
  processName: string;
  lastExecutionDate: string;
  duration: string;
  executor: string;
  fullLog: string;
  version: string | null;
}

export const columns: ColumnDef<QueryProcessEntry>[] = [
  { accessorKey: 'level', header: 'Level' },
  { accessorKey: 'processName', header: 'Process Name' },
  { accessorKey: 'lastExecutionDate', header: 'Last Execution Date' },
  { accessorKey: 'duration', header: 'Duration' },
  { accessorKey: 'executor', header: 'Executor' },
  { accessorKey: 'fullLog', header: 'Full Log' },
  { accessorKey: 'version', header: 'Version' },
];