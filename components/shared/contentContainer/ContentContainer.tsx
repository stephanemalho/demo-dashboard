"use client";
import React from "react";
interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  
  return (
    <div
      className={`text-dark500_light700 slide-in-right m-auto flex h-[80vh] w-[70vw] flex-col justify-between gap-1 transition-all max-2xl:w-full`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
