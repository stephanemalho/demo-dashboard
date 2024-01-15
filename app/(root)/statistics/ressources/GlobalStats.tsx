"use client";
import React from "react";
import chartConfig from "./ChartsCanvas/ChartConfig";
import ChartContainer from "@/components/shared/boxContainer/ChartContainer";

const GlobalStats = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-1 md:grid-cols-2 lg:grid-rows-2">
      {chartConfig.map((chart, index) => (
        <ChartContainer key={index}>
          <chart.Component {...chart.props} />
        </ChartContainer>
      ))}
    </div>
  );
};

export default GlobalStats;
