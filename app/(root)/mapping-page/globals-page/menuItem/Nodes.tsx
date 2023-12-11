"use client"; 
import { CardContent } from "@/components/ui/card";
import React, { useState } from "react";

const Nodes = () => {
  const [inputValues, setInputValues] = useState({
    contain: '',
    notContains: '',
    search: ''
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    // Mettre à jour la valeur de l'input spécifique basé sur l'id
    setInputValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
    console.log(inputValues);
    
  };

  return (
    <CardContent>
      <div className="flex flex-col space-y-4  pb-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input className="mr-2" id="cube" type="checkbox" />
            <label htmlFor="cube">Cube</label>
          </div>
          <span>255</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input className="mr-2" id="dimension" type="checkbox" />
            <label htmlFor="dimension">Dimension</label>
          </div>
          <span>566</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input className="mr-2" id="process" type="checkbox" />
            <label htmlFor="process">Process</label>
          </div>
          <span>375</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input className="mr-2" id="chore" type="checkbox" />
            <label htmlFor="chore">Chore</label>
          </div>
          <span>0</span>
        </div>
        <div className="pt-4">
          <div className="font-medium">Custom Nodes Types</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input className="mr-2" id="custom1" type="checkbox" />
              <label htmlFor="custom1">Custom 1</label>
            </div>
            <span>100</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input className="mr-2" id="custom2" type="checkbox" />
              <label htmlFor="custom2">Custom 2</label>
            </div>
            <span>100</span>
          </div>
        </div>
        <div className="pt-4">
          <div className="font-medium">Nodes Options</div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="contain">Cube</label>
          <input 
              className="mr-2 border-[1px] p-2" 
              id="contain" 
              type="text" 
              value={inputValues.contain} 
              onChange={handleInputChange}  
            />
            <label htmlFor="notContains">Cube</label>
            <input 
              className="mr-2 border-[1px] p-2" 
              id="notContains" 
              type="text" 
              value={inputValues.notContains}
              onChange={handleInputChange}
            />
            <label htmlFor="search">Cube</label>
            <input 
              className="mr-2 border-[1px] p-2" 
              id="search" 
              type="text" 
              value={inputValues.search}  
              onChange={handleInputChange}
            />
          
          </div>
        </div>
      </div>
    </CardContent>
  );
};

export default Nodes;
