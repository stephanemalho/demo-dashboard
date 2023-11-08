import IconInfo from "@/components/IconInfo";
import IconResize from "@/components/IconResize";
import React from "react";

interface BoxLogsProps {
  children: React.ReactNode;
  title: string;
  logHeight: string;
  label: string;
}

const LiveContainer = ({ children, logHeight, title, label }: BoxLogsProps) => {
 
  return (
    <div className="shadow-light100_dark100 w-full  bg-light-850 p-2">
      <div className="base-bold flex items-center text-[12px] max-2xl:text-[8px]">
        <IconInfo title={title} />
        {label}
        <IconResize />
      </div>
      <div
        className={`custom-scrollbar ${logHeight} overflow-y-auto border-t dark:border-slate-700`}
      >
        {children}
      </div>
    </div>
  );
};

export default LiveContainer;
