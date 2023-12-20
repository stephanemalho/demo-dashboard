import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import React from "react";
import DiffLines from "./Diff/DiffLines";
import jsonData from "@/data/data.json";
import ContentContainer from "@/components/shared/contentContainer/ContentContainer";

const page = () => {
  const oldTextFile = {
    content: jsonData.map((item) => item.Text1),
  };
  const newTextFile = {
    content: jsonData.map((item) => item.Text2),
  };

  return (
    <ContentContainer>
      <LiveContainer
        title="Test Array"
        label="Test Array"
        logHeight="h-[90vh] max-2xl:h-[85vh] w-full max-2xl:w-full m-auto"
      >
        <div className="custom-scrollbar m-1 mx-auto w-[98%] whitespace-nowrap bg-[#fff] p-1 text-[#dde1e6]">
          <DiffLines newText={oldTextFile} oldText={newTextFile} />
        </div>
      </LiveContainer>
    </ContentContainer>
  );
};

export default page;
