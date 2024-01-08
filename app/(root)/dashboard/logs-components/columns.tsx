import FilterButton from "@/components/shared/tables/FilterButton";
import { formatLogDate } from "@/lib/utils/date";
import { ColumnDef } from "@tanstack/react-table";

export interface DashboardLogEntry {
  ID: string;
  ThreadID: string;
  SessionID: string;
  Level: string;
  TimeStamp: string;
  Logger: string;
  Message: string;
}

export const columns: ColumnDef<DashboardLogEntry>[] = [
  // Définissez ici les colonnes en fonction de la structure de jsonData
  {
    accessorKey: "ThreadID",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"ThreadID"}
        />
      );
    },
  },
  {
    accessorKey: "SessionID",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"SessionID"}
        />
      );
    },
  },
  {
    accessorKey: "Level",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[100px]" column={column} label={"Level"} />
      );
    },
  },
  {
    accessorKey: "TimeStamp",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"TimeStamp"}
        />
      );
    },
    cell: (info) => {
      const formattedTimestamp = formatLogDate(info);
      return <span>{formattedTimestamp}</span>;
    },
  },
  {
    accessorKey: "Logger",
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
    accessorKey: "Message",
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
