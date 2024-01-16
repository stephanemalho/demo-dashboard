"use client";
import React, { useState } from "react";
import DiffButton from "./DiffButton";
import DiffLine from "./DiffLine";
import { diffWordsWithSpace } from "diff";
import { lineHasChanges, newLinesCount } from "@/lib/utils/arrays";
import LinesToCompare from "./LineToCompare";
import { scrollToCorrespondingLine, toggleVisibilityLines } from "./toggle";
import { RenderDiffLinesProps } from "@/types";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import DiffLineInfo from "./DiffLineInfo";

const RenderDiffLines = ({
  oldText,
  newText,
  isSmallScreen,
}: RenderDiffLinesProps) => {
  // States or variables
  const numberOfModifiedLines = newLinesCount(oldText, newText, lineHasChanges);
  const [visibleLines, setVisibleLines] = useState(new Set());

  const toggleLinesVisibility = (start: number, end: number) => {
    toggleVisibilityLines(visibleLines, start, end, setVisibleLines);
  };

  const renderNonModifiedBlock = (
    start: number,
    end: number,
    position: any
  ) => (
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
      className={`m-auto flex h-full max-w-[92vw] flex-col transition-all duration-500 `}
    >
      <DiffLineInfo numberOfModifiedLines={numberOfModifiedLines} />
      <ResizablePanelGroup direction="horizontal">
        <div className="mx-auto flex min-h-[60vh] w-full flex-row">
          <ResizablePanel className=" flex w-full shrink-0 grow-0 flex-col overflow-y-auto">
            <div className="custom-scrollbar overflow-y-scroll">
              {oldTextElements}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="w-[8px] bg-[#39393999]" />
          <ResizablePanel className="custom-scrollbar flex w-full shrink-0 grow-0 flex-col overflow-y-auto">
            <div className="custom-scrollbar overflow-y-scroll">
              {newTextElements}
            </div>
          </ResizablePanel>
        </div>
      </ResizablePanelGroup>
    </div>
  );
};

export default RenderDiffLines;
