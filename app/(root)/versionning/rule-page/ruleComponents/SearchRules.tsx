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
        size={"h-[50px] w-[50px] min-w-[50px]"}
      />
    </div>
  );
};

export default SearchRules;
