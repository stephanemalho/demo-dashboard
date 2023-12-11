"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useSidebar } from "@/context/SideBarProvider";
import React, { useEffect, useState } from "react";
import MetaData from "../../../app/(root)/statistics/ressources/ressourceFile/MetaData";
import TestData from "../../../app/(root)/statistics/process/TestData";
import LogSetting from "@/app/(root)/query/logs-page/LogSetting";
import SelectMenu from "@/app/(root)/mapping-page/globals-page/SelectMenu";

interface ComponentMappingInterface {
  [key: string]: () => React.ReactElement;
}

const RightSideBar = () => {
  const [isMetaVisible, setIsMetaVisible] = useState(false);
  const { toggleRightSideBar } = useSidebar();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const componentMapping: ComponentMappingInterface = {
    "/statistics/ressources": MetaData,
    "/statistics/process": TestData,
    "/query/logs-page": LogSetting,
    "/mapping-page/globals-page": SelectMenu,
  };

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    setIsMetaVisible(Object.keys(componentMapping).includes(pathname));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  if (!toggleRightSideBar) {
    return null;
  }

  const ComponentToRender = componentMapping[pathname] || null;

  return (
    <section
      className={`${
        toggleRightSideBar ? "slide-in-rightSidebar" : ""
      } custom-scrollbar fixed right-0 top-[50px] z-50 flex h-screen w-[650px] flex-col overflow-y-auto bg-[rgba(0,0,0,0.7)] p-6 pt-36 dark:shadow-none max-xl:hidden lg:w-[40vw]`}
    >
      {isMetaVisible && ComponentToRender && <ComponentToRender />}
    </section>
  );
};

export default RightSideBar;
