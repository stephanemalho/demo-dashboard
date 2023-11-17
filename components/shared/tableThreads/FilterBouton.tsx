"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineClose } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import IconInfo from "@/components/IconInfo";
import { getData } from "@/api/getData";

interface Props {
  column: any;
  label: string;
  minSize?: string;
}

const FilterBouton = ({ column, label, minSize }: Props) => {
  const [clickCount, setClickCount] = useState(0);
  const [clickCountUpDown, setClickCountUpDown] = useState(0);
  const [clickCountDownUp, setClickCountDownUp] = useState(0);
  const icons = [ArrowUpDown, ArrowUp, ArrowDown];
  const iconUpDown = [ArrowUp, ArrowDown];
  const iconDownUp = [ArrowDown, ArrowUp];
  const [filterPreview, setFilterPreview] = useState<string[]>([]);
  const [allValues, setAllValues] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getData();
      const columnValues = data.map((item) => item[column.id]); // Utilisez l'ID de la colonne pour déterminer la propriété à charger
      console.log('columnValues', columnValues);
      
      setAllValues(columnValues);
    };

    loadData();
  }, [column.id]); // Dépendance à l'ID de la colonne

  const updateFilterPreview = (text: string) => {
    const filteredValues = allValues.filter((value) => {
      return value.toLowerCase().includes(text.toLowerCase());
    });
    setFilterPreview(filteredValues);
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`${minSize} flex h-[20px] w-full cursor-pointer justify-start truncate rounded-none border-[1px] border-[#f2f2f2] bg-[#e2e2e2] pl-[7px]  font-black text-[12px] hover:bg-[#f2f2f2] active:text-light-500 max-2xl:text-[9px]`}
        >
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex h-auto w-[150px] flex-col border-[1px] border-[#a8a8a8] bg-[#63D1D4]"
      >
        <div className="flex">
          <IconInfo title="Filter by columns" />
          <h4 className="mr-auto flex items-center text-center font-bold">
            Filter by colomns
          </h4>
        </div>
        <div className="relative mt-auto flex h-[70%] flex-col justify-end bg-[#e2e2e2] ">
          <Button
            variant="ghost"
            onClick={() => {
              setClickCountUpDown((prevClickCount) => (prevClickCount + 1) % 2);
              column.toggleSorting(column.getIsSorted() === "asc");
            }}
            className="mx-2 my-1 flex  h-[40px] justify-start rounded-none border-[1px] border-[#fff] pl-2 text-left font-regular text-[12px] text-[#000] hover:bg-[#c6c6c6] active:bg-[#a8a8a8] max-2xl:h-[20px]"
          >
            Filter asc{" "}
            {React.createElement(iconUpDown[clickCountUpDown], {
              className: "ml-2 h-3 w-3",
            })}
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setClickCountDownUp((prevClickCount) => (prevClickCount + 1) % 2);
              column.toggleSorting(column.getIsSorted() !== "desc");
            }}
            className="mx-2 mb-1 flex h-[40px] justify-start rounded-none border-[1px] border-[#fff] pl-2 text-left font-regular text-[12px] text-[#000] hover:bg-[#c6c6c6] active:bg-[#a8a8a8] max-2xl:h-[20px]"
          >
            Filter desc{" "}
            {React.createElement(iconDownUp[clickCountDownUp], {
              className: "ml-2 h-3 w-3",
            })}
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              // Incrémentez le compteur de clics
              setClickCount((prevClickCount) => (prevClickCount + 1) % 3);
              column.toggleSorting();
            }}
            className="mx-2 flex h-[40px] justify-start rounded-none border-[1px] border-[#fff] pl-2 text-left font-regular text-[12px] text-[#000] hover:bg-[#c6c6c6] active:bg-[#a8a8a8] max-2xl:h-[20px]"
          >
            Filter all{" "}
            {React.createElement(icons[clickCount], {
              className: "ml-2 h-3 w-3",
            })}
          </Button>
          <div className="mx-[3px] h-[40px]">
            <Input
              placeholder={`Filter ${label}`}
              value={(column.getFilterValue() as string | undefined) ?? ""}
              // onChange={(event) => column.setFilterValue(event.target.value)}
              onChange={(event) => {
                column.setFilterValue(event.target.value);
                updateFilterPreview(event.target.value);
              }}
              className="m-1 h-[30px] w-[96%] max-w-sm truncate rounded-none border-none font-light text-sm placeholder:font-light placeholder:text-[10px] max-2xl:h-[20px] max-2xl:text-[12px]"
            />
            <div
              onClick={() => column.setFilterValue("")}
              className="absolute bottom-[6px] right-[6px] flex h-[30px] w-[30px] items-center justify-center rounded-none p-0 text-center font-bold text-[12px] text-[#000] hover:bg-[#f4f4f4] active:bg-[#e0e0e0] max-2xl:bottom-[18px] max-2xl:right-[8px] max-2xl:h-[15px] max-2xl:w-[15px]"
            >
              <AiOutlineClose size={14} />
            </div>
            <div className="bg-slate-200 p-2">
              {filterPreview.map((value, index) => (
                <div
                  key={index}
                  onClick={() => column.setFilterValue(value)}
                  // Style pour votre liste déroulante
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterBouton;
