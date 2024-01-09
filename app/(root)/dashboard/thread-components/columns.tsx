"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { copyRowToExcel } from "@/utils/formatTable";
import DeleteButton from "../../../../components/shared/button/DeleteButton";
import { Badge } from "@/components/ui/badge";
import FilterButton from "../../../../components/shared/button/FilterButton";
import Image from "next/image";
import { getDashboardData } from "@/api/dashboard/getDashboardData";
import { loadColumnData } from "@/lib/utils/formatTable";

// shape of data.
export interface Threads {
  ID: number;
  Type: string;
  Name: string;
  Context: string;
  State: string;
  Function: string;
  ObjectType: string;
  ObjectName: string;
  RLocks: number;
  IXLocks: number;
  WLocks: number;
  ElapsedTime: string;
  WaitTime: string;
  Info: string;
}

export const columns: ColumnDef<Threads>[] = [
  {
    accessorKey: "Function",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[300px]"
          column={column}
          label={"Function"}
          loadDataFunction={() => loadColumnData(getDashboardData, column.id as keyof Threads)}
        />
      );
    },
  },
  {
    accessorKey: "State",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[100px]" column={column} label={"State"} 
        loadDataFunction={() => loadColumnData(getDashboardData, column.id as keyof Threads)}
        />
      );
    },
    cell: ({ row }) => {
      const state = row.original.State;  
      return (
        <Badge
          variant={
            state === "Run"
              ? "default"
              : state === "Idle"
              ? "secondary"
              : state === "Wait"
              ? "destructive"
              : "outline"
          }
          className="flex w-[36px] items-center justify-center py-[1px] text-center text-[8px] max-2xl:py-[2px] max-2xl:text-[8px]"
        >
          {state === "" ? "N/A" : state}
        </Badge>
      );
    },
  },
  {
    accessorKey: "Name",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[100px]" column={column} label={"User"} 
        loadDataFunction={() => loadColumnData(getDashboardData, column.id as keyof Threads)}
        />
      );
    },
  },
  {
    accessorKey: "Type",
    header: ({ column }) => {
      return (
        <FilterButton minSize="min-w-[100px]" column={column} label={"Type"} 
        loadDataFunction={() => loadColumnData(getDashboardData, column.id as keyof Threads)}
        />
      );
    },
  },
  {
    accessorKey: "Context",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Context"}
          loadDataFunction={() => loadColumnData(getDashboardData, column.id as keyof Threads)}
        />
      );
    },
  },
  {
    accessorKey: "WaitTime",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Wait Time"}
          loadDataFunction={() => loadColumnData(getDashboardData, column.id as keyof Threads)}
        />
      );
    },
  },
  {
    accessorKey: "ElapsedTime",

    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"Elapsed Time"}
          loadDataFunction={() => loadColumnData(getDashboardData, column.id as keyof Threads)}
        />
      );
    },
  },
  {
    accessorKey: "Delete",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              title="Delete the line"
              variant="ghost"
              className="flex h-[10px] w-[70%] justify-start truncate p-1"
            >
              <span className="sr-only">Open to delete the line</span>
              <Image
                src="assets/icons/trash.svg"
                alt="trash"
                width={10}
                height={10}
                className="fill-[#da1e28]"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#e4e4e4] capitalize">
            <DropdownMenuLabel className="text-[10px]">
              remove this line?:
            </DropdownMenuLabel>
            <DropdownMenuItem className="cursor-pointer bg-[#da1e28]  text-white hover:bg-[#ba1b23] active:bg-[#750e13]">
              <DeleteButton
                id={row.original.ID}
                onDelete={
                  // @todo filter the id of the row to delete
                  (ID: number | string) => {
                    const confirm = window.confirm(
                      `Are you sure you want to delete this thread? ${ID}}`
                    );
                    if (confirm) {
                      console.log(confirm);
                      // onDelete();
                    }
                  }
                }
              />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
