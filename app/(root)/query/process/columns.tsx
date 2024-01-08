import FilterButton from "@/components/shared/tableThreads/FilterButton";
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
  { accessorKey: 'level', header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[50px]"
          column={column}
          label={"Level"}
        />
      );
    },
  },
  { accessorKey: 'processName', header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Process Name"}
        />
      );
    },
  },
  { accessorKey: 'lastExecutionDate', header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Last Execution Date"}
        />
      );
    },
  },
  { accessorKey: 'duration', header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[50px]"
          column={column}
          label={"Duration"}
        />
      );
    },
  },
  { accessorKey: 'executor', header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Executor"}
        />
      );
    },
  },
  { accessorKey: 'fullLog', header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Full Log"}
        />
      );
    },
  },
  { accessorKey: 'version', header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Version"}
        />
      );
    },
  },
];