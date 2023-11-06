"use client";

import * as React from "react";
// import { SiMicrosoftexcel } from "react-icons/si";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { exportTableToExcel } from "@/utils/formatTable";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div>
      <div className=" my-1 flex w-full dark:border-slate-700">
        <Input
          placeholder="Filter Function..."
          value={(table.getColumn("function")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("function")?.setFilterValue(event.target.value)
          }
          className="ml-1 h-[20px] max-w-sm text-sm dark:border-slate-700 dark:bg-slate-700 max-2xl:text-[8px] "
        />
        <Input
          placeholder="Filter State..."
          value={(table.getColumn("state")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("state")?.setFilterValue(event.target.value)
          }
          className="ml-1 h-[20px] max-w-sm text-sm dark:border-slate-700 dark:bg-slate-700 max-2xl:text-[8px]"
        />
        <Button
          variant="outline"
          size="sm"
          onClick={() => exportTableToExcel(data)}
          className="mx-1 h-[20px] truncate text-sm hover:bg-[#f4f4f4] active:text-light-500 dark:border-slate-700 max-2xl:text-[8px]"
        >
        {/* <SiMicrosoftexcel className="mr-2 fill-lime-700" /> */}
         Export table
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto h-[20px] text-sm active:text-light-500 dark:border-slate-700 max-2xl:text-[8px]"
            >
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="background-light800_dark400 cursor-pointer capitalize  dark:border-slate-700 dark:text-slate-400"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <Table className="background-light800_dark400 text-[0.6rem] text-black dark:border-slate-700 dark:text-white">
          <TableHeader className="text-[12px] dark:border-slate-700 dark:text-slate-400 max-2xl:text-[8px]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="dark:border-slate-700">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-left dark:border-slate-700 "
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="dark:border-slate-700 dark:text-slate-400"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="w-[100px] max-w-[200px] truncate text-[11px] dark:border-slate-700 max-2xl:text-[8px]"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-left">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
