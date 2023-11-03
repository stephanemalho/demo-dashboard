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
      className="shadow-light100_dark100 w-full  bg-light-850 p-2 dark:bg-dark-300 dark:text-slate-400"
    >
      <LiveTitle
        title={title}
        className="text-light400_light500 flex-between h3-semibold flex-row  max-2xl:text-[0.8rem]"
      /> 
      <div
        className={`custom-scrollbar ${logHeight} overflow-y-auto border-t dark:border-slate-700`}
      >
        {children}
      </div>
    </div>
  );
};

export default LiveContainer;
