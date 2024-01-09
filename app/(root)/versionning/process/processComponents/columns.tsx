import { getVersioningProcessData } from "@/api/versioning/getVersioning";
import FilterButton from "@/components/shared/button/FilterButton";
import { loadColumnData } from "@/lib/utils/formatTable";
import { ColumnDef } from "@tanstack/react-table";

export interface VersioningProcessEntry {
  level: string;
  processName: string;
  lastExecutionDate: string;
  duration: string;
  executor: string;
  fullLog: string;
  version: string | null;
}

export const columns: ColumnDef<VersioningProcessEntry>[] = [
  // Définissez ici les colonnes en fonction de la structure de jsonData
  {
    accessorKey: "level",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[50px]" column={column} label={"Level"}  loadDataFunction={() => loadColumnData(getVersioningProcessData, column.id as keyof VersioningProcessEntry)}/>
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
          loadDataFunction={() => loadColumnData(getVersioningProcessData, column.id as keyof VersioningProcessEntry)}
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
          loadDataFunction={() => loadColumnData(getVersioningProcessData, column.id as keyof VersioningProcessEntry)}
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
          loadDataFunction={() => loadColumnData(getVersioningProcessData, column.id as keyof VersioningProcessEntry)}
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
          loadDataFunction={() => loadColumnData(getVersioningProcessData, column.id as keyof VersioningProcessEntry)}
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
          loadDataFunction={() => loadColumnData(getVersioningProcessData, column.id as keyof VersioningProcessEntry)}
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
          loadDataFunction={() => loadColumnData(getVersioningProcessData, column.id as keyof VersioningProcessEntry)}
        />
      );
    },
  },
];
