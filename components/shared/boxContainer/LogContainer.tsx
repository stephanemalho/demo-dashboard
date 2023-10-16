import React from "react";
import ResizeLog from "../logBox/logs-components/ResizeLog";

import { useScreen } from "@/context/ScreenSizeContext";

interface BoxLogsProps {
  children: React.ReactNode;
}

const LogContainer = ({ children }: BoxLogsProps) => {
  const { isFullScreen, toggleFullScreen } = useScreen();

  return (
    <div
      className={`h-auto w-full rounded-xl bg-light-850 p-8 dark:bg-dark-100 ${
        isFullScreen ? "absolute right-3 top-[100px] h-[90vh] w-[99vw]" : ""
      }`}
    >
      <ResizeLog
        title="Live Logs"
        isFullScreen={isFullScreen}
        onClick={toggleFullScreen}
      />
      <div
        className={`custom-scrollbar ${
          isFullScreen ? "h-screen" : "h-[400px]"
        } overflow-y-auto border-t`}
      >
        {children}
      </div>
    </div>
  );
};

export default LogContainer;
