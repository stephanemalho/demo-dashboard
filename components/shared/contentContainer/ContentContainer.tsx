"use client";
import { useSidebar } from "@/context/ScreenSizeContext";
import React from "react";
interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {

  const { toggleSideBar } = useSidebar();

  return (
    <div
      className={`text-dark500_light700 flex transition-all  ${toggleSideBar ? "w-[90vw]" : "w-[75vw]"} flex-col justify-between gap-4`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
