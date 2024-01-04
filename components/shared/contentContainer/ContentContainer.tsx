"use client";
import React from "react";
interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  
  return (
    <div
      className={`ml-[50px] flex h-[80vh] w-[96vw] flex-col justify-between gap-1 text-[#222222] transition-all max-2xl:w-[94vw]`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
