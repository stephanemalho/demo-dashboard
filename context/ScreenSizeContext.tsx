"use client";
import React, { createContext, useState } from "react";

interface SideBarContextProps {
  toggleSideBar: boolean;
  setToggleSideBar: (toggleSideBar: boolean) => void;
  handleClick: () => void;
}

export const SideBarContext = createContext<SideBarContextProps | undefined>(
  undefined
);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const handleClick = () => {
    setToggleSideBar(!toggleSideBar);
  };


  return (
    <SideBarContext.Provider
      value={{
        toggleSideBar,
        setToggleSideBar,
        handleClick,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
}

export const useSidebar = () => {
  const context = React.useContext(SideBarContext);

  if (context === undefined) {
    throw new Error("useScreen must be used within a ScreenProvider");
  }

  return context;
};
