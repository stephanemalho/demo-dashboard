import { Change } from "diff";
import React from "react";

interface DiffLineProps {
  changes: Change[];
  lineNum: number;
  isOld: boolean;
  isVisible: boolean;
  isSmallScreen: boolean;
}

const DiffLine = ({
  changes,
  lineNum,
  isOld,
  isVisible,
  isSmallScreen,
}: DiffLineProps) => {
  // Déterminez si la ligne a été modifiée
  const lineIsModified = changes.some(
    (change) => change.added || change.removed
  );

  const lineBackgroundColor =
    !isOld && isSmallScreen
      ? "bg-[rgba(255,179,184,0.2)] hover:bg-[rgba(255,179,184,0.1)] border-b-[1px] border-[#161B22] "
      : "bg-[rgba(111,220,140,0.1)] hover:bg-[rgba(22,27,34,0.2)] border-b-[1px] border-[#161B22]";

  const lineBackgroundColorLarge = !isOld
    ? "bg-[rgba(111,220,140,0.1)] hover:bg-[rgba(22,27,34,0.2)] border-b-[1px] border-[#161B22]"
    : "bg-[rgba(255,179,184,0.2)] hover:bg-[rgba(255,179,184,0.1)] border-b-[1px] border-[#161B22] ";

  return (
    <div
      className={` flex h-[30px] items-center text-center text-[15px] hover:bg-[rgb(22,27,34)] max-2xl:text-[10px] ${
        lineIsModified ? lineBackgroundColor : ""
      } ${!isSmallScreen && lineIsModified ? lineBackgroundColorLarge : ""}`}
    >
      <span className={`min-w-[30px] border-r-[1px] border-[#dde1e6] pr-1 `}>
        {!isOld && isVisible && lineNum}
      </span>
      <span className={`min-w-[30px] border-r-[1px] border-[#dde1e6] pr-1 `}>
        {isOld && isVisible && lineNum}
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
                    ? "rounded-sm bg-[#A2191F] px-1"
                    : "rounded-sm bg-[rgba(111,220,140,0.8)] px-1 text-[#000]"
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
                    ? "rounded-sm bg-[rgba(111,220,140,0.8)] px-1 text-[#000]"
                    : "rounded-sm bg-[#A2191F] px-1"
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
};

export default DiffLine;
