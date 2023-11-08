"use client";
import React, { createContext, useContext, useState } from "react";

interface FullscreenContextProps {
  isFullscreen: string | null;
  toggleFullscreen: (tableId: string | null) => void; // Mettez à jour le type ici
}

const FullscreenContext = createContext<FullscreenContextProps | undefined>(
  undefined
);

export function FullscreenProvider({ children }: { children: React.ReactNode }) {
  const [isFullscreen, setIsFullscreen] = useState<string | null>(null); 
  
  const toggleFullscreen = (tableId: string | null) => { 
    setIsFullscreen(tableId);
  };
  
  return (
    <FullscreenContext.Provider value={{ isFullscreen, toggleFullscreen }}>
      {children}
    </FullscreenContext.Provider>
  );
}
export function useFullscreen() {
  return useContext(FullscreenContext);
}
