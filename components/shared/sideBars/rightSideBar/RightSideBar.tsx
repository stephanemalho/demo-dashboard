"use client";
import { useSidebar } from "@/context/SideBarProvider";
import React from "react";

import clsx from "clsx";
import Image from "next/image";

const RightSideBar = () => {
  const { toggleRightSideBar, handleClickRightSideBar } = useSidebar();

  const sidebarClasses = clsx(
    "custom-scrollbar fixed right-0 top-0 z-0 flex h-screen flex-col justify-between overflow-y-auto bg-[#393939] pt-[50px] dark:shadow-none",
    {
      "slide-in-leftSidebar w-[450px]": toggleRightSideBar,
      "flex w-[50px]": !toggleRightSideBar,
    }
  );

  return (
    <div className="z-[20] flex flex-col justify-end pt-[50px]">
      <section className={sidebarClasses}>
          <button
            onClick={handleClickRightSideBar}
            className="ml-auto flex h-[50px] w-[50px] items-center justify-center hover:bg-[#262626]"
          >
            <Image
              src={"/assets/icons/help.svg"}
              alt={"menu"}
              width={20}
              height={20}
            />
          </button>
      </section>
    </div>
  );
};

export default RightSideBar;