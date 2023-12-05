import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import React from "react";
import TestArray from "./testArray";
import jsonData from "@/data/data.json"; // Assurez-vous que le chemin est correct
import RenderContainer from "../../live-delivery/create/RenderContainer/RenderContainer";

const page = () => {
  const oldTextFile = {
    content: jsonData.map((item) => item.Text1),
  };
  const newTextFile = {
    content: jsonData.map((item) => item.Text2),
  };

  return (
    <div className="flex min-h-[80vh]  w-[98vw] flex-row justify-between">
      <RenderContainer />
      <div className="ml-1 flex h-[90vh] w-full max-w-[96vw] flex-col text-[10px] transition-all duration-500">
        <LiveContainer
          title="Test Array"
          label="Test Array"
          logHeight="h-[90vh] max-2xl:h-[80vh] w-auto w-full max-2xl:w-full m-auto"
        >
          <div className="custom-scrollbar m-4 w-full whitespace-nowrap bg-[#fff] p-1 text-[#dde1e6]">
            <TestArray newText={oldTextFile} oldText={newTextFile} />
          </div>
        </LiveContainer>
      </div>
    </div>
  );
};

export default page;
