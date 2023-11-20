"use client";
import React, { createContext, useState } from "react";

interface SideBarContextProps {
  toggleSideBar: boolean;
  setToggleSideBar: (toggleSideBar: boolean) => void;
  handleClick: () => void;
  toggleRightSideBar: boolean;
  setToggleRightSideBar: (toggleRightSideBar: boolean) => void;
  handleClickRightSideBar: () => void;
}

export const SideBarContext = createContext<SideBarContextProps | undefined>(
  undefined
);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [toggleRightSideBar, setToggleRightSideBar] = useState(false);

  const handleClick = () => {
    if (toggleSideBar) {
      setToggleSideBar(false);
    } else {
      setToggleSideBar(true);
    }
  };

  const handleClickRightSideBar = () => {
    if (toggleRightSideBar) {
      setToggleRightSideBar(false);
    } else {
      setToggleRightSideBar(true);
    }
  };


  return (
    <SideBarContext.Provider
      value={{
        toggleSideBar,
        setToggleSideBar,
        handleClick,
        toggleRightSideBar,
        setToggleRightSideBar,
        handleClickRightSideBar,
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
