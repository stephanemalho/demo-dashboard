"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { copyRowToExcel } from "@/utils/formatTable";
import DeleteButton from "../deleteBtn/DeleteButton";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// shape of data.
export type Threads = {
  id: number;
  user: string;
  function: string;
  type: string;
  context: string;
  waitTime: string;
  elapsedTime: string;
  state: string;
};

export const columns: ColumnDef<Threads>[] = [
  {
    accessorKey: "function", 
    header: ({ column }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex h-full w-full cursor-pointer justify-start border-none bg-[#e2e2e2]  p-0 text-[12px]  hover:bg-[white] active:text-light-500 max-2xl:text-[8px]"
            >
              Function
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="flex w-full flex-col bg-[#f4f4f4]"
          >
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="w-full bg-[#f4f4f4] p-0 hover:bg-[#eaeaea] active:bg-[#e0e0e0]"
            >
              Filter asc <ArrowUpDown className="ml-2 h-3 w-3" />
            </Button>
            <Input
              placeholder="Filter Function..."
              value={(column.getFilterValue() as string | undefined) ?? ""}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className=" h-[30px] max-w-sm border-none text-sm max-2xl:text-[8px]"
            />
            <Button
              variant="ghost"
              onClick={() => column.setFilterValue("")}
              className="mt-2 h-5 p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0] "
            >
              Reset filter
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "state",
    header: ({ column }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex h-full w-full cursor-pointer justify-start border-none bg-[#e2e2e2]  p-0 text-[12px] hover:bg-[white] active:text-light-500 max-2xl:text-[8px]"
            >
              State
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="flex w-full flex-col bg-[#f4f4f4]"
          >
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0]"
            >
              Filter asc
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </Button>
            {/* reset the sorting on click */}
            <Input
              placeholder="Filter State..."
              value={(column.getFilterValue() as string | undefined) ?? ""}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className=" h-[30px] max-w-sm border-none text-sm max-2xl:text-[8px]"
            />
            <Button
              variant="ghost"
              onClick={() => column.setFilterValue("")}
              className="mt-2 h-5 p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0] "
            >
              Reset filter
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    cell: ({ row }) => {
      const state = row.original.state;
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
          className="text-[8px] max-2xl:text-[6px]"
        >
          {state === "" ? "N/A" : state}
        </Badge>
      );
    },
  },
  {
    accessorKey: "user",
    header: ({ column }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex h-full w-full cursor-pointer justify-start border-none bg-[#e2e2e2] p-0 text-[12px]  hover:bg-[white] active:text-light-500 max-2xl:text-[8px]"
            >
              User
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="flex w-full flex-col bg-[#f4f4f4]">
          <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0]"
            >
              Filter asc
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </Button>
            <Input
              placeholder="Filter User..."
              value={(column.getFilterValue() as string | undefined) ?? ""}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className="h-[30px] max-w-sm border-none text-sm max-2xl:text-[8px]"
            />
            <Button
              variant="ghost"
              onClick={() => column.setFilterValue("")}
              className="mt-2 h-5 p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0] "
            >
              Reset filter
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex h-full w-full cursor-pointer justify-start border-none bg-[#e2e2e2] p-0 text-[12px]  hover:bg-[white] active:text-light-500 max-2xl:text-[8px]"
            >
              Type
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="flex w-full flex-col bg-[#f4f4f4]">
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0]"
            >
              Filter asc <ArrowUpDown className="ml-2 h-3 w-3" />
            </Button>
            <Input
              placeholder="Filter Type..."
              value={(column.getFilterValue() as string | undefined) ?? ""}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className="h-[30px] max-w-sm border-none text-sm max-2xl:text-[8px]"
            />
            <Button
              variant="ghost"
              onClick={() => column.setFilterValue("")}
              className="mt-2 h-5 p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0] "
            >
              Reset filter
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "context",
    header: ({ column }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex h-full w-full cursor-pointer justify-start border-none bg-[#e2e2e2] p-0 text-[12px]  hover:bg-[white] active:text-light-500 max-2xl:text-[8px]"
            >
              Context
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="flex w-full flex-col bg-[#f4f4f4]">
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0]"
            >
              Filter asc <ArrowUpDown className="ml-2 h-3 w-3" />
            </Button>
            <Input
              placeholder="Filter Context..."
              value={(column.getFilterValue() as string | undefined) ?? ""}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className="h-[30px] max-w-sm border-none text-sm max-2xl:text-[8px]"
            />
            <Button
              variant="ghost"
              onClick={() => column.setFilterValue("")}
              className="mt-2 h-5 p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0] "
            >
              Reset filter
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "waitTime",
    header: ({ column }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex h-full w-full cursor-pointer justify-start border-none bg-[#e2e2e2] p-0 text-[12px]  hover:bg-[white] active:text-light-500 max-2xl:text-[8px]"
            >
              Wait Time
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="flex w-full flex-col bg-[#f4f4f4]">
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0]"
            >
              Filter asc <ArrowUpDown className="ml-2 h-3 w-3" />
            </Button>
            <Input
              placeholder="Filter Wait Time..."
              value={(column.getFilterValue() as string | undefined) ?? ""}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className="h-[30px] max-w-sm border-none text-sm max-2xl:text-[8px]"
            />
            <Button
              variant="ghost"
              onClick={() => column.setFilterValue("")}
              className="mt-2 h-5 p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0] "
            >
              Reset filter
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "elapsedTime",

    header: ({ column }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex h-full w-full cursor-pointer justify-start border-none bg-[#e2e2e2] p-0 text-[12px]  hover:bg-[white] active:text-light-500 max-2xl:text-[8px]"
            >
              Elapsed Time
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="flex w-full flex-col bg-[#f4f4f4]">
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0]"
            >
              Filter asc <ArrowUpDown className="ml-2 h-3 w-3" />
            </Button>
            <Input
              placeholder="Filter Wait Time..."
              value={(column.getFilterValue() as string | undefined) ?? ""}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className="h-[30px] max-w-sm border-none text-sm max-2xl:text-[8px]"
            />
            <Button
              variant="ghost"
              onClick={() => column.setFilterValue("")}
              className="mt-2 h-5 p-0 text-[12px] hover:bg-[#eaeaea] active:bg-[#e0e0e0] "
            >
              Reset filter
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "delete",
    header: "Delete Line",
    cell: ({ row }) => {
      return (
        <DeleteButton
          id={row.original.id}
          onDelete={
            // @todo filter the id of the row to delete
            (id: number) => {
              const confirm = window.confirm(
                "Are you sure you want to delete this thread?"
              );
              if (confirm) {
                console.log("thread deleted");
                // onDelete();
              }
            }
          }
        />
      );
    },
  },
  {
    accessorKey: "More actions",
    cell: ({ row }) => {
      const threads = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              title="More actions"
              variant="ghost"
              className="flex h-8 w-8 p-0 text-[0.6rem] max-2xl:h-[5px]" 
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="background-light800_dark400 capitalize dark:text-white"
          >
            <DropdownMenuLabel className="text-[10px]">
              More actions
            </DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => copyRowToExcel(threads)} // Appel de la fonction pour copier la ligne au format Excel.
              className="cursor-pointer text-[10px] hover:bg-[#1E40AF] hover:text-white"
            >
              {/* <AiFillFileExcel className="mr-1 fill-lime-700" /> */}
              Export Line to Excel
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
