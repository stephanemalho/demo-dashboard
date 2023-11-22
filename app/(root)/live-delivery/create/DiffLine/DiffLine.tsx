import { Change } from "diff";
import MinusIcon from "../FileIcons/MinusIcon";
import AddIcon from "../FileIcons/AddIcon";
import React from "react";

interface DiffLineProps {
    changes: Change[],
    lineNum: number,
    isOld: boolean,
    key: string | number
}

const DiffLine = ({ changes, lineNum, isOld } : DiffLineProps) => {

  const lineIsModified = changes.some(change => change.added || change.removed);
  const lineBackgroundColor = isOld ? "bg-[#fdecec]" : "bg-[#e5f7f1]"; 

  const onDelete = () => {
    alert("delete");
  };

  return (
    <div
    className={`flex h-auto text-[15px] hover:bg-[#e3e3e3] max-2xl:text-[10px] ${lineIsModified ? lineBackgroundColor : ''}`}
  >
      <span className="min-w-[30px] border-r-[1px] border-[#000] pr-2 text-center">
        {lineNum}
      </span>
      <div className="m-1 flex">
        {isOld ? (
          <MinusIcon handleDeleteElement={onDelete} />
        ) : (
          <AddIcon handleDeleteElement={onDelete} />
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
};

export default DiffLine;