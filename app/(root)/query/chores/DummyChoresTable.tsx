"use client";
import { useReactTable, flexRender, ColumnDef, getCoreRowModel } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ChoresDetails {
  level: string;
  processName: string;
  lastExecutionDate: string;
  duration: string;
  executor: string;
  fullLog: string;
  version: string | null;
}

interface DummyChoresTableProps {
  data: ChoresDetails[]; // data is an array of ChoresDetails
}

const DummyChoresTable = ({ data }: DummyChoresTableProps) => {
  const columns: ColumnDef<ChoresDetails>[] = [
    { accessorKey: 'level', header: 'Level' },
    { accessorKey: 'processName', header: 'Process Name' },
    { accessorKey: 'lastExecutionDate', header: 'Last Execution Date' },
    { accessorKey: 'duration', header: 'Duration' },
    { accessorKey: 'executor', header: 'Executor' },
    { accessorKey: 'fullLog', header: 'Full Log' },
    { accessorKey: 'version', header: 'Version' },
  ];

  // Using the useReactTable hook
  const table = useReactTable({
    data, // data is an array of ChoresDetails
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!data || data.length === 0) {
    return <div className="w-full p-2">Sélectionnez une ligne pour voir les détails</div>;
  }

  return (
      <Table className="text-[10px]">
        <TableHeader>
          <TableRow className="bg-[#e2e2e2]">
            {table.getHeaderGroups().map(headerGroup =>
              headerGroup.headers.map(header => (
                <TableHead className="pl-2 font-bold" key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map(cell => (
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

export default DummyChoresTable;
