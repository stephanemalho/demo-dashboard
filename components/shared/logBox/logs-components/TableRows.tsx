import React from "react";
import { dashboard } from "@/data/dashboard";
import { TableHead, TableRow } from "@/components/ui/table";
import { getLogEntryKeys } from "@/lib/utils/logUtils";

interface TableRowsProps {
  className?: string | undefined;
}

const TableRows = ({ className }: TableRowsProps) => {
  const logKeys = getLogEntryKeys(dashboard.Logs);

  if (!logKeys) return null;

  return (
    <TableRow className={className}>
      {logKeys.map((key) => (
        <TableHead
          key={key as string}
          className="pl-2 font-black text-[12px]  max-2xl:text-[9px]"
        >
          {key}
        </TableHead>
      ))}
    </TableRow>
  );
};

export default TableRows;
