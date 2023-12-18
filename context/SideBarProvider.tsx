"use client";
import React, { createContext, useState } from "react";

interface SideBarContextProps {
  toggleSideBar: boolean;
  setToggleSideBar: (toggleSideBar: boolean) => void;
  handleClick: () => void;
  toggleOptionsSideBar: boolean;
  setToggleOptionsSideBar: (toggleOptionsSideBar: boolean) => void;
  handleClickOptionsSideBar: () => void;
  handleOpen: () => void;
  isOpen : boolean;
  setIsOpen : (isOpen : boolean) => void;
}

export const SideBarContext = createContext<SideBarContextProps | undefined>(
  undefined
);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [toggleOptionsSideBar, setToggleOptionsSideBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (toggleSideBar) {
      setToggleSideBar(false);
    } else {
      setToggleSideBar(true);
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleClickOptionsSideBar = () => {
    if (toggleOptionsSideBar) {
      setToggleOptionsSideBar(false);
    } else {
      setToggleOptionsSideBar(true);
    }
  };


  return (
    <SideBarContext.Provider
      value={{
        toggleSideBar,
        setToggleSideBar,
        handleClick,
        toggleOptionsSideBar,
        setToggleOptionsSideBar,
        handleClickOptionsSideBar,
        handleOpen,
        isOpen,
        setIsOpen
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
