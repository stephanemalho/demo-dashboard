"use client";

import * as React from "react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { exportTableToExcel } from "@/lib/utils/formatTable";
import { toLowerCaseText } from "@/lib/utils/formatText";
import Image from "next/image";
import WrapIcon from "@/components/WrapIcon";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onRowClick?: (rowData: TData) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  onRowClick,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
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
    <div className="m-auto flex h-full w-full flex-col overflow-hidden">
      <div className="sticky top-0 z-10 flex h-[26px] w-full bg-[#f4f4f4] ">
        <WrapIcon bgColorHover="hover:bg-[#e2e2e2]">
          <Image
            src="/assets/icons/download.svg"
            width={15}
            height={15}
            alt="download"
            onClick={() => exportTableToExcel(data)}
            className="m-auto pb-[1px]"
          />
        </WrapIcon>
        <div className="ml-auto flex w-[200px] flex-row">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="ml-auto">
              <Button
                variant="outline"
                className="h-[25px] w-[100px] truncate rounded-none bg-[#f4f4f4] font-medium text-[10px] hover:bg-[#e2e2e2] max-2xl:text-[8px]"
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
                      className="cursor-pointer bg-[#f4f4f4] font-regular text-[12px] capitalize"
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
      </div>
      <div className="m-auto flex h-full w-full overflow-hidden">
        <Table className="bg-[#f4f4f4]">
          <TableHeader className="sticky top-0 bg-[#E0E0E1] text-[12px] max-2xl:text-[10px]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="z-[1] h-[10px] bg-[#E0E0E1] text-left font-bold hover:bg-[#e2e2e2] max-2xl:h-[7px]"
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

          <TableBody className="overflow-y-scroll">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  className="h-[20px] bg-[#f4f4f4] font-medium hover:bg-[#e0e0e0] max-2xl:h-[15px]"
                  onClick={() => onRowClick && onRowClick(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="truncate text-[12px] max-2xl:text-[12px]"
                    >
                      {cell.column.id === "ACTIONS"
                        ? flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )
                        : typeof cell.getValue() === "string" &&
                          cell.column.id !== "State"
                        ? toLowerCaseText(cell.getValue() as string)
                        : flexRender(
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
