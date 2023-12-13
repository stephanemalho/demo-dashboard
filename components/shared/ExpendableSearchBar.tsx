"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface ExpendableSearchBarProps {
  placeHolderValue: string | undefined | null;
}

const ExpendableSearchBar = ({
  placeHolderValue,
}: ExpendableSearchBarProps) => {
  const [isExpended, setIsExpended] = useState(false);

  return isExpended ? (
    <div className="flex flex-row items-center">
    <div
      onClick={() => setIsExpended(!isExpended)}
      className="flex h-[50px] w-[50px] items-center justify-center border-[1px] bg-[#f4f4f4] "
    >
      <FaSearch />
    </div>
      <label
        className="ml-2 block font-bold text-sm text-gray-900"
        htmlFor="cube-name"
      >
        Chores
      </label>
      </div >
  ) : (
    <div className="relative flex h-[50px] w-full items-center justify-center border-[1px] bg-[#f4f4f4]">
      <button
        className="flex h-[50px] w-[50px] items-center justify-center border-[1px] bg-[#f4f4f4]"
        onClick={() => setIsExpended(!isExpended)}
      >
        <FaSearch />
      </button>
      <input
        className={`block h-full w-full rounded-none border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 ${
          isExpended ? "pl-8" : "pl-2.5"
        }`}
        placeholder={isExpended ? { placeHolderValue } : "search..."}
        type="text"
      />
    </div>
  );
};

export default ExpendableSearchBar;
