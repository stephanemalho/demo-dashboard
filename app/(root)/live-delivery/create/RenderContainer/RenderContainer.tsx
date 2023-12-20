"use client";
// import WrapIcon from "@/components/WrapIcon";
import { menuItems } from "@/data/dashboard";
import React from "react";
import RenderMenu from "./RenderMenu";
import { useSidebar } from "@/context/SideBarProvider";
import ExpendableSearchBar from "@/components/shared/search/ExpendableSearchBar";
import ContainerWrapper from "@/components/shared/sideBars/optionSideBar/optionSideBarComponent/ContainerWrapper";

const RenderContainer = () => {
  const { isOpen } = useSidebar();

  return (
    <ContainerWrapper>
      <div
        className={`flex text-[10px] transition-all  duration-500 ease-in-out ${
          isOpen ? "w-[30vw] max-2xl:w-[25vw] " : "w-0"
        } absolute`}
      >
        <div className="flex w-full flex-row">
          <div className={`${isOpen ? "w-full" : "hidden"}`}>
            {isOpen && (
              <ExpendableSearchBar
                placeholderValue="Rechercher..."
                searchValue=""
                onChange={() => {}}
                label="all search"
                size="h-[50px] w-[50px] min-w-[50px]"
              />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`mb-[20px] mt-[50px] flex h-auto overflow-y-auto ${
            isOpen ? "w-full" : "w-0"
          } flex-col text-[10px] transition-all duration-500 ease-in-out`}
        >
          {menuItems.map((item) => (
            <RenderMenu key={item.title} item={item} level={1} />
          ))}
        </div>
      )}
    </ContainerWrapper>
  );
};

export default RenderContainer;
