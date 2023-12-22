"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useSidebar } from "@/context/SideBarProvider";
import React, { useEffect, useState } from "react";
import MetaData from "../../../../app/(root)/statistics/ressources/ressourceComponents/MetaData";
import TimeSetting from "../../../../app/(root)/statistics/process/TimeSetup";
import LogSetting from "@/app/(root)/query/logs-page/LogSetting";
import SelectMenu from "@/app/(root)/mapping-page/globals-page/menu/SelectMenu";
import clsx from "clsx";
import Image from "next/image";
import RenderContainer from "@/app/(root)/live-delivery/create/RenderContainer/RenderContainer";
import ChoresPanel from "@/app/(root)/versionning/chore/choreComponents/ChoresPanel";
import ProcessPanel from "@/app/(root)/versionning/process/processComponents/ProcessPanel";
import RulesPanel from "@/app/(root)/versionning/rule-page/ruleComponents/RulesPanel";

interface ComponentMappingInterface {
  [key: string]: () => React.ReactElement;
}

interface ComponentIconMappingInterface {
  [key: string]: string;
}

const OptionsSideBar = () => {
  const [isMetaVisible, setIsMetaVisible] = useState(false);
  const { toggleOptionsSideBar, handleOpen } = useSidebar();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sidebarClasses = clsx(
    "custom-scrollbar fixed left-0 top-0 z-0 flex h-screen flex-col justify-between overflow-y-auto bg-[#393939]  pt-[50px] dark:shadow-none",
    {
      "slide-in-rightSidebar w-[450px]": toggleOptionsSideBar,
      "flex w-[50px]": !toggleOptionsSideBar,
    }
  );

  const componentMapping: ComponentMappingInterface = {
    "/statistics/ressources": MetaData,
    "/statistics/process": TimeSetting,
    "/query/logs-page": LogSetting,
    "/mapping-page/globals-page": SelectMenu,
    "/live-delivery/create": RenderContainer,
    "/versionning/chore": ChoresPanel,
    "/versionning/process": ProcessPanel,
    "/versionning/rule-page": RulesPanel,
  };

  const componentIconMappingUrl: ComponentIconMappingInterface = {
    "/statistics/ressources": "/assets/icons/menu-left.svg",
    "/statistics/process": "/assets/icons/menu-left.svg",
    "/query/logs-page": "/assets/icons/menu-left.svg",
    "/mapping-page/globals-page": "/assets/icons/menu-left.svg",
    "/live-delivery/create": "/assets/icons/menu-left.svg",
    "/versionning/chore": "/assets/icons/menu-left.svg",
    "/versionning/process": "/assets/icons/menu-left.svg",
    "/versionning/rule-page": "/assets/icons/menu-left.svg",
  };

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    setIsMetaVisible(Object.keys(componentMapping).includes(pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  const ComponentToRender = componentMapping[pathname] || "";

  return (
    <div className="flex flex-row">
      <section className={sidebarClasses}>
        {componentIconMappingUrl[pathname] ? (
          <button
            onClick={handleOpen}
            className="flex h-[50px] w-[50px] items-center justify-center hover:bg-[#262626]"
          >
            <Image
              src={componentIconMappingUrl[pathname]}
              alt={"menu"}
              width={20}
              height={20}
            />
          </button>
        ) : null}
        <div className="mt-auto flex h-[50px] w-[50px] cursor-pointer items-center justify-center bg-[#393939] hover:bg-[#262626]">
          <Image
            src={"/assets/icons/settings.svg"}
            alt={"menu"}
            width={20}
            height={20}
          />
        </div>
      </section>
      {isMetaVisible && ComponentToRender && <ComponentToRender />}
    </div>
  );
};

export default OptionsSideBar;
