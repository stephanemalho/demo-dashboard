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
      className="shadow-light100_dark100 w-full rounded-xl bg-light-850 p-5 dark:bg-dark-300 dark:text-slate-400  max-2xl:rounded-sm  max-2xl:p-2"
    >
      <LiveTitle
        title={title}
        className="text-light400_light500 flex-between h3-semibold flex-row  max-2xl:text-[0.8rem]"
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
