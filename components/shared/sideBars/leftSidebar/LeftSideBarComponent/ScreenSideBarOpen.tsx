"use client";
import { useSidebar } from '@/context/SideBarProvider';
import React from 'react'

const ScreenSideBarOpen = () => {
  const { setToggleSideBar } = useSidebar(); // sideBar Context

  const handleClick = () => {
    setToggleSideBar(false);
  };
  return (
    <div
    onClick={handleClick}
    className="fixed top-[50px] z-40 h-full w-[100vw]"
  >
    {""}
  </div>
  )
}

export default ScreenSideBarOpen