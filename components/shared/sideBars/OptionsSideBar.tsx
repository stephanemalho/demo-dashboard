"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useSidebar } from "@/context/SideBarProvider";
import React, { useEffect, useState } from "react";
import MetaData from "../../../app/(root)/statistics/ressources/ressourceFile/MetaData";
import TestData from "../../../app/(root)/statistics/process/TestData";
import LogSetting from "@/app/(root)/query/logs-page/LogSetting";
import SelectMenu from "@/app/(root)/mapping-page/globals-page/SelectMenu";
import clsx from "clsx";
import Image from "next/image";
import { MiniOptionsSideBar } from "./MiniOptionsSideBar/MiniOptionSideBar";

interface ComponentMappingInterface {
  [key: string]: () => React.ReactElement;
}

const OptionsSideBar = () => {
  const [isMetaVisible, setIsMetaVisible] = useState(false);
  const { toggleOptionsSideBar, handleClickOptionsSideBar } = useSidebar();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sidebarClasses = clsx(
    "custom-scrollbar fixed left-0 top-0 z-20 flex h-screen flex-col justify-between overflow-y-auto bg-[#393939]  pt-[50px] dark:shadow-none",
    {
      "slide-in-rightSidebar w-[450px]": toggleOptionsSideBar,
      "flex w-screen": !toggleOptionsSideBar,
    }
  );

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

  if (!toggleOptionsSideBar) {
    return <MiniOptionsSideBar/>;
  }

  const ComponentToRender = componentMapping[pathname] || "";

  return (
    <section className={sidebarClasses}>
      <div
        onClick={handleClickOptionsSideBar}
        className="flex h-[49px] max-w-[50px] cursor-pointer justify-center hover:bg-[#262626] active:border-[2px] active:border-[#fff]"
      >
        {toggleOptionsSideBar ? (
          <Image
            src={"/assets/icons/close.svg"}
            alt={"menu"}
            width={22}
            height={22}
          />
        ) : (
          <Image
            src={"/assets/icons/menu-left.svg"}
            alt={"menu"}
            width={20}
            height={20}
          />
        )}
      </div>
      {isMetaVisible && ComponentToRender && <ComponentToRender />}
      <div className="mt-10 flex h-[50px] w-[50px] cursor-pointer items-center justify-center bg-[#393939] hover:bg-[#262626]">
        <Image
          src={"/assets/icons/settings.svg"}
          alt={"menu"}
          width={20}
          height={20}
        />
      </div>
    </section>
  );
};

export default OptionsSideBar;
