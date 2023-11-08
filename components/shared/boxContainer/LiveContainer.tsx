"use client";
import IconInfo from "@/components/IconInfo";
import IconMaximize from "@/components/IconMaximize";
import IconResize from "@/components/IconResize";
import { useFullscreen } from "@/context/ScreenSizeProvider";
import React from "react";

interface BoxLogsProps {
  children: React.ReactNode;
  title: string;
  logHeight: string;
  label: string;
}

const LiveContainer = ({ children, logHeight, title, label }: BoxLogsProps) => {
  // state

  // context
  const { isFullscreen }: any = useFullscreen();
  // variables
  const containerClasses = `shadow-light100_dark100 w-full border-b-[5px] border-[#e4e4e4] ${
    isFullscreen === title
      ? "z-10 fixed top-50px left-0 right-0 h-[100vh] w-[100vw]"
      : ""
  }`;
  // TSX
  return (
    <div className={containerClasses}>
      <div className="base-bold flex h-[auto] items-center border-[1px] border-[#e4e4e4] bg-[#edf4ff] text-[12px] max-2xl:text-[8px]">
        <IconInfo title={title} />
        {label}
        <div className="ml-auto flex px-1">
          {isFullscreen === null ? <IconResize /> : ""}
          <IconMaximize title={title} />
        </div>
      </div>
      <div
        className={`custom-scrollbar ${
          isFullscreen === title ? `h-[90vh] ` : `h-[30vh] ${logHeight}`
        }  overflow-y-auto bg-[#fff] p-1`}
      >
        {children}
      </div>
    </div>
  );
};

export default LiveContainer;
