"use client";
import IconInfo from "@/components/shared/iconComponents/IconInfo";
import IconMaximize from "@/components/shared/iconComponents/IconMaximize";
import { useFullscreen } from "@/context/ScreenSizeProvider";
import React from "react";

interface BoxLogsProps {
  children: React.ReactNode;
  title: string;
  logHeight: string;
  label: string;
  showIcons?: boolean;
}

const LiveContainer = ({
  children,
  logHeight,
  title,
  label,
  showIcons = true,
}: BoxLogsProps) => {
  // state

  // context
  const { isFullscreen }: any = useFullscreen();
  // variables
  const containerClasses = `h-full  ${!isFullscreen  && "max-2xl:w-[92vw]"} ${
    isFullscreen === title
      ? "z-50 fixed top-[45px] left-0 right-0 h-screen w-[100vw] bg-black"
      : ""
  }`;
  // TSX
  return (
    <div className={containerClasses}>
      <div className="flex h-[auto] items-center border-[2px] border-[#D3D3D3]  bg-[#e2E2E2]  font-bold text-[12px] max-2xl:text-[10px]">
        <div className="flex h-full w-full items-center border-[1px] border-[#393939] text-black">
        <IconInfo title={title} />
        <h4 className="pl-1 pt-1">{label}</h4>
        {showIcons && (
          <div className="ml-auto flex">
            <IconMaximize title={title} />
          </div>
        )}
        </div>
      </div>
      <div
        className={`custom-scrollbar ${
          isFullscreen === title
            ? `h-[90vh] `
            : `h-[30vh] ${logHeight}`
        }  overflow-y-auto border-b-[1px] border-[#e2e2e2] bg-[#f2f2f2]`}
      >
        {children}
      </div>
    </div>
  );
};

export default LiveContainer;
