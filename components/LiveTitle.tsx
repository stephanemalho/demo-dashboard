import React from "react";

interface LiveTitleProps {
  title : string;
  className : string;
}

const LiveTitle = ({ title, className }: LiveTitleProps) => {
  return (
    <div className={className}>
      <h3>{title}</h3>{" "}
    </div>
  );
};

export default LiveTitle;
