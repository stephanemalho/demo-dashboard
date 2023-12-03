"use client";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { MenuItemInterface } from "@/data/dashboard";
import React, { useEffect, useRef, useState } from "react";
import { MdChevronRight } from "react-icons/md";
import ExportIcons from "./FileIcons/ExportIcons";
import {  FaEye } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import { TbDimensions, TbReportAnalytics, TbSettingsCode } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import { GoTools } from "react-icons/go";
import { IoCubeOutline } from "react-icons/io5";

const RenderMenu: React.FC<{ item: MenuItemInterface; level: number; parentIcon?: React.JSX.Element }> = ({
  item,
  level,
  parentIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const [searchValue, setSearchValue] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);
  const icon = selectIcon({ title: item.title, parentTitle: item.parentTitle }) ?? parentIcon;

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
          {isFirstElementRef.current && (
            <>
            <div className="flex flex-rox items-center h-full">
            {selectIcon({ title: item.title, parentTitle: item.parentTitle })} 
            <span className="ml-1">{item.title}</span>
            </div>

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
              <RenderMenu key={child.title} item={child} level={level + 1} parentIcon={icon} />
            ))}
        </div>
      )}
      {isTerminalChild && (
        <div
          style={{ paddingLeft: `${level * 20}px` }}
          className={`mx-1 flex h-auto cursor-pointer items-center p-1 text-[12px] hover:bg-[#e2e2e2] active:border-[#e2e2e2]`}
        >
          {item.title}
          {selectIcon({ title: item.title, parentTitle: item.parentTitle })}
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

export const selectIcon = ({ title }: any): React.JSX.Element | undefined => {
  console.log("Title Received:", title); 
  // Utiliser RegExp pour des correspondances basées sur le début des mots
  if (/^Act/i.test(title)) {
    return <AiOutlineDatabase size={12} className="ml-2 mr-auto" />;
  }
  if (/^Cub/i.test(title)) {
    return <IoCubeOutline size={12} className="ml-2 mr-auto" />;
  }
  if (/^Dim/i.test(title)) {
    return <TbDimensions size={12} className="ml-2 mr-auto" />;
  }
  if (/^Pro/i.test(title)) {
    return <VscServerProcess size={12} className="ml-2 mr-auto" />;
  }
  if (/^Cho/i.test(title)) {
    return <TbSettingsCode size={12} className="ml-2 mr-auto" />;
  }
  if (/^Con/i.test(title)) {
    return <GoTools size={12} className="ml-2 mr-auto" />;
  }
  if (/^Vie/i.test(title)) {
    // Assurez-vous d'importer FaEye depuis 'react-icons/fa' si ce n'est pas déjà fait
    return <FaEye size={12} className="ml-2 mr-auto" />;
  }
  if (/^tma/i.test(title)) {
    return <TbReportAnalytics size={12} className="ml-2 mr-auto" />;
  }
  switch (title) {
    default:
      return undefined;
  }
};
