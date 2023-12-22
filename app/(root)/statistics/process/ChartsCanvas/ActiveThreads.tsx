"use client";
import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { activeThreadsAndUsersOptions } from "../CanvasJS";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ActiveThreads = () => {
  return <CanvasJSChart options={activeThreadsAndUsersOptions} />;
};

export default ActiveThreads;
