"use client";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { MenuItemInterface } from "@/data/dashboard";
import React, { useEffect, useRef, useState } from "react";
import { MdChevronRight } from "react-icons/md";
import ExportIcons from "./FileIcons/ExportIcons";
import { FaCubes } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import { TbDimensions, TbSettingsCode } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import { GoTools } from "react-icons/go";
import { IoCubeOutline } from "react-icons/io5";

const RenderMenu: React.FC<{ item: MenuItemInterface; level: number }> = ({
  item,
  level,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const [searchValue, setSearchValue] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const isFirstElementRef = useRef(true); // Initialisé à true pour le premier élément
  const isTerminalChild = !item.children || item.children.length === 0;

  const toggleOpen = () => {
    if (isTerminalChild) return;
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isTerminalChild) {
      const currentContent = contentRef.current;
      if (currentContent) {
        setMaxHeight(isOpen ? `100vh` : "0px");
      }
    }
  }, [isOpen, isTerminalChild]);

  const filteredChildren = item.children?.filter((child) =>
    child.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      {!isTerminalChild && (
        <div
          onClick={toggleOpen}
          style={{ paddingLeft: `${level * 20}px` }}
          className="mx-1 flex cursor-pointer items-center p-1 text-[12px] hover:bg-[#e2e2e2] active:border-[#e2e2e2]"
        >
          <MdChevronRight
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
          {item.title}
          {isFirstElementRef.current && (
            <>
            {selectIcon({ title: item.title })} 
            <ExportIcons
              loadData={() => alert("export element")}
              loadChildren={() => alert("export element and children")}
              loadDescendants={() => alert("export element and descendants")}
            />
            </>
          )}
        </div>
      )}
      {!isTerminalChild && (
        <div
          className={`overflow-hidden duration-300`}
          style={{ maxHeight }}
          ref={contentRef}
        >
          {item.children && item.children.length > 3 && (
            <LocalSearchbar
              onChange={(e) => setSearchValue(e.target.value)}
              route={item.title}
              iconPosition="right"
              placeholder={`Filter ${item.title}`}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              otherClasses="max-w-[300px]"
            />
          )}

          {filteredChildren &&
            filteredChildren.map((child) => (
              <RenderMenu key={child.title} item={child} level={level + 1} />
            ))}
        </div>
      )}
      {isTerminalChild && (
        <div
          style={{ paddingLeft: `${level * 20}px` }}
          className={`mx-1 flex h-auto cursor-pointer items-center p-1 text-[12px] hover:bg-[#e2e2e2] active:border-[#e2e2e2]`}
        >
          {item.title}
          <ExportIcons
            loadData={() => alert("export element")}
            loadChildren={() => alert("export element and children")}
            loadDescendants={() => alert("export element and descendants")}
          />
        </div>
      )}
    </div>
  );
};

export default RenderMenu;

export const selectIcon = ({ title, parentTitle } : any) => {
  console.log("Title Received:", title); 
  if (parentTitle === "Cubes") {
    return <IoCubeOutline size={12} className="ml-2 mr-auto" />;
  }
  switch (title) {
    case "Activity":
      return <AiOutlineDatabase size={12}  className="ml-2 mr-auto" />;
    case "Cubes":
      return <FaCubes size={12} className="ml-2 mr-auto" />;
    case "Dimensions":
      return <TbDimensions  size={12} className="ml-2 mr-auto" />;
    case "Processes" :
      return <VscServerProcess  size={12} className="ml-2 mr-auto" />;
    case "Chores" : 
      return <TbSettingsCode size={12} className="ml-2 mr-auto" />;
    case "Control Objects":
      return <GoTools  size={12} className="ml-2 mr-auto" />;
    default:
      return null;
  }
};