import { getQueryChoresData } from "@/api/query/getQuery";
import FilterButton from "@/components/shared/button/FilterButton";
import { loadColumnData } from "@/lib/utils/formatTable";
import { ColumnDef } from "@tanstack/react-table";

export interface QueryChoresEntry {
  level: string;
  processName: string;
  lastExecutionDate: string;
  duration: string;
  executor: string;
  fullLog: string;
  version: string | null;
}

export const columns: ColumnDef<QueryChoresEntry>[] = [
  {
    accessorKey: "level",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[50px]"
          column={column}
          label={"Level"}
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QueryChoresEntry)}
        />
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
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QueryChoresEntry)}
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
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QueryChoresEntry)}
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
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QueryChoresEntry)}
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
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QueryChoresEntry)}
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
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QueryChoresEntry)}
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
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QueryChoresEntry)}
        />
      );
    },
  },
];

export interface QuerySelectedChore {
  level: string;
  processName: string;
  lastExecutionDate: string;
  duration: string;
  executor: string;
  fullLog: string;
  version: string | null;
}

export const selectedColumns: ColumnDef<QuerySelectedChore>[] = [
  {
    accessorKey: "level",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Level"}
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QuerySelectedChore)}
        />
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
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QuerySelectedChore)}
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
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QuerySelectedChore)}
        />
      );
    },
  },
  {
    accessorKey: "duration",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Duration"}
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QuerySelectedChore)}
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
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QuerySelectedChore)}
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
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QuerySelectedChore)}
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
          loadDataFunction={() => loadColumnData(getQueryChoresData, column.id as keyof QuerySelectedChore)}
        />
      );
    },
  },
];
