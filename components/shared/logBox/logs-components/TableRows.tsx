import React from "react";
import { TableHead, TableRow } from "@/components/ui/table";

interface TableRowsProps {
  className?: string | undefined;
}

const TableRows = ({className} : TableRowsProps) => {
  return (
    <TableRow className={className}>
      <TableHead>ThreadId</TableHead>
      <TableHead>SessionID</TableHead>
      <TableHead>Level</TableHead>
      <TableHead>TimeStamp</TableHead>
      <TableHead>Logger</TableHead>
      <TableHead>Message</TableHead>
    </TableRow>
  );
};

export default TableRows;
