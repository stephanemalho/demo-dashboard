"use client";
import React, { useEffect, useState } from "react";
import { DiffViewerProps } from "@/types";

import RenderDiffLines from "./renderDiffLines";

const TestArray: React.FC<DiffViewerProps> = ({ oldText, newText }) => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showAllLines, setShowAllLines] = useState(false);

  const toggleShowAllLines = () => {
    setShowAllLines(!showAllLines);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 1533px)").matches);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="h-[85vh] max-2xl:h-[70vh]"
    >
      <div className="flex h-full flex-col truncate border-[1px]">
        <div
          className={`flex ${
            isSmallScreen ? "flex-col" : "flex-row"
          } h-full w-full overflow-auto `}
        >
          <div className="mx-auto">
          <RenderDiffLines oldText={oldText} newText={newText} toggleShowAllLines={toggleShowAllLines} showAllLines={showAllLines} isSmallScreen={isSmallScreen}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestArray;