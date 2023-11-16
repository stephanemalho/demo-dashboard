import React from 'react';
import { dashboard } from "@/data/dashboard";
import { TableHead, TableRow } from "@/components/ui/table";
import { getLogEntryKeys } from '@/utils/logUtils';

interface TableRowsProps {
  className?: string | undefined;
}

const TableRows = ({ className }: TableRowsProps) => {
  const logKeys = getLogEntryKeys(dashboard.Logs);

  if (!logKeys) return null;

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
