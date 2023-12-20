"use client";
import ExpendableSearchBar from "@/components/shared/search/ExpendableSearchBar";
import React, { useState } from "react";

const HeadVersionningChores = () => {
  const [inputValue, setinputValue] = useState("");

  const handleVersionningValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <div className=" flex justify-between">
      <div className="mr-6 flex-1">
        <ExpendableSearchBar
          placeholderValue={"Search chores"}
          size={"h-[50px] w-[50px] min-w-[50px]"}
          onChange={(e) => handleVersionningValue(e)}
          searchValue={inputValue}
        />
      </div>
      <div className="flex space-x-4">
        <button className="rounded-none border border-gray-300 bg-transparent px-4 py-2 font-medium text-sm text-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200">
          Info
        </button>
        <button className="rounded-none border border-gray-300 bg-transparent px-4 py-2 font-medium text-sm text-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200">
          Process List
        </button>
      </div>
    </div>
  );
};

export default HeadVersionningChores;
