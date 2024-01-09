import { getQueryProcessData } from "@/api/query/getQuery";
import FilterButton from "@/components/shared/button/FilterButton";
import { loadColumnData } from "@/lib/utils/formatTable";
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
  {
    accessorKey: "level",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[50px]" column={column} label={"Level"} loadDataFunction={() => loadColumnData(getQueryProcessData, column.id as keyof QueryProcessEntry)}/>
      );
    },
  },
  {
    accessorKey: "processName",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Process Name"}
          loadDataFunction={() => loadColumnData(getQueryProcessData, column.id as keyof QueryProcessEntry)}
        />
      );
    },
  },
  {
    accessorKey: "lastExecutionDate",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Last Execution Date"}
          loadDataFunction={() => loadColumnData(getQueryProcessData, column.id as keyof QueryProcessEntry)}
        />
      );
    },
  },
  {
    accessorKey: "duration",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[50px]"
          column={column}
          label={"Duration"}
          loadDataFunction={() => loadColumnData(getQueryProcessData, column.id as keyof QueryProcessEntry)}
        />
      );
    },
  },
  {
    accessorKey: "executor",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Executor"}
          loadDataFunction={() => loadColumnData(getQueryProcessData, column.id as keyof QueryProcessEntry)}
        />
      );
    },
  },
  {
    accessorKey: "fullLog",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Full Log"}
          loadDataFunction={() => loadColumnData(getQueryProcessData, column.id as keyof QueryProcessEntry)}
        />
      );
    },
  },
  {
    accessorKey: "version",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Version"}
          loadDataFunction={() => loadColumnData(getQueryProcessData, column.id as keyof QueryProcessEntry)}
        />
      );
    },
  },
];
