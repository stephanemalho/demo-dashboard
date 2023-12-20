"use client";
// import WrapIcon from "@/components/WrapIcon";
import { menuItems } from "@/data/dashboard";
import Image from "next/image";
import React from "react";
import RenderMenu from "./RenderMenu";
import { useSidebar } from "@/context/SideBarProvider";
import ExpendableSearchBar from "@/components/shared/search/ExpendableSearchBar";

const RenderContainer = () => {
  const { isOpen, handleOpen } = useSidebar();

  return (
    <div
      className={`mt-12 flex h-full flex-row justify-between overflow-y-hidden bg-[#f2f2f2] transition-all  duration-500 ease-in-out ${
        isOpen ? "mx-1" : "w-[50px]"
      }`}
    >
      <div
        className={`flex text-[10px] transition-all duration-500 ease-in-out ${
          isOpen ? " w-[20px] max-2xl:w-[30vw] " : "w-[50px]"
        } absolute`}
      >
        <div className="flex w-full flex-row bg-pink-400">
          <button
            onClick={handleOpen}
            className="flex h-[50px] w-[50px] items-center justify-center hover:bg-[#e2e2e2]"
          >
            <Image
              src="/assets/icons/data--base.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </button>
          {isOpen && (
            <ExpendableSearchBar
              placeHolderValue="Rechercher"
              searchValue=""
              onChange={() => {}}
              label=""
              size="h-[50px] w-[50px] min-w-[50px]"
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div
          className={`mt-[50px] flex h-auto overflow-y-auto ${
            isOpen ? "w-full" : "w-0"
          } flex-col text-[10px] transition-all duration-500 ease-in-out`}
        >
          {menuItems.map((item) => (
            <RenderMenu key={item.title} item={item} level={1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RenderContainer;
