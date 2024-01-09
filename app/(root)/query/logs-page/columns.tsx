import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import FilterButton from "@/components/shared/button/FilterButton";
import { getQueryLogData } from "@/api/query/getQuery";
import { loadColumnData } from "@/lib/utils/formatTable";

export interface QueryLogEntry {
  T_ID: number;
  S_ID: number;
  LEVEL: string;
  TIMESTAMP: string;
  LOGGER: string;
  MESSAGE: string;
}

export const columns: ColumnDef<QueryLogEntry>[] = [
  {
    accessorKey: "T_ID",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[100px]" column={column} label={"T_ID"}  loadDataFunction={() => loadColumnData(getQueryLogData, column.id as keyof QueryLogEntry)} />
      );
    },
  },
  {
    accessorKey: "S_ID",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[100px]" column={column} label={"S_ID"} loadDataFunction={() => loadColumnData(getQueryLogData, column.id as keyof QueryLogEntry)}  />
      );
    },
  },
  {
    accessorKey: "LEVEL",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[100px]" column={column} label={"Level"} loadDataFunction={() => loadColumnData(getQueryLogData, column.id as keyof QueryLogEntry)}  />
      );
    },
    cell: (info) => (
      <Badge className="p-2" variant="secondary">
        {info.getValue() as string}
      </Badge>
    ),
  },
  {
    accessorKey: "TIMESTAMP",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Timestamp"}
        loadDataFunction={() => loadColumnData(getQueryLogData, column.id as keyof QueryLogEntry)}  />
      );
    },
  },
  {
    accessorKey: "LOGGER",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Logger"}
        loadDataFunction={() => loadColumnData(getQueryLogData, column.id as keyof QueryLogEntry)}  />
      );
    },
  },
  {
    accessorKey: "MESSAGE",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Message"}
        loadDataFunction={() => loadColumnData(getQueryLogData, column.id as keyof QueryLogEntry)}  />
      );
    },
  },
];
