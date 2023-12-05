"use client";
import React, { useState } from "react";
import DiffButton from "./DiffButton";
import DiffLine from "./DiffLine";
import { diffWordsWithSpace } from "diff";
import { lineHasChanges, newLinesCount } from "@/utils/arrays";
import { useSidebar } from "@/context/SideBarProvider";
import LinesToCompare from "./LineToCompare";
import { toggleLines, toggleVisibilityLines } from "./toggle";

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
  const numberOfModifiedLines = newLinesCount(oldText, newText, lineHasChanges);
  const [visibleLines, setVisibleLines] = useState(new Set());
  const { isOpen } = useSidebar();

  const [showAllNonModified, setShowAllNonModified] = useState(false);

  const totalNonModifiedLines = oldText.content.reduce((count, line, index) => {
    const changes = diffWordsWithSpace(line, newText.content[index] || "");
    return count + (lineHasChanges(changes) ? 0 : 1);
  }, 0);

  const toggleAllLinesVisibility = () => {
    toggleLines(setShowAllNonModified, showAllNonModified, oldText, newText, setVisibleLines);
  };

  const toggleLinesVisibility = (start: any, end: number) => {
    toggleVisibilityLines(visibleLines, start, end, setVisibleLines);

  };

  const renderNonModifiedBlock = (start: any, end: number) => (
    <DiffButton
      key={`non-modified-${start}-${end}`}
      toggleShowAllLines={() => toggleLinesVisibility(start, end)}
      showAllLines={visibleLines.has(start)}
    >
      <span className="mr-2 text-[12px]">{` ${start + 1}-${end + 1}`}</span>
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

    // Parcourez l'ancien texte et trouvez les blocs non modifiés et ajoutés
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
        // Ajoutez la ligne supprimée
        if (!isNewLine) {
          const lineElement = (
            <DiffLine
              key={`old-line-${index}`}
              changes={changes}
              lineNum={index + 1}
              isOld={true}
              isVisible={true}
              isSmallScreen={isSmallScreen}
            />
          );
          oldTextElements.push(lineElement);
        }
      }
    });
    // Parcourez le nouveau texte et trouvez les lignes ajoutées
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
        // Ajoutez la ligne ajoutée
        if (!isOldLine) {
          const lineElement = (
            <DiffLine
              key={`new-line-${index}`}
              changes={changes}
              lineNum={index + 1}
              isOld={false}
              isVisible={true}
              isSmallScreen={isSmallScreen}
            />
          );
          newTextElements.push(lineElement);
        }
      }
    });
    // Vérifiez s'il y a des lignes ajoutées à la fin du nouveau fichier
    if (addedLinesStart !== null) {
      addNonModifiedAndAddedLines(
        addedLinesStart,
        newText.content.length - 1,
        false
      );
    }
    // Vérifiez s'il reste des blocs non modifiés dans l'ancien fichier
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
      className={`m-auto flex h-full max-w-[92vw] flex-col ${
        isOpen
          ? "m-auto max-w-[70vw] max-2xl:ml-auto max-2xl:max-w-[70vw]"
          : "w-full"
      }`}
    >
      <div className="sticky top-0 z-10 flex w-full flex-row bg-[#fff] p-1 shadow-sm">
        <div className="basis-[50%] pr-2 text-[15px] text-[#000]">
          Target file:
        </div>
        <div className="text-[15px] text-[#6FDC8C]">New file:</div>
        <div className="ml-auto pl-[40px] text-[15px] text-[#434343]">
          modified lines: {numberOfModifiedLines}
        </div>
      </div>
      <DiffButton
        toggleShowAllLines={toggleAllLinesVisibility}
        showAllLines={showAllNonModified}
      >
        <span className="mr-2 text-[12px]">
        {showAllNonModified ? `Hide (${totalNonModifiedLines}) lines` : `Show (${totalNonModifiedLines}) lines`}
        </span>
      </DiffButton>
      <div className={`mx-auto flex min-h-[60vh] flex-row`}>
        <div className="flex w-[40vw] basis-[50%] flex-col overflow-x-auto ">
          {oldTextElements}
        </div>
        <div className="flex w-[40vw] basis-[50%] flex-col overflow-x-auto">
          {newTextElements}
        </div>
      </div>
    </div>
  );
};

export default RenderDiffLines;

