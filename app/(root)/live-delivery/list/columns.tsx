import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { FaEye } from "react-icons/fa";
import { getClassForCell, getClassForHeader } from "./helpers";
import FilterButton from "@/components/shared/button/FilterButton";
import { getDeliveryListData } from "@/api/liveDelivery/getLiveDelivery";
import { loadColumnData } from "@/lib/utils/formatTable";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";

export interface LiveDeliveryListEntry {
  PACKAGE_NAME: string;
  CREATION_DATE: string;
  ACTIONS: string;
}

export const columns: ColumnDef<LiveDeliveryListEntry>[] = [
  {
    accessorKey: "PACKAGE_NAME",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"PACKAGE NAME"}
          loadDataFunction={() => loadColumnData(getDeliveryListData, column.id as keyof LiveDeliveryListEntry)}
        />
      );
    },
    cell: (info) => <span>{info.getValue() as string}</span>,
  },
  {
    accessorKey: "CREATION_DATE",
    header: ({ column }) => {
      return (
        <FilterButton
          minSize="min-w-[100px]"
          column={column}
          label={"CREATION DATE"}
          loadDataFunction={() => loadColumnData(getDeliveryListData, column.id as keyof LiveDeliveryListEntry)}
        />
      );
    },
    cell: (info) => (
      <span className={getClassForCell("CREATION DATE")}>
        {info.getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "ACTIONS",
    header: () => (
      <div
        className={
          getClassForHeader("ACTIONS") + "text-center font-bold ml-auto"
        }
      >
        ACTIONS
      </div>
    ),
    cell: (info) => {
      return (
        <div
          className={`${getClassForCell(
            "ACTIONS"
          )} flex h-full items-center justify-between`}
        >
          <Button
            onClick={() => {}}
            className="h-full flex-1 rounded-none py-[1px] hover:bg-[#e2e2e2]"
          >
            <FaEye className="text-black" />
          </Button>
          <Button
            onClick={() => {}}
            className=" h-full flex-1 rounded-none py-[1px] hover:bg-[#e2e2e2]"
          >
            <TbTruckDelivery className="text-black" />
          </Button>
          <Button
            onClick={() => {}}
            className="h-full flex-1 rounded-none py-[1px] hover:bg-[#e2e2e2]"
          >
            <MdOutlineDeleteOutline className="text-red-500" />
          </Button>
        </div>
      );
    },
  },
];
