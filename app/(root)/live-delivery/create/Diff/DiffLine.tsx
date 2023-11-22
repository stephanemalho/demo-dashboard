import { Change } from "diff";
import MinusIcon from "../FileIcons/MinusIcon";
import AddIcon from "../FileIcons/AddIcon";
import React from "react";

interface DiffLineProps {
  changes: Change[];
  lineNum: number;
  isOld: boolean;
  key: string | number;
}

const DiffLine = ({ changes, lineNum, isOld }: DiffLineProps) => {
  const lineIsModified = changes.some(
    (change) => change.added || change.removed
  );
  const lineBackgroundColor = isOld
    ? "bg-[rgba(255,179,184,0.5)] hover:bg-[rgba(255,179,184,0.2)]" // Light red with 50% transparency
    : "";

  return (
    <div
      className={`flex h-[30px] items-center text-center text-[15px] hover:bg-[#161B22] max-2xl:text-[10px] ${
        lineIsModified ? lineBackgroundColor : ""
      }`}
    >
      <span className="min-w-[30px] border-r-[1px] border-[#dde1e6] pr-1">
        {lineNum}
      </span>
      <div className="m-1 pb-1 pl-1">{isOld ? <MinusIcon /> : <AddIcon />}</div>
      <div className={`pl-2 `}>
        {changes.map((part, index) => {
          if ((part.added && !isOld) || (part.removed && isOld)) {
            return (
              <span
                key={index}
                className={
                  part.added
                    ? "rounded-sm bg-[rgba(111,220,140,0.8)] px-1 text-[#000]"
                    : "rounded-sm bg-[#A2191F] px-1 "
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
