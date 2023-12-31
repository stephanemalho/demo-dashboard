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
  showIcons?: boolean; 
}

const LiveContainer = ({ children, logHeight, title, label, showIcons = true }: BoxLogsProps) => {
  // state

  // context
  const { isFullscreen }: any = useFullscreen();
  // variables
  const containerClasses = `w-full ${
    isFullscreen === title
      ? "z-50 fixed top-[45px] left-0 right-0 h-screen w-[100vw] bg-black"
      : ""
  }`;
  // TSX
  return (
    <div className={containerClasses} >
      <div className="flex h-[auto] w-[auto] items-center border-[2px] border-[rgb(61,199,98)] bg-[rgb(161,233,180)] font-bold text-[12px] max-2xl:text-[10px]">
        <IconInfo title={title} />
        {label}
        {showIcons && (
          <div className="ml-auto flex px-1">
            {isFullscreen === null ? <IconResize /> : ""}
            <IconMaximize title={title} />
          </div>
        )}
      </div>
      <div
        className={`custom-scrollbar ${
          isFullscreen === title
            ? `h-[90vh] max-2xl:h-[84vh]`
            : `h-[30vh] ${logHeight}`
        }  overflow-y-auto bg-[#f2f2f2]`}
      >
        {children}
      </div>
    </div>
  );
};

export default LiveContainer;
