import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

export interface QueryLogEntry {
  T_ID: number;
  S_ID: number;
  LEVEL: string;
  TIMESTAMP: string;
  LOGGER: string;
  MESSAGE: string;
}

export const columns:  ColumnDef<QueryLogEntry>[] = [
  { accessorKey: "T_ID", header: "T_ID" },
  { accessorKey: "S_ID", header: "S_ID" },
  {
    accessorKey: "LEVEL",
    header: "LEVEL",
    cell: (info) => (
      <Badge className="p-2" variant="secondary">
        {info.getValue() as string}
      </Badge>
    ),
  },
  { accessorKey: "TIMESTAMP", header: "TIMESTAMP" },
  { accessorKey: "LOGGER", header: "LOGGER" },
  { accessorKey: "MESSAGE", header: "MESSAGE" },
];