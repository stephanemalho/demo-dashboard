"use client";
import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { startupTimeOptions } from "../CanvasJS";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const StartupTime = () => {
  return <CanvasJSChart options={startupTimeOptions} />;
};

export default StartupTime;
