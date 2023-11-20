"use client";
import React, { useState, useRef, useEffect } from "react";
import { MenuItemInterface } from "@/data/dashboard";
import { MdChevronRight } from "react-icons/md";

const RenderMenu: React.FC<{ item: MenuItemInterface; level: number }> = ({
  item,
  level,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const currentContent = contentRef.current;
    if (currentContent) {
      const updateMaxHeight = () => {
        currentContent.style.maxHeight = isOpen
          ? `${currentContent.scrollHeight}px`
          : "0px";
      };

      const resizeObserver = new ResizeObserver(() => {
        if (isOpen) updateMaxHeight();
      });

      resizeObserver.observe(currentContent);

      updateMaxHeight();

      return () => resizeObserver.unobserve(currentContent);
    }
  }, [isOpen]);

  return (
    <div>
      <div
        onClick={toggleOpen}
        style={{ paddingLeft: `${level * 20}px` }} // ajustez le multiplicateur selon vos besoins
        className={`flex cursor-pointer items-center border-2 p-1 ${
          isOpen
            ? "border-[#64d1d4] bg-[#a1ebed] hover:bg-[#64d1d4] active:bg-[#a1ebed]"
            : "border-white hover:bg-[#e2e2e2] active:border-[#e2e2e2]"
        }`}
      >
        {item.children && (
          <MdChevronRight
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        )}
        {item.title}
      </div>
      <div
        className={` overflow-hidden duration-500 ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {item.children &&
          item.children.map((child) => (
            <RenderMenu key={child.title} item={child} level={level + 1} />
          ))}
      </div>
    </div>
  );
};

export default RenderMenu;
