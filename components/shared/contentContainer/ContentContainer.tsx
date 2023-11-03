"use client";
import React from "react";
interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  
  return (
    <div
      className={`text-dark500_light700 flex w-full flex-col justify-between gap-1 transition-all dark:border-slate-700 `}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
