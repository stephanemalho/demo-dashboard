"use client";
import React from "react";
import ResizeLog from "../../ResizeLog";

import { useScreen } from "@/context/ScreenSizeContext";

interface BoxLogsProps {
  children: React.ReactNode;
  title: string;
  logHeight: string;
}

const LiveContainer = ({ children, title, logHeight }: BoxLogsProps) => {
  const { isFullScreen, toggleFullScreen } = useScreen();

  return (
    <div
      className={`w-full rounded-xl bg-light-850 p-8 dark:bg-dark-300 ${
        isFullScreen ? "absolute right-3 top-[100px] h-[90vh] w-[99vw]" : ""
      }`}
    >
      <ResizeLog
        title={title}
        isFullScreen={isFullScreen}
        onClick={toggleFullScreen}
      /> 
      <div
        className={`custom-scrollbar ${
          isFullScreen ? "h-screen" : `${logHeight}`
        } overflow-y-auto border-t`}
      >
        {children}
      </div>
    </div>
  );
};

export default LiveContainer;
