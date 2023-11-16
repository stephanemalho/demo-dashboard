import React from 'react';
import { LogEntry, dashboard } from "@/data/dashboard";
import { TableHead, TableRow } from "@/components/ui/table";

interface TableRowsProps {
  className?: string | undefined;
}

const TableRows = ({ className }: TableRowsProps) => {
  if (!dashboard.Logs || Object.keys(dashboard.Logs).length === 0) {
    return null;
  }
  const firstLogKey = Object.keys(dashboard.Logs)[0] as unknown as keyof typeof dashboard.Logs;
  const firstLogEntry = dashboard.Logs[firstLogKey];

  const logKeys = Object.keys(firstLogEntry).filter(key => key !== 'ID') as (keyof LogEntry)[];

  return (
    <TableRow className={className}>
      {logKeys.map((key) => (
        <TableHead key={key as string} className="pl-2">
          {key}
        </TableHead>
      ))}
    </TableRow>
  );
};

export default TableRows;
