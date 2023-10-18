import React from "react";
import LiveTitle from "../../LiveTitle";

interface BoxLogsProps {
  children: React.ReactNode;
  title: string;
  logHeight: string;
}

const LiveContainer = ({ children, title, logHeight }: BoxLogsProps) => {
  return (
    <div
      className="w-full rounded-xl bg-light-850 p-5 dark:bg-dark-300 "
    >
      <LiveTitle
        title={title}
        className="flex-between h3-semibold flex-row pb-4"
      /> 
      <div
        className={`custom-scrollbar ${logHeight} overflow-y-auto border-t`}
      >
        {children}
      </div>
    </div>
  );
};

export default LiveContainer;