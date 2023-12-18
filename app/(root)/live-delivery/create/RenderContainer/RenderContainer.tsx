"use client";
import WrapIcon from "@/components/WrapIcon";
import { menuItems } from "@/data/dashboard";
import Image from "next/image";
import React from "react";
import RenderMenu from "./RenderMenu";
import { useSidebar } from "@/context/SideBarProvider";

const RenderContainer = () => {
  const { isOpen, handleOpen } = useSidebar();

  return (
    <div
      className={` flex h-full flex-row justify-between overflow-y-hidden bg-[#f2f2f2] transition-all duration-500 ease-in-out ${
        isOpen ? "w-[20vw] max-w-[400px] max-2xl:w-[30vw]" : "w-[50px]"
      }`}
    >
      <div
        className={`m-2 flex flex-col text-[10px] transition-all duration-500 ease-in-out ${
          isOpen ? " w-[20px] max-2xl:w-[30vw] " : "w-[50px]"
        } absolute`}
      >
        <WrapIcon bgColorHover="hover:bg-[#fff]">
          <button onClick={handleOpen} className="h-full w-full">
            <Image
              src="/assets/icons/data--base.svg"
              alt="arrow"
              width={20}
              height={20}
              className="h-full w-full p-[5px]"
            />
          </button>
        </WrapIcon>
      </div>
      {isOpen && (
        <div
          className={`mt-[50px] flex h-auto overflow-y-auto ${
            isOpen ? "w-[20vw] max-2xl:w-[28vw]" : "w-[0vw]"
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
