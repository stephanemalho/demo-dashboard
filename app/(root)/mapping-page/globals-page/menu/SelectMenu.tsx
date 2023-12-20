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
      <div className=" bg-white p-4 shadow">
        <div className="mb-4 flex w-full justify-between space-x-2">
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
        <div>
          {selectedMenu === "Mapping" && <Mapping />}
          {selectedMenu === "Nodes" && <Nodes />}
          {selectedMenu === "Edges" && <ShowEdges />}
          {selectedMenu === "Node List" && <ShowNodes />}
        </div>
        <div className="mt-6">
          <Button className="w-full bg-green-500 text-white">RUN</Button>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default SelectMenu;
