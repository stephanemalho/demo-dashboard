"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import React, { useState } from "react";

interface Props {
  column: any;
  label: string;
}

const FilterBouton = ({ column, label }: Props) => {
  const [clickCount, setClickCount] = useState(0);
  const icons = [ArrowUpDown, ArrowUp, ArrowDown];
  return (
    
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex h-[20px]  w-full cursor-pointer justify-start truncate rounded-none border-none  bg-[#e2e2e2] pl-[7px]  font-ibmPlexSans text-[12px] hover:bg-[#f2f2f2] active:text-light-500 max-2xl:text-[12px]"
        >
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex w-full flex-col border-[1px] border-[#000] bg-[#edf4ff]"
      >
        
        <Button
          variant="ghost"
          onClick={() => {
            // Incrémentez le compteur de clics
            setClickCount((prevClickCount) => (prevClickCount + 1) % 3);
            column.toggleSorting();
          }}
          className="rounded-none p-0 text-[12px] font-bold text-[#000] hover:bg-[#c9deff] active:bg-[#97c1ff]"
        >
          Filter asc{" "}
          {React.createElement(icons[clickCount], {
            className: "ml-2 h-3 w-3",
          })}
        </Button>
        <Input
          placeholder="Filter Function..."
          value={(column.getFilterValue() as string | undefined) ?? ""}
          onChange={(event) => column.setFilterValue(event.target.value)}
          className=" h-[30px] max-w-sm rounded-none border-none text-sm max-2xl:text-[12px]"
        />
        <div
          onClick={() => column.setFilterValue("")}
          className="absolute bottom-1 right-1 rounded-none p-0 text-[12px] font-bold text-[#000] hover:bg-[#c9deff] active:bg-[#97c1ff]"
        >
          X
        </div>
      
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterBouton;
