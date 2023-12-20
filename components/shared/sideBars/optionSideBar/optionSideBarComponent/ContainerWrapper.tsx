"use client";
import { useSidebar } from '@/context/SideBarProvider';
import React from 'react'

const ContainerWrapper = ({children} : {children: React.ReactNode}) => {
  
  const { isOpen } = useSidebar();

  return (
    
    <div
    className={`flex h-full flex-row justify-between overflow-y-hidden border-[2px] border-r-[#393939] bg-[#f2f2f2] transition-all duration-500 ease-in-out ${
      isOpen
        ? "fixed left-[50px] top-[50px] z-[100] mr-1 min-w-[30vw] max-2xl:min-w-[25vw]"
        : "w-0"
    }`}
  >
    <div className="flex w-full flex-col">
    {children}
    </div>
  </div>
  )
}

export default ContainerWrapper