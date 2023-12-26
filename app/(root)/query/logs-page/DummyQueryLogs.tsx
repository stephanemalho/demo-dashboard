"use client";
import ExpendableSearchBar from "@/components/shared/search/ExpendableSearchBar";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  useReactTable,
  flexRender,
  ColumnDef,
  getCoreRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import jsonData from "../../../../data/logQuery.json";
import { Badge } from "@/components/ui/badge";

const columns: ColumnDef<(typeof jsonData)[0]>[] = [
  { accessorKey: "T_ID", header: "T_ID" },
  { accessorKey: "S_ID", header: "S_ID" },
  {
    accessorKey: "LEVEL",
    header: "LEVEL",
    cell: (info) => (
      <Badge className="p-2" variant="secondary">
        {info.getValue() as string}
      </Badge>
    ),
  },
  { accessorKey: "TIMESTAMP", header: "TIMESTAMP" },
  { accessorKey: "LOGGER", header: "LOGGER" },
  { accessorKey: "MESSAGE", header: "MESSAGE" },
];

const DummyQueryLogs = () => {
  const table = useReactTable({
    data: jsonData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="sticky top-0 z-10 flex w-full items-center justify-between border-b-[1px]">
        <div className="relative w-full">
          <ExpendableSearchBar
            placeholderValue="Search in table..."
            searchValue=""
            onChange={() => alert("boom")}
            size="h-[30px] w-[30px] min-w-[30px]"
          />
        </div>
        <Button variant="secondary">Excel</Button>
      </div>
      <Table className="text-[10px]">
        <TableHeader>
          <TableRow>
            {table
              .getHeaderGroups()
              .map((headerGroup) =>
                headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
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
    </>
  );
};

export default DummyQueryLogs;
