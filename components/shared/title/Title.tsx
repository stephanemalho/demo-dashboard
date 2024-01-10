import { TitleProps } from "@/types";
import React from "react";

const Title = ({ title, className }: TitleProps) => {
  return (
    <h2 className={`w-full text-left font-bold text-2xl ${className}`}>
      {title}
    </h2>
  );
};

export default Title;
