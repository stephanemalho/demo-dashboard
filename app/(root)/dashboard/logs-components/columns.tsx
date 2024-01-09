
import { getLogsData } from "@/api/dashboard/getDashboardData";
import FilterButton from "@/components/shared/button/FilterButton";
import { formatLogDate } from "@/lib/utils/date";
import { loadColumnData } from "@/lib/utils/formatTable";
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
  {
    accessorKey: "ThreadID",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"ThreadID"}
          loadDataFunction={() => loadColumnData(getLogsData, column.id as keyof DashboardLogEntry)}
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
          loadDataFunction={() => loadColumnData(getLogsData, column.id as keyof DashboardLogEntry)}
        />
      );
    },
  },
  {
    accessorKey: "Level",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[100px]" column={column} label={"Level"} loadDataFunction={async (columnId) => {
          const data = await getLogsData();
          return data.map(item => item[columnId as keyof typeof data[0]]);
        }} />
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
          loadDataFunction={async (columnId) => {

            const data = await getLogsData();
            return data.map(item => item[columnId as keyof typeof data[0]]);
          }}
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
          loadDataFunction={() => loadColumnData(getLogsData, column.id as keyof DashboardLogEntry)}
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
          loadDataFunction={() => loadColumnData(getLogsData, column.id as keyof DashboardLogEntry)}
        />
      );
    },
  },
];
