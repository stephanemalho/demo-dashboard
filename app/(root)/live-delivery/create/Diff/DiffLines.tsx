import React from "react";
import { DiffViewerProps } from "@/types";
import RenderDiffLines from "./DiffComponent/RenderDiffLines";


const DiffLines: React.FC<DiffViewerProps> = ({ oldText, newText }) => {
  return (
    <div className="h-[85vh] w-full max-2xl:h-[70vh]">
      <div className="flex h-full flex-col border-[1px]">
        <div className={`flex h-full w-full overflow-auto`}>
          <div className="mx-auto h-full w-full">
            <RenderDiffLines
              oldText={oldText}
              newText={newText}
              isSmallScreen={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiffLines;
