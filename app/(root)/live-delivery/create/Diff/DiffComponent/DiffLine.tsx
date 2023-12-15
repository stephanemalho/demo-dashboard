import { Change } from "diff";
import React from "react";

interface DiffLineProps {
  changes: Change[];
  lineNum: number;
  isOld: boolean;
  isVisible: boolean;
  isSmallScreen: boolean;
  scrollToCorrespondingLine?: (lineNum: number) => void; // Ajout d'une prop pour la fonction de défilement
}

const DiffLine = ({
  changes,
  lineNum,
  isOld,
  isVisible,
  isSmallScreen,
  scrollToCorrespondingLine,
}: DiffLineProps) => {
  const lineId = `line-${isOld ? "old" : "new"}-${lineNum}`; // Identifiant unique pour chaque ligne

  const lineIsModified = changes.some(
    (change) => change.added || change.removed
  );

  const lineBackgroundColor = isBGColor();

  return (
    <div
      id={lineId}
      className={`flex h-[30px] items-center text-center text-[15px] text-[#000] max-2xl:text-[10px] ${
        lineIsModified ? lineBackgroundColor : ""
      }`}
    >
      <span
        className={`mr-1 min-w-[30px] border-r-[1px] border-[#f1f8ff] ${
          lineIsModified && !isOld ? "cursor-pointer hover:bg-[#87e39f]" : ""
        }`}
      >
        <a
          onClick={() => {
            if (lineIsModified && !isOld && scrollToCorrespondingLine) {
              scrollToCorrespondingLine(lineNum);
            }
          }} // Ajout de la fonction de défilement
          className="block h-full w-full"
        >
          {!isOld && isVisible && lineNum}
        </a>
      </span>
      <span
        className={`mr-1 min-w-[30px] border-r-[1px] border-[#f1f8ff] ${
          lineIsModified && isOld ? " cursor-pointer hover:bg-[#ffbdc5]" : ""
        }`}
      >
        <a
          onClick={() => {
            if (lineIsModified && isOld && scrollToCorrespondingLine) {
              scrollToCorrespondingLine(lineNum);
            }
          }} // Ajout de la fonction de défilement
          className="block h-full w-full"
        >
          {isOld && isVisible && lineNum}
        </a>
      </span>
      <div className={`pl-2 `}>
        {changes.map((part, index) => {
          if (
            (part.added && !isOld && !isSmallScreen) ||
            (part.added && isOld && !isSmallScreen)
          ) {
            return (
              <span
                key={index}
                className={
                  part.added && isOld
                    ? "z-10 rounded-sm bg-[#ffbdc5] px-1 "
                    : "z-10 rounded-sm bg-[#87e39f] px-1 text-[#000]"
                }
              >
                {part.value}
              </span>
            );
          } else if (
            (part.added && !isOld && isSmallScreen) ||
            (part.removed && isOld && isSmallScreen)
          ) {
            return (
              <span
                key={index}
                className={
                  part.removed && isOld
                    ? "z-10 rounded-sm bg-[#87e39f] px-1 text-[#000]"
                    : "z-10 rounded-sm bg-[#ffbdc5] px-1 "
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

  function isBGColor() {
    if (isOld && isSmallScreen) {
      return " bg-[#e6ffed] border-b-[1px] border-[#FFF] ";
    } else if (!isOld && !isSmallScreen) {
      return "bg-[#e6ffed] border-b-[1px] border-[#FFF] ";
    } else if (!isOld && isSmallScreen) {
      return "bg-[#ffeef0] border-b-[1px] border-[#FFF] ";
    }
    return "bg-[#ffeef0]  border-b-[1px] border-[#FFF]";
  }
};

export default DiffLine;
