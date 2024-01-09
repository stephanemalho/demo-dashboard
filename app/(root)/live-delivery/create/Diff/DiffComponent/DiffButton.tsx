import { DiffButtonProps } from "@/types";
import React from "react";
import {
  MdOutlineUnfoldLessDouble,
  MdOutlineUnfoldMoreDouble,
} from "react-icons/md";

const DiffButton = ({
  children,
  showAllLines,
  toggleShowAllLines,
}: DiffButtonProps) => {
  return (
    <button
      className={`flex w-full items-center border-[1px] bg-[#fafafa]  hover:bg-[#fff] ${
        showAllLines
          ? "border-[#92c3f4] text-[#92c3f4] "
          : "border-[#f2f2f2] text-[#c3c3c3]"
      } `}
      onClick={toggleShowAllLines}
    >
      <div>
        {showAllLines ? (
          <MdOutlineUnfoldMoreDouble size={16} className="ml-1" />
        ) : (
          <MdOutlineUnfoldLessDouble size={16} className="ml-1" />
        )}
      </div>
      <span className="flex h-full w-full items-center justify-center text-[12px] max-2xl:text-[10px]">
        {showAllLines ? "hidde none modified lines" : "Show all lines"}
      </span>
      {children && children}
    </button>
  );
};

export default DiffButton;
