"use client";
import { Button } from "@/components/ui/button";
import Mapping from "../menuItem/Mapping";
import Nodes from "../menuItem/Nodes";
import { useState } from "react";
import ShowEdges from "../menuItem/ShowEdges";
import ShowNodes from "../menuItem/ShowNodes";
import ContainerWrapper from "@/components/shared/sideBars/optionSideBar/optionSideBarComponent/ContainerWrapper";

const SelectMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("Mapping");

  const showMapping = () => setSelectedMenu("Mapping");
  const showNodes = () => setSelectedMenu("Nodes");
  const showEdges = () => setSelectedMenu("Edges");
  const showNodeList = () => setSelectedMenu("Node List");

  return (
    <ContainerWrapper>
      <div className="custom-scrollbar mb-10 overflow-y-auto bg-white  shadow">
        <div className=" flex w-full">
          <Button
            onClick={showMapping}
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className={`grow rounded-none text-center  ${
              selectedMenu === "Mapping"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Mapping
          </Button>
          <Button
            onClick={showNodes}
            className={`grow rounded-none text-center ${
              selectedMenu === "Nodes"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Nodes
          </Button>
          <Button
            onClick={showEdges}
            className={`grow rounded-none text-center ${
              selectedMenu === "Edges"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Edges
          </Button>
          <Button
            onClick={showNodeList}
            className={`grow rounded-none text-center ${
              selectedMenu === "Node List"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Node List
          </Button>
        </div>
        <div className="p-4">
          {selectedMenu === "Mapping" && <Mapping />}
          {selectedMenu === "Nodes" && <Nodes />}
          {selectedMenu === "Edges" && <ShowEdges />}
          {selectedMenu === "Node List" && <ShowNodes />}
        </div>
        <div className="mb-6 mt-2">
          <Button className="w-full rounded-none bg-green-500 text-white">RUN</Button>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default SelectMenu;
