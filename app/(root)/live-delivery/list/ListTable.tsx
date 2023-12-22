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
import jsonData from "../../../../data/liveDeliveryTable.json";
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import { getClassForCell, getClassForHeader } from "./helpers";

const columns: ColumnDef<(typeof jsonData)[0]>[] = [
  {
    accessorKey: "PACKAGE NAME",
    header: () => <div className="w-1/2 px-2 font-bold">PACKAGE NAME</div>,
    cell: (info) => (
      <div className="flex-auto">{info.getValue() as string}</div>
    ),
  },
  {
    accessorKey: "CREATION DATE",
    header: () => <div className="w-1/2 px-2 font-bold">CREATION DATE</div>,
    cell: (info) => (
      <div className="flex-auto">{info.getValue() as string} </div>
    ),
  },
  {
    accessorKey: "ACTIONS",
    header: () => <div className="w-[330px] text-center font-bold">ACTIONS</div>,
    cell: (info) => (
      <div className="flex max-w-[330px] justify-start space-x-2">
        <Button
          onClick={() => {}}
          className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
        >
          <FaEye className="text-black" />
        </Button>
        <Button
          onClick={() => {}}
          className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
        >
          <Image
            src="/assets/icons/delivery.svg"
            width={16}
            height={16}
            alt="delivery "
          />
        </Button>
        <Button
          onClick={() => {}}
          className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
        >
          <Image
            src="/assets/icons/trash.svg"
            width={16}
            height={16}
            alt="trash "
          />
        </Button>
      </div>
    ),
  },
];

export const ListTable = () => {
  // const handleClickView = () => {
  //   alert("boom");
  // };

  // const handleDeliveryClick = () => {
  //   alert("delivery");
  // };
  // const handleTrashClick = () => {
  //   alert("trash");
  // };

  const table = useReactTable({
    data: jsonData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table className="w-full table-fixed text-[10px]">
      <TableHeader>
        <TableRow className="bg-[#e2e2e2]">
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <TableHead
                className={getClassForHeader(header.column.id)}
                key={header.id}
              >
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
              <TableCell
                className={getClassForCell(cell.column.id)}
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListTable;
