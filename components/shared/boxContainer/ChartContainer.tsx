import React from "react";
import Title from "../title/Title";

interface ChartContainerProps {
  children: React.ReactNode;
  key?: number;
  headTitle?: string | React.ReactNode;
  height?: string;
}

const ChartContainer = ({children , key, headTitle, height} : ChartContainerProps) => {
  return (
    <div key={key && key} className={`rounded-lg py-2 shadow-lg lg:min-h-[40vh]  ${height}`}>
      <Title title={headTitle && headTitle} className="mb-4" />
      <div className="chart-container max-2xl:h-[30vh] lg:h-[40vh]">
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;
