"use client";
import React from "react";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";

interface ResizeLogProps {
  title : string;
  isFullScreen: boolean;
  onClick: () => void;
}

const ResizeLog = ({ title, isFullScreen, onClick}: ResizeLogProps) => {
  return (
    <div className="flex-between flex-row py-2">
      <h3 className="h3-semibold">{title}</h3>{" "}
      <div onClick={onClick} className="cursor-pointer">
        {isFullScreen ? <FiMinimize2 /> : <FiMaximize2 />}
      </div>
    </div>
  );
};

export default ResizeLog;
