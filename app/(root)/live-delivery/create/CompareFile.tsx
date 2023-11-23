"use client";
import React, { useEffect, useState } from "react";
import { diffWordsWithSpace } from "diff";
import { DiffViewerProps } from "@/types";

import DiffLine from "./Diff/DiffLine";
import { lineHasChanges, newLinesCount, totalLines } from "@/utils/arrays";

const DiffViewer: React.FC<DiffViewerProps> = ({ oldText, newText }) => {
  const numberOfModifiedLines = newLinesCount(oldText, newText, lineHasChanges);
  const numberOfTotalNewLines = totalLines(newText);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.matchMedia("(max-width: 1533px)").matches);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const renderDiffElements = () => {
    if (isLargeScreen) {
      return oldText.content.map((oldLine, index) => {
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
    } else {
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
        <>
          <div className="flex w-full flex-row overflow-x-hidden truncate">
            <div className="flex basis-[50%] flex-col overflow-x-auto">
              <div className="pr-2 text-[15px] text-[#e4e4e4]">
                Total of lines: {numberOfTotalNewLines}
              </div>
              {newTextElements}
            </div>
            <div className="flex basis-[50%] flex-col overflow-x-auto">
              <div className="text-[15px] text-[#6FDC8C]">
                Total of modified lines: {numberOfModifiedLines}
              </div>
              {oldTextElements}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      {isLargeScreen && (
        <div className="flex justify-between">
          <div className="text-[15px]  text-[#f7a8a8]">
            Total of modified lines: {numberOfModifiedLines}, <span className="text-[#6FDC8C]">added lines: {numberOfModifiedLines}</span>
          </div>
          <div className="pr-2 text-[15px] text-[#e4e4e4]">
            Total of lines: {numberOfTotalNewLines}
          </div>
        </div>
      )}
      <div className="flex flex-col truncate">
        <div
          className={`flex ${
            isLargeScreen ? "flex-col" : "flex-row"
          } overflow-x-auto`}
        >
          {renderDiffElements()}
        </div>
      </div>
    </>
  );
};
export default DiffViewer;
