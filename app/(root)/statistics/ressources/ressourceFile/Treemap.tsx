"use client";
import React, { useRef, useState, useEffect } from "react";
import { Treemap, Tooltip } from "recharts";
import { treeMap } from "@/data/dashboard";

const TreemapComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, []);

  const getColor = (name: string) => {
    // Exemple simple basé sur le nom
    switch (name) {
      case "axis":
        return "#052EA8";
      case "controls":
        return "#0062FF";
      case "data":
        return "#97C1FF";
      case "ScaleBinding":
        return "#408BFC";
      case "TreeBuilder":
        return "#6EA6FF";
      case "Tree":
        return "#C9DEFF";
      default:
        return "#001141";
    }
  };

  const dataWithColor = treeMap.map((item) => ({
    ...item,
    fill: getColor(item.name),
  }));

  // Fonction pour le contenu personnalisé de l'infobulle
  const CustomTooltip = ({ active, payload } : any) => {
    if (active) {
      const { name, children, size } = payload[0].payload;
      return (
        // eslint-disable-next-line tailwindcss/no-custom-classname
        <div className="custom-tooltip bg-slate-50 p-2">
          <p>{name}</p>
          {size && <p>Size: {size}</p>}
          {children && (
            <ul>
              {children.map((child : any) => (
                <li key={child.name}>
                  {child.name} : {child.size}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      <Treemap
        width={dimensions.width}
        height={dimensions.height}
        data={dataWithColor}
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
