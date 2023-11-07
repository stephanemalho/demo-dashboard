import IconInfo from "@/components/IconInfo";
import React from "react";

interface BoxLogsProps {
  children: React.ReactNode;
  title: string;
  logHeight: string;
}

const LiveContainer = ({ children, logHeight, title }: BoxLogsProps) => {
  return (
    <div className="shadow-light100_dark100 w-full  bg-light-850 p-2 dark:bg-dark-300 dark:text-slate-400">
      <IconInfo title={title} />
      <div
        className={`custom-scrollbar ${logHeight} overflow-y-auto border-t dark:border-slate-700`}
      >
        {children}
      </div>
    </div>
  );
};

export default LiveContainer;
