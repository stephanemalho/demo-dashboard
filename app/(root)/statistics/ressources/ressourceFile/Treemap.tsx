"use client";
import React, { useRef, useState, useEffect } from "react";
import { Treemap, Tooltip } from "recharts";
import { transformData } from "@/lib/utils/transformData";
import treemapData from "@/data/treemap.json";
import { CustomTooltip } from "./TooltipFormat";

const TreemapComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [transformedData, setTransformedData] = useState<any[]>([]);
  const getDimensions = (ref: any) => ({
    width: ref.current.offsetWidth - 10,
    height: ref.current.offsetHeight - 10,
  });

  useEffect(() => {
    if (ref.current) setDimensions(getDimensions(ref));
    const data = transformData(treemapData);
    setTransformedData(data);
  }, []);

  // const getColor = (name: string) => {
  //   // Exemple simple basé sur le nom
  //   switch (name) {
  //     case "axis":
  //       return "#052EA8";
  //     case "controls":
  //       return "#0062FF";
  //     case "data":
  //       return "#97C1FF";
  //     case "ScaleBinding":
  //       return "#408BFC";
  //     case "TreeBuilder":
  //       return "#6EA6FF";
  //     case "Tree":
  //       return "#C9DEFF";
  //     default:
  //       return "#001141";
  //   }
  // };

  // const dataWithColor = treeMap.map((item) => ({
  //   ...item,
  //   fill: getColor(item.name),
  // }));

  return (
    <div
      className="custom-scrollbar h-full overflow-y-scroll"
      ref={ref}
      style={{ width: "100%" }}
    >
      <Treemap
        width={dimensions.width}
        height={dimensions.height}
        data={transformedData}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#fff"
      >
        <Tooltip content={CustomTooltip} />
      </Treemap>
    </div>
  );
};

export default TreemapComponent;
