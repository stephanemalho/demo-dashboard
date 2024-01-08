import { formatLogDate } from "@/lib/utils/date";
import { ColumnDef } from "@tanstack/react-table";

export interface DashboardLogEntry {
      ID: string,
      ThreadID: string,
      SessionID: string,
      Level: string,
      TimeStamp: string,
      Logger: string,
      Message: string,
}

export const columns: ColumnDef<DashboardLogEntry>[] = [
  // Définissez ici les colonnes en fonction de la structure de jsonData
  { accessorKey: "ThreadID", header: "ThreadID" },
  { accessorKey: "SessionID", header: "SessionID" },
  { accessorKey: "Level", header: "Level" },
  { accessorKey: "TimeStamp", header: "TimeStamp",
  cell: (info) => {
    const formattedTimestamp = formatLogDate(info);
    return (<span>{formattedTimestamp}</span>);
  }
},
  { accessorKey: "Logger", header: "Logger" },
  { accessorKey: "Message", header: "Message" },
];