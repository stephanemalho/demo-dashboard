import { getVersioningChoreData } from "@/api/versioning/getVersioning";
import FilterButton from "@/components/shared/button/FilterButton";
import { loadColumnData } from "@/lib/utils/formatTable";
import { ColumnDef } from "@tanstack/react-table";

export interface VersioningChoreEntry {
  level: string;
  processName: string;
  lastExecutionDate: string;
  duration: string;
  executor: string;
  fullLog: string;
  version: string | null;
}

export const columns: ColumnDef<VersioningChoreEntry>[] = [
  // Définissez ici les colonnes en fonction de la structure de jsonData
  {
    accessorKey: "level",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[50px]" column={column} label={"Level"} loadDataFunction={() => loadColumnData(getVersioningChoreData, column.id as keyof VersioningChoreEntry)}/>
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
          loadDataFunction={() => loadColumnData(getVersioningChoreData, column.id as keyof VersioningChoreEntry)}
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
          loadDataFunction={() => loadColumnData(getVersioningChoreData, column.id as keyof VersioningChoreEntry)}
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
          loadDataFunction={() => loadColumnData(getVersioningChoreData, column.id as keyof VersioningChoreEntry)}
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
          loadDataFunction={() => loadColumnData(getVersioningChoreData, column.id as keyof VersioningChoreEntry)}
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
          loadDataFunction={() => loadColumnData(getVersioningChoreData, column.id as keyof VersioningChoreEntry)}
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
          loadDataFunction={() => loadColumnData(getVersioningChoreData, column.id as keyof VersioningChoreEntry)}
        />
      );
    },
  },
];
