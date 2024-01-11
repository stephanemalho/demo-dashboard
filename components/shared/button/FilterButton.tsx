"use client";
import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { AiOutlineClose } from "react-icons/ai";
import { FaFilter } from 'react-icons/fa';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { getContentHeight } from "@/lib/utils";
import { FilterButtonProps } from "@/types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const FilterButton = ({ column, label, minSize, loadDataFunction  }: FilterButtonProps) => {
  const [clickCount, setClickCount] = useState(0);
  const icons = [ArrowUpDown, ArrowUp, ArrowDown];
  const [filterPreview, setFilterPreview] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [allValues, setAllValues] = useState<string[]>([]);

  const heightClass = () => {
    return getContentHeight(filterPreview);
  };

  const loadData = async (column: string | undefined) => {
    const columnValues = await loadDataFunction(column);
    setAllValues([...new Set(columnValues)]);
  };
  
  useEffect(() => {
    loadData(column.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setFilterPreview([]); // Réinitialiser filterPreview
    column.setFilterValue(""); // Réinitialiser le filtre de la colonne
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`${minSize} flex h-[20px] w-full cursor-pointer justify-between truncate rounded-none border-[1px] border-[#f2f2f2] ${
            inputValue ? "bg-[#d1d1d1]" : "bg-[#e2e2e2]" // Classe conditionnelle basée sur inputValue
          } font-black text-[12px] hover:bg-[#f2f2f2] active:text-light-500 max-2xl:text-[11px]`}
        >
          {label} {column.getIsFiltered() && <span className="flex px-2"><FaFilter /></span>} 
          {/* Afficher ici icons en fonction de l'icon qui est affiché dans le filtre si le filtre est up ou down */}
          <div className="pl-2">
          {
            React.createElement(icons[clickCount], {
              className: "h-3 w-3 max-2xl:h-[10px] max-2xl:w-[10px]",
            })
          }
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex max-h-[40vh] w-[150px] flex-col rounded-none border-[0px] border-[#D3D3D3] bg-[#D3D3D3]"
      >
        <div className="border-[1px] border-[#393939] p-1">
        <div className="flex">
          <h4 className="flex w-full justify-center text-center font-bold text-[10px]">
            Filter {label}s
          </h4>
        </div>
        <div className="relative mt-auto flex h-[70%] flex-col justify-end bg-[#e2e2e2]">
          <Button
            variant="ghost"
            onClick={() => {
              // Incrémentez le compteur de clics
              setClickCount((prevClickCount) => (prevClickCount + 1) % 3);
              column.toggleSorting();
            }} 
            className="m-1 flex  h-[40px] justify-between rounded-none border-[1px] border-[#fff] pl-2 font-regular text-[10px] text-[#000] hover:bg-[#c6c6c6] active:bg-[#a8a8a8] max-2xl:h-[30px]"
          >
            Filter all{" "}
            {React.createElement(icons[clickCount], {
              className: "ml-2 h-3 w-3 max-2xl:h-[10px] max-2xl:w-[10px]",
            })}
          </Button>
          <div className="">
            <Input
              value={inputValue}
              placeholder={label}
              onChange={(event) => updateFilterPreview(event.target.value)}
              className="m-1 h-[30px] w-[94%] max-w-sm truncate rounded-none border-none font-light text-sm placeholder:font-light placeholder:text-[10px] max-2xl:h-[20px] max-2xl:text-[10px] max-2xl:placeholder:text-[8px]"
            />
            <div
              onClick={resetFilter}
              className="absolute right-[4px] top-[52px] flex h-[30px] w-[30px] items-center justify-center rounded-none p-0 text-center font-bold text-[12px] text-[#000] hover:bg-[#f4f4f4] active:bg-[#e0e0e0]  max-2xl:top-[42px] max-2xl:h-[20px] max-2xl:w-[20px]"
            >
              <AiOutlineClose size={14} />
            </div>
            <div
              className={`m-1 ${heightClass()} overflow-hidden scroll-auto border-[1px] border-white`}
            >
              <ul className="custom-scrollbar h-full w-full overflow-y-scroll">
                {filterPreview.map((value, index) => (
                  <li
                    key={index}
                    onClick={() => handleValueClick(value)}
                    className="z-[10000] cursor-pointer truncate bg-[#e2e2e2] p-2 text-[9px] hover:bg-[#c6c6c6] active:bg-[#a8a8a8] max-2xl:text-[8px]"
                    title={value}
                  >
                    {value === "" ? "n/a" : value}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterButton;
