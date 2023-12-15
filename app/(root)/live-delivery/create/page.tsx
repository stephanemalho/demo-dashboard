import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import React from "react";
import DiffLines from "./Diff/DiffLines";
import jsonData from "@/data/data.json"; // Assurez-vous que le chemin est correct
import RenderContainer from "./RenderContainer/RenderContainer";

const page = () => {
  const oldTextFile = {
    content: jsonData.map((item) => item.Text1),
  };
  const newTextFile = {
    content: jsonData.map((item) => item.Text2),
  };

  return (
    <div className="fixed flex min-h-[80vh] w-[98vw] flex-row justify-between">
      <RenderContainer />
      <div className="ml-1 flex h-[90vh] w-full max-w-[96vw] flex-col text-[10px] transition-all duration-500">
        <LiveContainer
          title="Test Array"
          label="Test Array"
          logHeight="h-[90vh] max-2xl:h-[85vh] w-full max-2xl:w-full m-auto"
        >
          <div className="custom-scrollbar m-4 mx-auto w-[96%] whitespace-nowrap bg-[#fff] p-1 text-[#dde1e6]">
            <DiffLines newText={oldTextFile} oldText={newTextFile} />
          </div>
        </LiveContainer>
      </div>
    </div>
  );
};

export default page;
