"use client";
import { usePathname, useSearchParams } from 'next/navigation'
import { useSidebar } from "@/context/SideBarProvider";
import React, { useEffect, useState } from "react";
import MetaData from "../MetaData";


const RightSideBar = () => {
  const [isMetaVisible, setIsMetaVisible] = useState(false);
  const { toggleRightSideBar } = useSidebar(); // sideBar Context
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
    
    if (url.includes("statistics/ressources")) {
      setIsMetaVisible(true);
    } else {
      setIsMetaVisible(false);
    }

  }, [pathname, searchParams]);

  

  if (!toggleRightSideBar) {
    return null; // don't render anything if the sidebar is closed
  }
  return (
    <section
      className={`${
        toggleRightSideBar ? "slide-in-rightSidebar" : ""
      }  custom-scrollbar fixed right-0 top-[50px] z-50 flex h-screen w-[650px] flex-col overflow-y-auto  bg-[rgba(0,0,0,0.7)] p-6 pt-36 dark:shadow-none max-xl:hidden lg:w-[40vw]`}
    >
      {isMetaVisible && <MetaData />}{" "}
    </section>
  );
};

export default RightSideBar;
