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
                isVisible={true}
              />
            )}
            <DiffLine
              key={fragmentKey}
              changes={changes}
              lineNum={lineNumber}
              isOld={false}
              isVisible={true}
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
            isVisible={true}
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
            isVisible={true}
          />
        );
      });

      return (
        <>
          <div className="flex h-[86vh] w-full flex-col">
            <div className="sticky top-0 z-10 flex h-[30px] w-full flex-row bg-[rgba(0,0,0,0.8)]">
              <div className="basis-[50%] pr-2 text-[15px] text-[#e4e4e4]">
                Total of lines: {numberOfTotalNewLines}
              </div>
              <div className="basis-[50%] text-[15px] text-[#6FDC8C]">
                Total of modified lines: {numberOfModifiedLines}
              </div>
            </div>
            <div className="flex w-full flex-row">
              <div className="flex basis-[50%] flex-col overflow-x-auto overscroll-y-none ">
                {newTextElements}
              </div>
              <div className="flex basis-[50%] flex-col overflow-x-auto  overscroll-y-none">
                {oldTextElements}
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className={` max-2xl:h-[70vh] ${isLargeScreen && "h-[86vh] overflow-y-scroll"}`}>
      {isLargeScreen && (
        <div className="sticky top-0 flex justify-between bg-[rgba(0,0,0,0.8)]">
          <div className="text-[12px] text-[#f7a8a8]">
            Total of modified lines: {numberOfModifiedLines}, <span className="text-[#6FDC8C]">added lines: {numberOfModifiedLines}</span>
          </div>
          <div className="pr-2 text-[12px] text-[#e4e4e4]">
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
    </div>
  );
};
export default DiffViewer;
