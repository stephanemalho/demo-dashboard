import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import FilterButton from "@/components/shared/tables/FilterButton";

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
        <FilterButton minSize="min-w-[100px]" column={column} label={"T_ID"} />
      );
    },
  },
  {
    accessorKey: "S_ID",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[100px]" column={column} label={"S_ID"} />
      );
    },
  },
  {
    accessorKey: "LEVEL",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[100px]" column={column} label={"Level"} />
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
        />
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
        />
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
        />
      );
    },
  },
];
