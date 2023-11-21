"use client";
import React from "react";
import { diffWordsWithSpace, Change } from "diff";
import Image from "next/image";

interface DiffFile {
  document: string;
  content: string[];
}

interface DiffViewerProps {
  oldText: DiffFile;
  newText: DiffFile;
}

const DiffViewer: React.FC<DiffViewerProps> = ({ oldText, newText }) => {
  // Cette fonction vérifie si une ligne a des modifications
  const lineHasChanges = (changes: Change[]) =>
    changes.some((change) => change.added || change.removed);

  const countModifiedLines = () => {
    return oldText.content.reduce((count, oldLine, index) => {
      const newLine = newText.content[index] || "";
      const changes = diffWordsWithSpace(oldLine, newLine);
      return count + (lineHasChanges(changes) ? 1 : 0);
    }, 0);
  };

  const countTotalNewLines = () => {
    return newText.content.length;
  };

  const numberOfModifiedLines = countModifiedLines();
  const numberOfTotalNewLines = countTotalNewLines();

  const handleDelete = () => {
    alert("delete");
  };

  const renderLine = (
    line: string,
    changes: Change[],
    lineNum: number,
    isOld: boolean,
    key: string | number
  ) => (
    // Et l'utiliser ici sur l'élément div le plus externe
    <div
      key={key}
      className="flex h-auto text-[15px] hover:bg-[#e3e3e3] max-2xl:text-[10px]"
    >
      <span className="min-w-[30px] border-r-[1px] border-[#000] pr-2 text-center">
        {lineNum}
      </span>
      <div className="m-1 flex">
        {isOld ? (
          <span
            onClick={handleDelete}
            className="relative flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-[#f7a8a8] p-2 text-center"
          >
            <Image
              className="absolute"
              src="/assets/icons/subtract.svg"
              alt="subtract"
              width={10}
              height={10}
            />
          </span>
        ) : (
          <span
            onClick={handleDelete}
            className="relative flex h-[14px] w-[14px] cursor-pointer items-center justify-center rounded-full bg-[#89dcc0] p-2 text-center"
          >
            <Image
              className="absolute"
              src="/assets/icons/add.svg"
              alt="add"
              width={10}
              height={10}
            />
          </span>
        )}
      </div>
      <div className={`pl-2 `}>
        {changes.map((part, index) => {
          if ((part.added && !isOld) || (part.removed && isOld)) {
            return (
              <span
                key={index}
                className={
                  part.added
                    ? "rounded bg-[#89dcc0] px-1"
                    : "rounded bg-[#f7a8a8] px-1 "
                }
              >
                {part.value}
              </span>
            );
          } else if (!part.added && !part.removed) {
            return <span key={index}>{part.value}</span>;
          }
          return null;
        })}
      </div>
    </div>
  );
  const renderDiff = () => {
    // eslint-disable-next-line no-undef
    const diffElements: JSX.Element[] = [];
    oldText.content.forEach((oldLine, index) => {
      const newLine = newText.content[index] || "";
      const changes = diffWordsWithSpace(oldLine, newLine);
      const lineNumber = index + 1;

      // Clé unique pour chaque pair de lignes
      const keyForOldLine = `old-${lineNumber}`;
      const keyForNewLine = `new-${lineNumber}`;

      if (lineHasChanges(changes)) {
        // Ajoutez la prop `key` ici pour l'ancienne ligne
        diffElements.push(
          renderLine(oldLine, changes, lineNumber, true, keyForOldLine)
        );
      }
      // Ajoutez la prop `key` ici pour la nouvelle ligne
      diffElements.push(
        renderLine(newLine, changes, lineNumber, false, keyForNewLine)
      );
    });
    return diffElements;
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-start pb-1">
        <h2 className="px-2 font-bold text-[12px] text-[#89dcc0] max-2xl:text-[10px]">{`${numberOfModifiedLines} line has been modified`}</h2>
        <h2 className="font-bold text-[12px] text-[#8b8b8b] max-2xl:text-[10px]">{`Total lines ${numberOfTotalNewLines}`}</h2>
      </div>
      {renderDiff()}
    </div>
  );
};

export default DiffViewer;
