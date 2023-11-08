import IconInfo from "@/components/IconInfo";
import IconMaximize from "@/components/IconMaximize";
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
    <div className="shadow-light100_dark100 w-full border-[#e4e4e4] bg-light-850">
      <div className="base-bold flex h-[auto] items-center border-[1px] border-[#e4e4e4] bg-[#edf4ff] text-[12px] max-2xl:text-[8px]">
        <IconInfo title={title} />
        {label}
        <div className="ml-auto flex px-1">
          <IconResize />
          <IconMaximize />
        </div>
      </div>
      <div
        className={`custom-scrollbar ${logHeight} overflow-y-auto bg-[#fff] p-2`}
      >
        {children}
      </div>
    </div>
  );
};

export default LiveContainer;
