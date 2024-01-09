import { LiveTitleProps } from "@/types";
import React from "react";


const LiveTitle = ({ title, className }: LiveTitleProps) => {
  return (
    <div className={className}>
      <h3>{title}</h3>{" "}
    </div>
  );
};

export default LiveTitle;
