"use client";
import React from "react";
import chartConfig from "./ChartsCanvas/ChartConfig";

const GlobalStats = () => {
  return (
    <div className="grid grid-cols-1 gap-8 p-1 md:grid-cols-2">
      {chartConfig.map((chart, index) => (
        <div key={index} className="rounded-lg p-3 shadow-lg">
          <div className="chart-container h-[30vh]">
            <chart.Component {...chart.props} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlobalStats;
