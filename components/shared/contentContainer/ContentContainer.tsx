"use client";
import { ContentContainerProps } from "@/types";
import React from "react";

const ContentContainer = ({ children }: ContentContainerProps) => {
  
  return (
    <div
      className={`my-[50px] flex h-full w-full flex-col justify-between text-[#222222] transition-all`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
