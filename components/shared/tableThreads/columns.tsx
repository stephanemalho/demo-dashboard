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
import DeleteButton from "../deleteBtn/DeleteButton";
import { Badge } from "@/components/ui/badge";
import FilterBouton from "./FilterBouton";
import Image from "next/image";

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
        <FilterBouton
          minSize="min-w-[300px]"
          column={column}
          label={"Function"}
        />
      );
    },
  },
  {
    accessorKey: "state",
    header: ({ column }) => {
      return (
        <FilterBouton minSize="min-w-[100px]" column={column} label={"State"} />
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
        <FilterBouton minSize="min-w-[100px]" column={column} label={"User"} />
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <FilterBouton minSize="min-w-[100px]" column={column} label={"Type"} />
      );
    },
  },
  {
    accessorKey: "context",
    header: ({ column }) => {
      return (
        <FilterBouton
          minSize="min-w-[100px]"
          column={column}
          label={"Context"}
        />
      );
    },
  },
  {
    accessorKey: "waitTime",
    header: ({ column }) => {
      return (
        <FilterBouton
          minSize="min-w-[100px]"
          column={column}
          label={"Wait Time"}
        />
      );
    },
  },
  {
    accessorKey: "elapsedTime",

    header: ({ column }) => {
      return (
        <FilterBouton
          minSize="min-w-[100px]"
          column={column}
          label={"Elapsed Time"}
        />
      );
    },
  },
  // {
  //   accessorKey: "delete",
  //   header: "Delete Line",
  //   cell: ({ row }) => {
  //     return (
  //       <DeleteButton
  //         id={row.original.id}
  //         onDelete={
  //           // @todo filter the id of the row to delete
  //           (id: number) => {
  //             const confirm = window.confirm(
  //               "Are you sure you want to delete this thread?"
  //             );
  //             if (confirm) {
  //               console.log("thread deleted");
  //               // onDelete();
  //             }
  //           }
  //         }
  //       />
  //     );
  //   },
  // },
  {
    accessorKey: "Delete",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              title="Delete the line"
              variant="ghost"
              className="flex h-[8px] w-[70%] justify-start truncate p-1"
            >
              <span className="sr-only">Open menu</span>
              <Image
                src="assets/icons/trash.svg"
                alt="trash"
                width={8}
                height={8}
                className="fill-[#da1e28]"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-[#e4e4e4] capitalize"
          >
            <DropdownMenuLabel className="text-[10px]">
              remove this line?:
            </DropdownMenuLabel>
            <DropdownMenuItem className="cursor-pointer bg-[#da1e28]  text-white hover:bg-[#ba1b23] active:bg-[#750e13]">
              {/* <AiFillFileExcel className="mr-1 fill-lime-700" /> */}
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
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  // {
  //   accessorKey: "More actions",
  //   cell: ({ row }) => {
  //     const threads = row.original;
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button
  //             title="More actions"
  //             variant="ghost"
  //             className="flex h-8 w-8 truncate p-0 text-[0.6rem] max-2xl:h-[5px]"
  //           >
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent
  //           align="end"
  //           className="background-light800_dark400 capitalize dark:text-white"
  //         >
  //           <DropdownMenuLabel className="text-[10px]">
  //             More actions
  //           </DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => copyRowToExcel(threads)} // Appel de la fonction pour copier la ligne au format Excel.
  //             className="cursor-pointer text-[10px] hover:bg-[#1E40AF] hover:text-white"
  //           >
  //             {/* <AiFillFileExcel className="mr-1 fill-lime-700" /> */}
  //             Export Line to Excel
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
