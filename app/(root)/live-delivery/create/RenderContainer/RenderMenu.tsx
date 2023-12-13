"use client";
// import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { MenuItemInterface } from "@/data/dashboard";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MdChevronRight } from "react-icons/md";
import ExportIcons from "./FileIcons/ExportIcons";
import { selectIcon } from "./FileIcons/SelectIcons";
import ExpendableSearchBar from "@/components/shared/search/ExpendableSearchBar";

const RenderMenu: React.FC<{
  item: MenuItemInterface;
  level: number;
  parentIcon?: React.JSX.Element;
}> = ({ item, level }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const [searchValue, setSearchValue] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);
  const icon = useMemo(() => selectIcon({ title: item.title, parentTitle: item.parentTitle }), [item.title, item.parentTitle]);

  const isFirstElementRef = useRef(true); // Initialisé à true pour le premier élément
  const isTerminalChild = !item.children || item.children.length === 0;

  const toggleOpen = () => {
    if (isTerminalChild) return;
    setIsOpen(!isOpen);
  };

  const handleValueLocalSearchBar = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchValue(e.target.value)
  }
  
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
          className="mx-1 flex cursor-pointer items-center truncate p-1 text-[12px] hover:bg-[#e2e2e2] active:border-[#e2e2e2]"
        >
          <MdChevronRight
            className={`truncate transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
          {isFirstElementRef.current && (
            <>
              <div className="flex h-full flex-row items-center truncate">
                {selectIcon({
                  title: item.title,
                  parentTitle: item.parentTitle,
                })}
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
          className={`overflow-hidden truncate duration-300`}
          style={{ maxHeight }}
          ref={contentRef}
        >
          {item.children && item.children.length > 3 && (
            // <LocalSearchbar
            //   onChange={handleValueLocalSearchBar} // Nouveau
            //   route={item.title}
            //   iconPosition="right"
            //   placeholder={`Filter ${item.title}`}
            //   searchValue={searchValue}
            //   otherClasses="max-w-[300px]"
            // />
            <ExpendableSearchBar
              route={item.title}
              placeHolderValue={`Filter ${item.title}...`}
              onChange={handleValueLocalSearchBar} // Nouveau
              searchValue={searchValue}
              size="h-[30px] w-[30px] min-w-[30px]"
            />
          )}
          {filteredChildren &&
            filteredChildren.map((child) => (
              <RenderMenu
                key={child.title}
                item={child}
                level={level + 1}
                parentIcon={icon}
              />
            ))}
        </div>
      )}
      {isTerminalChild && (
        <div
          style={{ paddingLeft: `${level * 20}px` }}
          className={`mx-1 flex h-auto cursor-pointer items-center truncate p-1 text-[12px] hover:bg-[#e2e2e2] active:border-[#e2e2e2]`}
        >
          <div className="flex h-full flex-row items-center truncate">
            {selectIcon({ title: item.title, parentTitle: item.parentTitle })}
            <span className="ml-2 truncate">{item.title}</span>
          </div>
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

export default React.memo(RenderMenu);
