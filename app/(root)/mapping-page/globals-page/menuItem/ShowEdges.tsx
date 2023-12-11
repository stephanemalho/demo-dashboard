import React from "react";

const ShowEdges = () => {
  return (
    <div className="flex flex-col space-y-4 pb-20">
      <div className="font-medium">Offical Edges Types</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input className="mr-2" id="custom1" type="checkbox" />
          <label htmlFor="custom1">Dependencies</label>
        </div>
        <span>1040</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input className="mr-2" id="custom2" type="checkbox" />
          <label htmlFor="custom2">Rules</label>
        </div>
        <span>0</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input className="mr-2" id="custom2" type="checkbox" />
          <label htmlFor="custom2">Process</label>
        </div>
        <span>0</span>
      </div>
      <div className="font-medium">Custom Edges Types</div>
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
          <label htmlFor="custom2">Custom 1</label>
        </div>
        <span>100</span>
      </div>
    </div>
  );
};

export default ShowEdges;
