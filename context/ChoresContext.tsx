"use client";
import React, { createContext, useState, useContext } from 'react';

interface ChoresContextType {
  selectedRows: any[]; // Remplacez `any` par un type plus spécifique si possible
  handleRowClick: (rowData: any) => void; // De même, utilisez un type plus spécifique pour rowData si possible
}

export const ChoresContext = createContext<ChoresContextType | null>(null);

export const ChoresProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const handleRowClick = (rowData : any) => {
    setSelectedRows((prevRows) => [...prevRows, rowData]);
    console.log("selectedRows", selectedRows);
    
  };

  return (
    <ChoresContext.Provider value={{ selectedRows, handleRowClick }}>
      {children}
    </ChoresContext.Provider>
  );
};

export const useChores = () => {
  const context = useContext(ChoresContext);
  if (!context) {
    throw new Error('useChores must be used within a ChoresProvider');
  }
  return context;
};
