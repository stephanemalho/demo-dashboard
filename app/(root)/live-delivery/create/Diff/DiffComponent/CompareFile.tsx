"use client";
import React, { useEffect, useState } from "react";
import { diffWordsWithSpace } from "diff";
import { DiffViewerProps } from "@/types";

import DiffLine from "../DiffLine";
import { lineHasChanges, newLinesCount, totalLines } from "@/utils/arrays";
import DiffButton from "../DiffButton";

const DiffViewer: React.FC<DiffViewerProps> = ({ oldText, newText }) => {
  const numberOfModifiedLines = newLinesCount(oldText, newText, lineHasChanges);
  const numberOfTotalNewLines = totalLines(newText);

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

  const renderDiffElements = () => {
    if (isSmallScreen) {
      return oldText.content.map((oldLine, index) => {
        const newLine = newText.content[index] || "";
        const changes = diffWordsWithSpace(oldLine, newLine);
        const lineNumber = index + 1;
        const fragmentKey = `line-pair-${lineNumber}`;
        const lineChanged = lineHasChanges(changes);

        if (lineChanged) {
          return (
            <React.Fragment key={fragmentKey}>
              <DiffLine
                key={`old-${fragmentKey}`}
                changes={changes}
                lineNum={lineNumber}
                isOld={true}
                isVisible={true}
                isSmallScreen={isSmallScreen}
              />
              <DiffLine
                key={`new-${fragmentKey}`}
                changes={changes}
                lineNum={lineNumber}
                isOld={false}
                isVisible={true}
                isSmallScreen={isSmallScreen}
              />
            </React.Fragment>
          );
        } else if (showAllLines) {
          return (
            <DiffLine
              key={fragmentKey}
              changes={changes}
              lineNum={lineNumber}
              isOld={false}
              isVisible={true}
              isSmallScreen={isSmallScreen}
            />
          );
        }
        return null;
      });
    } else {
      const renderLine = (line: string, index: number, isOld: boolean) => {
        const otherLine = isOld
          ? newText.content[index]
          : oldText.content[index];
        const changes = diffWordsWithSpace(line, otherLine || "");
        if (lineHasChanges(changes) || showAllLines) {
          return (
            <DiffLine
              key={`${isOld ? "old" : "new"}-${index}`}
              changes={changes}
              lineNum={index + 1}
              isOld={isOld}
              isVisible={true}
              isSmallScreen={isSmallScreen}
            />
          );
        }
        return null;
      };

      const oldTextElements = oldText.content.map((line, index) =>
        renderLine(line, index, true)
      );

      const newTextElements = newText.content.map((line, index) =>
        renderLine(line, index, false)
      );

      return (
        <>
          <div className="m-auto flex h-[84vh] w-full max-w-[84vw] flex-col">
            <div className="sticky top-0 z-10 flex h-[20px] w-full flex-row bg-[#fff]">
              <div className="basis-[50%] pr-2 text-[15px] text-[#000]">
                Old source:
              </div>
              <div className=" text-[15px] text-[#6FDC8C]">New source:</div>
              <div className="basis-[50%] pl-[40px] text-[15px] text-[#6FDC8C]">
                modified lines: {numberOfModifiedLines}
              </div>
            </div>
            <div className="overflow-y-scroll">
            <DiffButton
              showAllLines={showAllLines}
              toggleShowAllLines={toggleShowAllLines}
            />
            <div className="flex w-full flex-row">
              <div className="flex min-w-full ">
                <div className="m-auto flex max-w-[50vw] basis-[50%] flex-col  overflow-x-scroll">
                  {oldTextElements}
                </div>
                <div className="m-auto flex max-w-[50vw] basis-[50%] flex-col  overflow-x-scroll">
                  {newTextElements}
                </div>
              </div>
            </div>
            <DiffButton
              showAllLines={showAllLines}
              toggleShowAllLines={toggleShowAllLines}
            />
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div
      className={` max-2xl:h-[70vh] ${
        isSmallScreen && "h-[86vh] overflow-y-auto"
      }`}
    >
      {isSmallScreen && (
        <div className="sticky top-0 flex justify-between bg-[#fff]">
          <div className="text-[12px] text-[#f7a8a8]">Old sources </div>
          <div className="pr-2 text-[12px] text-[#000]">
            <span className="text-[#6FDC8C]">
              New source {numberOfModifiedLines}{" "}
            </span>
            Total of lines: {numberOfTotalNewLines}
          </div>
        </div>
      )}
      <div className="flex flex-col truncate">
        <div
          className={`flex ${
            isSmallScreen ? "flex-col" : "flex-row"
          } overflow-auto`}
        >
          {isSmallScreen && (
            <DiffButton
              showAllLines={showAllLines}
              toggleShowAllLines={toggleShowAllLines}
            ></DiffButton>
          )}
          {renderDiffElements()}
          {isSmallScreen && (
            <DiffButton
              showAllLines={showAllLines}
              toggleShowAllLines={toggleShowAllLines}
            ></DiffButton>
          )}
        </div>
      </div>
    </div>
  );
};
export default DiffViewer;
