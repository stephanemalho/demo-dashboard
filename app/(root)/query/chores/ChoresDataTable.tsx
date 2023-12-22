"use client";
import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import jsonData from "../../../../data/chores.json";

const columns: ColumnDef<(typeof jsonData)[0]>[] = [
  // Définissez ici les colonnes en fonction de la structure de jsonData
  { accessorKey: "level", header: "Level" },
  { accessorKey: "processName", header: "Process Name" },
  { accessorKey: "lastExecutionDate", header: "Last Execution Date" },
  { accessorKey: "duration", header: "Duration" },
  { accessorKey: "executor", header: "Executor" },
  { accessorKey: "fullLog", header: "Full Log" },
  { accessorKey: "version", header: "Version" },
];

export const ChoresDataTable = () => {
  
  const table = useReactTable({
    data: jsonData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table className="text-[10px] ">
      <TableHeader>
        <TableRow className="bg-[#e2e2e2]">
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <TableHead className="pl-2 font-bold" key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ChoresDataTable;
