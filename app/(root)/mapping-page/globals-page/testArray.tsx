"use client";
import React, { useState } from "react";
import { DiffViewerProps } from "@/types";

import RenderDiffLines from "./renderDiffLines";

const TestArray: React.FC<DiffViewerProps> = ({ oldText, newText }) => {

  const [showAllLines, setShowAllLines] = useState(false);

  const toggleShowAllLines = () => {
    setShowAllLines(!showAllLines);
  };

  return (
    <div
      className="h-[85vh] max-2xl:h-[70vh]"
    >
      <div className="flex h-full flex-col truncate border-[1px]">
        <div
          className={`flex h-full w-full overflow-auto `}
        >
          <div className="mx-auto">
          <RenderDiffLines oldText={oldText} newText={newText} toggleShowAllLines={toggleShowAllLines} showAllLines={showAllLines} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestArray;