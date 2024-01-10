"use client";
import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { ramAndGarbageUseOptions } from "../CanvasJS";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const RamAndGarbage = () => {
  return <CanvasJSChart options={ramAndGarbageUseOptions} />;
};

export default RamAndGarbage;
