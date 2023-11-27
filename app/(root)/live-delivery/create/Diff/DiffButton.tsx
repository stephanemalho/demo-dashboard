import WrapIcon from "@/components/WrapIcon";
import React from "react";
import { MdOutlineUnfoldLessDouble, MdOutlineUnfoldMoreDouble } from "react-icons/md";

interface DiffButtonProps {
  children?: React.ReactNode;
  showAllLines: boolean;
  toggleShowAllLines: () => void;
}

const DiffButton = ({ children,  showAllLines, toggleShowAllLines }: DiffButtonProps) => {
  return (
    <button
      className="flex items-center border-[1px] border-[rgba(0,0,0,0.5)] hover:bg-[rgba(142,142,239,0.1)]"
      onClick={toggleShowAllLines}
    >
      <WrapIcon bgColorHover="hover:bg-[rgba(44,42,42,0.2)]">
        {showAllLines ? <MdOutlineUnfoldMoreDouble size={16} className="ml-1" /> : <MdOutlineUnfoldLessDouble size={16}  className="ml-1" />}
      </WrapIcon>
      {showAllLines ? "hidde none modified lines" : "Show all lines"}
    {children && children}
    </button>
  );
};

export default DiffButton;
