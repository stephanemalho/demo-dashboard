"use client";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { MenuItemInterface } from "@/data/dashboard";
import React, { useEffect, useRef, useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { FaCube } from "react-icons/fa";

const RenderMenu: React.FC<{ item: MenuItemInterface; level: number }> = ({
  item,
  level,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const [searchValue, setSearchValue] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

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
          <FaCube className="ml-2 mr-auto" />
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
          onClick={() => {
            alert("clicked");
          }}
          style={{ paddingLeft: `${level * 20}px` }}
          className={`mx-1 flex h-auto cursor-pointer items-center p-1 text-[12px] hover:bg-[#e2e2e2] active:border-[#e2e2e2]`}
        >
          {item.title}
        </div>
      )}
    </div>
  );
};

export default RenderMenu;
