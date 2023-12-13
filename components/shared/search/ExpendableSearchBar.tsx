"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

interface ExpendableSearchBarProps {
  placeHolderValue: string | undefined | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  route?: string;
  size?: string;
}

const ExpendableSearchBar = ({
  placeHolderValue,
  searchValue,
  onChange,
  size,
}: ExpendableSearchBarProps) => {
  const [isExpended, setIsExpended] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Autofocus lorsque isExpended est true
    if (isExpended && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpended]); // Dépendance à isExpended

  return (
    <div className=" flex items-center bg-[#f4f4f4]">
      <button
        onClick={() => setIsExpended(!isExpended)}
        className={`flex ${size} cursor-pointer items-center justify-center border-[1px] bg-gray-50 p-2.5 text-sm text-gray-900 first-letter:capitalize ${
          isExpended
            ? "border-blue-500 border-r-[#f4f4f4]"
            : "border-gray-300 focus:border-r-gray-300 "
        }`}
      >
        <FaSearch />
      </button>

      <CSSTransition
        in={isExpended}
        timeout={600}
        classNames="search-transition"
        unmountOnExit
      >
        <input
          ref={inputRef}
          className={`${size} ease-in-out ${
            isExpended ? "w-full " : "w-0"
          } rounded-none border border-blue-500 border-l-gray-300 p-2.5 text-[12px] text-gray-900 focus:outline-none`}
          placeholder={placeHolderValue || "search..."}
          type="text"
          name="cube-name"
          value={searchValue} // Utilisez la valeur de l'état de recherche
          onChange={(e) => onChange(e)} // Mettez à jour l'état de recherche lors de la modification
        />
      </CSSTransition>

      {!isExpended && (
        <label
          className="ml-2 block cursor-pointer font-bold text-[12px] text-gray-900"
          htmlFor="cube-name"
          onClick={() => setIsExpended(true)}
        >
          {placeHolderValue || "search..."}
        </label>
      )}
    </div>
  );
};

export default ExpendableSearchBar;
