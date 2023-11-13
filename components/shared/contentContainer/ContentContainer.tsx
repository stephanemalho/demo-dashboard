"use client";
import React from "react";
interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  
  return (
    <div
      className={`slide-in-right m-auto flex h-[80vh] w-[60vw] flex-col justify-between gap-1 text-[#222222] transition-all max-2xl:w-full`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
