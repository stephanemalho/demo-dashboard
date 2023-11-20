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
import { Threads } from "./columns";

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
  const [inputValue, setInputValue] = useState("");
  const [allValues, setAllValues] = useState<string[]>([]);

  const getContentHeightClass = () => {
    const itemCount = filterPreview.length;
    if (itemCount === 0) return "h-[0px]"; 
    if (itemCount === 1) return "h-[30px]";
    return "h-[75px]"; 
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await getData();
      const columnValues = data.map(
        (item) => item[column.id as keyof Threads]
      ) as string[];
      setAllValues([...new Set(columnValues)]);
    };
    loadData();
  }, [column.id]);

  const updateFilterPreview = (text: string) => {
    setInputValue(text);
    const filteredValues = allValues.filter((value) => {
      return value.toLowerCase().includes(text.toLowerCase());
    });
    setFilterPreview(filteredValues);
  };

  const handleValueClick = (value: string) => {
    column.setFilterValue(value);
  };

  const resetFilter = () => {
    setInputValue(""); // Réinitialiser la valeur de l'input
    setFilterPreview(allValues); // Réinitialiser filterPreview
    column.setFilterValue(""); // Réinitialiser le filtre de la colonne
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`${minSize} flex h-[20px] w-full cursor-pointer justify-start truncate rounded-none border-[1px] border-[#f2f2f2] ${
            inputValue ? "bg-[#d1d1d1]" : "bg-[#e2e2e2]" // Classe conditionnelle basée sur inputValue
          } pl-[7px] font-black text-[12px] hover:bg-[#f2f2f2] active:text-light-500 max-2xl:text-[9px]`}
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
        <div className="relative mt-auto flex h-[70%] flex-col justify-end bg-[#e2e2e2]">
          <Button
            variant="ghost"
            onClick={() => {
              setClickCountUpDown((prevClickCount) => (prevClickCount + 1) % 2);
              column.toggleSorting(column.getIsSorted() === "asc");
            }}
            className="mx-2 my-1 flex h-[40px] justify-start rounded-none border-[1px] border-[#fff] pl-2 text-left font-regular text-[10px] text-[#000] hover:bg-[#c6c6c6] active:bg-[#a8a8a8] max-2xl:h-[20px]"
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
            className="mx-2 mb-1 flex h-[40px] justify-start rounded-none border-[1px] border-[#fff] pl-2 text-left font-regular text-[10px] text-[#000] hover:bg-[#c6c6c6] active:bg-[#a8a8a8] max-2xl:h-[20px]"
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
            className="mx-2 flex h-[40px] justify-start rounded-none border-[1px] border-[#fff] pl-2 text-left font-regular text-[10px] text-[#000] hover:bg-[#c6c6c6] active:bg-[#a8a8a8] max-2xl:h-[20px]"
          >
            Filter all{" "}
            {React.createElement(icons[clickCount], {
              className: "ml-2 h-3 w-3",
            })}
          </Button>
          <div className="mx-[3px]">
            <Input
              value={inputValue}
              placeholder={`Filter ${label}`}
              // Enlevez la mise à jour du filtre du tableau ici
              onChange={(event) => updateFilterPreview(event.target.value)}
              className="m-1 h-[30px] w-[94%] max-w-sm truncate rounded-none border-none font-light text-sm placeholder:font-light placeholder:text-[10px] max-2xl:h-[20px] max-2xl:text-[10px] max-2xl:placeholder:text-[8px]"
            />
            <div
              onClick={resetFilter}
              className="absolute right-[6px] top-[136px] flex h-[30px] w-[30px] items-center justify-center rounded-none p-0 text-center font-bold text-[12px] text-[#000] hover:bg-[#f4f4f4] active:bg-[#e0e0e0] max-2xl:right-[10px] max-2xl:top-[78px] max-2xl:h-[15px] max-2xl:w-[15px]"
            >
              <AiOutlineClose size={14} />
            </div>
            <div className={`m-1 ${getContentHeightClass()} overflow-hidden border-[1px] border-white`}>
              <ul className="custom-scrollbar h-full w-full overflow-y-scroll">
                {filterPreview.map((value, index) => (
                  <li
                    key={index}
                    onClick={() => handleValueClick(value)}
                    className="z-[10000] cursor-pointer truncate bg-[#e2e2e2] p-2 text-[10px] hover:bg-[#c6c6c6] active:bg-[#a8a8a8] max-2xl:text-[9px]"
                    title={value}
                  >
                    {value === "" ? "n/a" : value}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterBouton;
