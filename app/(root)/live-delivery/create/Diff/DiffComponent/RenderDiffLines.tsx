"use client";
import React, { useState } from "react";
import DiffButton from "./DiffButton";
import DiffLine from "./DiffLine";
import { diffWordsWithSpace } from "diff";
import { lineHasChanges, newLinesCount } from "@/lib/utils/arrays";
import { useSidebar } from "@/context/SideBarProvider";
import LinesToCompare from "./LineToCompare";
import { toggleVisibilityLines } from "./toggle";

export interface TextContent {
  content: string[];
}

interface RenderDiffLinesProps {
  oldText: TextContent;
  newText: TextContent;
  isSmallScreen: boolean;
}

const RenderDiffLines = ({
  oldText,
  newText,
  isSmallScreen,
}: RenderDiffLinesProps) => {
  // States or variables
  const numberOfModifiedLines = newLinesCount(oldText, newText, lineHasChanges);
  const [visibleLines, setVisibleLines] = useState(new Set());
  const { isOpen } = useSidebar();

  const scrollToCorrespondingLine = (lineNum: any) => {
    const correspondingLineIdOld = `line-old-${lineNum}`;
    const correspondingLineIdNew = `line-new-${lineNum}`;
    const elementOld = document.getElementById(correspondingLineIdOld);
    const elementNew = document.getElementById(correspondingLineIdNew);
  
    if (elementOld) {
      elementOld.scrollIntoView({ behavior: 'smooth', block: 'center' });
      console.log("test",elementOld
        );
      
    }
    if (elementNew) {
      elementNew.scrollIntoView({ behavior: 'smooth', block: 'center' });
      console.log("test2",elementNew
        );
    }
  };

  const toggleLinesVisibility = (start: number, end: number) => {
    toggleVisibilityLines(visibleLines, start, end, setVisibleLines);
  };

  const renderNonModifiedBlock = (start: number, end: number, position: any) => (
    <DiffButton
      key={`non-modified-${start}-${end}-${position}`}
      toggleShowAllLines={() => toggleLinesVisibility(start, end)}
      showAllLines={visibleLines.has(start)}
    >
      <span className="mr-2 text-[12px]">{`${start + 1}-${end + 1}`}</span>
    </DiffButton>
  );

  const renderDiffElements = () => {
    let nonModifiedBlockStart: any = null;
    let addedLinesStart: any = null;
    const oldTextElements: React.JSX.Element[] = [];
    const newTextElements: React.JSX.Element[] = [];
    const addNonModifiedAndAddedLines = LinesToCompare(
      renderNonModifiedBlock,
      oldTextElements,
      newTextElements,
      visibleLines,
      oldText,
      newText,
      isSmallScreen
    );
    oldText.content.forEach((line, index) => {
      const changes = diffWordsWithSpace(line, newText.content[index] || "");
      const isNewLine = index >= oldText.content.length;
      if (!lineHasChanges(changes) && !isNewLine) {
        if (nonModifiedBlockStart === null) {
          nonModifiedBlockStart = index;
        }
      } else {
        if (nonModifiedBlockStart !== null) {
          addNonModifiedAndAddedLines(nonModifiedBlockStart, index - 1, true);
          nonModifiedBlockStart = null;
        }
        // add old line
        if (!isNewLine) {
          const lineElement = (
            <DiffLine
              key={`old-line-${index}`}
              changes={changes}
              lineNum={index + 1}
              isOld={true}
              isVisible={true}
              isSmallScreen={isSmallScreen}
              scrollToCorrespondingLine={scrollToCorrespondingLine}
            />
          );
          oldTextElements.push(lineElement);
        }
      }
    });
    // found new added lines
    newText.content.forEach((line, index) => {
      const changes = diffWordsWithSpace(line, oldText.content[index] || "");
      const isOldLine = index >= newText.content.length;
      if (!lineHasChanges(changes) && !isOldLine) {
        if (addedLinesStart === null) {
          addedLinesStart = index;
        }
      } else {
        if (addedLinesStart !== null) {
          addNonModifiedAndAddedLines(addedLinesStart, index - 1, false);
          addedLinesStart = null;
        }
        // add new line
        if (!isOldLine) {
          const lineElement = (
            <DiffLine
              key={`new-line-${index}`}
              changes={changes}
              lineNum={index + 1}
              isOld={false}
              isVisible={true}
              isSmallScreen={isSmallScreen}
              scrollToCorrespondingLine={scrollToCorrespondingLine}
            />
          );
          newTextElements.push(lineElement);
        }
      }
    });
    // check if there are non modified blocks in the new file
    if (addedLinesStart !== null) {
      addNonModifiedAndAddedLines(
        addedLinesStart,
        newText.content.length - 1,
        false
      );
    }
    // check if there are non modified blocks in the old file
    if (nonModifiedBlockStart !== null) {
      addNonModifiedAndAddedLines(
        nonModifiedBlockStart,
        oldText.content.length - 1,
        true
      );
    }
    return { oldTextElements, newTextElements };
  };

  const { oldTextElements, newTextElements } = renderDiffElements();

  return (
    <div
    className={`m-auto flex h-full max-w-[92vw] flex-col transition-all duration-500 ${
      isOpen ? "m-auto max-w-[64vw] max-2xl:ml-auto max-2xl:max-w-[70vw]" : "w-full"
    }`}
  >
    <div className="sticky top-0 z-10 flex w-full flex-row bg-[#fff] p-1 shadow-sm">
      <div className="shrink grow-0 basis-1/2 pr-2 text-[#000]">
        Target file:
      </div>
      <div className="shrink grow-0 basis-1/2 text-[#6FDC8C]">
        New file:
      </div>
      <div className="ml-auto pl-[40px] text-[#434343]">
        modified lines: {numberOfModifiedLines}
      </div>
    </div>
    <div className="mx-auto flex min-h-[60vh] w-full flex-row">
      <div className="custom-scrollbar flex w-1/2 shrink-0 grow-0 flex-col overflow-x-auto">
        {oldTextElements}
      </div>
      <div className="custom-scrollbar flex w-1/2 shrink-0 grow-0 flex-col overflow-x-auto">
        {newTextElements}
      </div>
    </div>
  </div>
  
  );
};

export default RenderDiffLines;
