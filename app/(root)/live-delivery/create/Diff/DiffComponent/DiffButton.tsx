import WrapIcon from "@/components/WrapIcon";
import React from "react";
import {
  MdOutlineUnfoldLessDouble,
  MdOutlineUnfoldMoreDouble,
} from "react-icons/md";

interface DiffButtonProps {
  children?: React.ReactNode;
  showAllLines: boolean;
  toggleShowAllLines: () => void;
}

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
      <WrapIcon bgColorHover="hover:bg-[rgba(44,42,42,0.2)]">
        {showAllLines ? (
          <MdOutlineUnfoldMoreDouble size={16} className="ml-1" />
        ) : (
          <MdOutlineUnfoldLessDouble size={16} className="ml-1" />
        )}
      </WrapIcon>
      <span className="flex h-full w-full items-center justify-center text-[12px]">
        {showAllLines ? "hidde none modified lines" : "Show all lines"}
      </span>
      {children && children}
    </button>
  );
};

export default DiffButton;
