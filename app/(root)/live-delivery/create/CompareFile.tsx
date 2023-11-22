"use client";
import React from "react";
import { diffWordsWithSpace } from "diff";
import { DiffViewerProps } from "@/types";

import DiffLine from "./Diff/DiffLine";
import { lineHasChanges, newLinesCount, totalLines } from "@/utils/arrays";

const DiffViewer: React.FC<DiffViewerProps> = ({ oldText, newText }) => {
  const numberOfModifiedLines = newLinesCount(oldText, newText, lineHasChanges);
  const numberOfTotalNewLines = totalLines(newText);

  const diffElements = oldText.content.map((oldLine, index) => {
    const newLine = newText.content[index] || "";
    const changes = diffWordsWithSpace(oldLine, newLine);
    const lineNumber = index + 1;
    const fragmentKey = `line-pair-${lineNumber}`;

    return (
      <React.Fragment key={fragmentKey}>
        {lineHasChanges(changes) && (
          <DiffLine
            key={fragmentKey}
            changes={changes}
            lineNum={lineNumber}
            isOld={true}
          />
        )}
        <DiffLine
          key={fragmentKey}
          changes={changes}
          lineNum={lineNumber}
          isOld={false}
        />
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="pr-2 text-[15px] text-[#f7a8a8]">
          Total of modified lines: {numberOfModifiedLines}
        </div>
        <div className="text-[15px] text-[#6FDC8C]">
          Total of lines: {numberOfTotalNewLines}
        </div>
      </div>
      <div className="flex-col">{diffElements}</div>
    </>
  );
};

export default DiffViewer;
