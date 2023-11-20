"use client";
import { useSidebar } from "@/context/SideBarProvider";
import React from "react";


const RightSideBar = () => {

  const {toggleRightSideBar} = useSidebar(); // sideBar Context

  if (!toggleRightSideBar) {
    return null; // don't render anything if the sidebar is closed
  }
  return (
    <section className={`${toggleRightSideBar ? "slide-in-rightSidebar" : ""}  custom-scrollbar fixed right-0 top-[50px] z-50 flex h-screen w-[650px] flex-col overflow-y-auto  bg-[rgba(0,0,0,0.7)] p-6 pt-36 dark:shadow-none max-xl:hidden lg:w-[40vw]`}>
     
    </section>
  );
};

export default RightSideBar;
