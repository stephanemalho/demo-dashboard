"use client";
import ExpendableSearchBar from "@/components/shared/search/ExpendableSearchBar";
import React from "react";

const SearchRules = () => {
  return (
    <div className="mr-6 flex-1">
      <ExpendableSearchBar
        placeholderValue="Search for a rule"
        searchValue=""
        onChange={() => {}}
        size={"h-[30px] w-[30px] min-w-[30px]"}
      />
    </div>
  );
};

export default SearchRules;
