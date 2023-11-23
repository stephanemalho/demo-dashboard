"use client";
import React from "react";
import { diffWordsWithSpace } from "diff";
import { DiffViewerProps } from "@/types";

import DiffLine from "./Diff/DiffLine";
import { lineHasChanges, newLinesCount, totalLines } from "@/utils/arrays";

const DiffViewer: React.FC<DiffViewerProps> = ({ oldText, newText }) => {
  
  const numberOfModifiedLines = newLinesCount(oldText, newText, lineHasChanges);
  const numberOfTotalNewLines = totalLines(newText);

  const oldTextElements = oldText.content.map((line, index) => {
    const changes = diffWordsWithSpace(line, newText.content[index] || "");
    return (
      <DiffLine
        key={`old-${index}`}
        changes={changes}
        lineNum={index + 1}
        isOld={true}
      />
    );
  });

  const newTextElements = newText.content.map((line, index) => {
    const changes = diffWordsWithSpace(oldText.content[index] || "", line);
    return (
      <DiffLine
        key={`new-${index}`}
        changes={changes}
        lineNum={index + 1}
        isOld={false}
      />
    );
  });

  return (
    <div className="flex flex-row truncate">
      <div className="flex w-1/2 flex-col">
      <div className="pr-2 text-[15px] text-[#f7a8a8]">
          Total of lines: {numberOfTotalNewLines}
        </div>
        <div className="overflow-x-auto">
        {newTextElements}
        </div>
      </div>
      <div className="flex w-1/2 flex-col">
      <div className="text-[15px] text-[#6FDC8C]">
          Total of modified lines: {numberOfModifiedLines}
        </div>
        <div className="overflow-x-auto">
        {oldTextElements}
        </div>
      </div>
    </div>
  );
};
export default DiffViewer;
