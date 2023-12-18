import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import React from "react";
import DiffLines from "./Diff/DiffLines";
import jsonData from "@/data/data.json"; 

const page = () => {
  const oldTextFile = {
    content: jsonData.map((item) => item.Text1),
  };
  const newTextFile = {
    content: jsonData.map((item) => item.Text2),
  };

  return (
    <div className=" ml-auto flex h-full max-h-screen w-[96vw] flex-row justify-between max-2xl:w-[94vw]">
        <LiveContainer
          title="Test Array"
          label="Test Array"
          logHeight="h-[90vh] max-2xl:h-[85vh] w-full max-2xl:w-full m-auto"
        >
          <div className="custom-scrollbar m-1 mx-auto w-[98%] whitespace-nowrap bg-[#fff] p-1 text-[#dde1e6]">
            <DiffLines newText={oldTextFile} oldText={newTextFile} />
          </div>
        </LiveContainer>
    </div>
  );
};

export default page;
