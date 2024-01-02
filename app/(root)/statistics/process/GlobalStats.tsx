"use client";
import React from "react";
import chartConfig from "./ChartsCanvas/ChartConfig";

const GlobalStats = () => {
  return (
    <div className="grid grid-cols-1 gap-8 p-1 md:grid-cols-2 lg:grid-rows-2">
      {chartConfig.map((chart, index) => (
        <div key={index} className="rounded-lg p-3 shadow-lg lg:min-h-[40vh]">
          <div className="chart-container max-2xl:h-[30vh] lg:h-full">
            <chart.Component {...chart.props} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlobalStats;
