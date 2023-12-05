"use client";
import React, { useState } from 'react'
import DiffButton from '../../live-delivery/create/Diff/DiffButton';
import DiffLine from '../../live-delivery/create/Diff/DiffLine';
import { diffWordsWithSpace } from 'diff';
import { lineHasChanges, newLinesCount } from '@/utils/arrays';
import { useSidebar } from '@/context/SideBarProvider';

const RenderDiffLines = ({oldText , newText, isSmallScreen} : any) => {
  const numberOfModifiedLines = newLinesCount(oldText, newText, lineHasChanges);
  const [visibleLines, setVisibleLines] = useState(new Set());
  const {isOpen} = useSidebar();

  const toggleLinesVisibility = (start: any , end: number) => {
    const newVisibleLines = new Set(visibleLines);
    for (let i = start; i <= end; i++) {
      if (newVisibleLines.has(i)) {
        newVisibleLines.delete(i);
      } else {
        newVisibleLines.add(i);
      }
    }
    setVisibleLines(newVisibleLines);
  };

  const renderNonModifiedBlock = (start: string, end: number) => (
    <DiffButton
      key={`non-modified-${start}-${end}`}
      toggleShowAllLines={() => toggleLinesVisibility(start, end)}
      showAllLines={visibleLines.has(start)}
    >
      {` ${start + 1}-${end + 1}`}
    </DiffButton>
  );

  const renderDiffElements = () => {
  let nonModifiedBlockStart: string  | any = "";

  const renderLine = (line: string, index: string | any , isOld: boolean) => {
    const otherLine = isOld ? newText.content[index] : oldText.content[index];
    const changes = diffWordsWithSpace(line, otherLine || "");

    if (!lineHasChanges(changes)) {
      if (nonModifiedBlockStart === null) {
        nonModifiedBlockStart = index;
      }

      let block = null;
      if (index === oldText.content.length - 1 || lineHasChanges(diffWordsWithSpace(oldText.content[index + 1], newText.content[index + 1] || ""))) {
        block = renderNonModifiedBlock(nonModifiedBlockStart, index);
        nonModifiedBlockStart = null;
      }

      return (
        <>
          {block}
          {visibleLines.has(index) && (
            <DiffLine
              key={`non-modified-line-${index}`}
              changes={changes}
              lineNum={index + 1}
              isOld={isOld}
              isVisible={true}
              isSmallScreen={isSmallScreen}
            />
          )}
        </>
      );
    }

    nonModifiedBlockStart = null;
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
  };

    const oldTextElements = oldText.content.map((line: any, index: any) => renderLine(line, index, true));
    const newTextElements = newText.content.map((line: any, index: any) => renderLine(line, index, false));

    return (
      <>
        <div className={`m-auto flex h-full  max-w-[92vw] flex-col ${isOpen ? "m-auto max-w-[70vw] max-2xl:ml-auto max-2xl:max-w-[70vw]": "w-full"}`}>
          <div className="sticky top-0 z-10 flex w-full flex-row bg-[#fff] p-1 shadow-sm">
            <div className="basis-[50%] pr-2 text-[15px] text-[#000]">
              Old source:
            </div>
            <div className=" text-[15px] text-[#6FDC8C]">New source:</div>
            <div className="basis-[50%] pl-[40px] text-[15px] text-[#6FDC8C]">
              modified lines: {numberOfModifiedLines}
            </div>
          </div>
          <div className={`flex min-h-[60vh] flex-row`}>
            <div className="flex basis-[50%] flex-col overflow-x-auto ">
              {oldTextElements}
            </div>
            <div className="flex basis-[50%] flex-col overflow-x-auto">
              {newTextElements}
            </div>
          </div>
        </div>
      </>
    );
};
  
    return (
      <div>
        {renderDiffElements()}
      </div>
    )
}

export default  RenderDiffLines