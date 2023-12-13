"use client";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

interface ExpendableSearchBarProps {
  placeHolderValue: string | undefined | null;
}

const ExpendableSearchBar = ({ placeHolderValue }: ExpendableSearchBarProps) => {
  const [isExpended, setIsExpended] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Autofocus lorsque isExpended est true
    if (isExpended && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpended]); // Dépendance à isExpended

  return (
    <div className="flex items-center bg-[#f4f4f4]">
      <button
        onClick={() => setIsExpended(!isExpended)}
        className={`flex h-[50px] w-[50px] min-w-[50px] cursor-pointer items-center justify-center border-[1px] bg-gray-50 p-2.5 text-sm text-gray-900 first-letter:capitalize ${isExpended ? "border-blue-500 border-r-[#f4f4f4]" : "border-gray-300 focus:border-r-gray-300 "}`}
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
          className={`h-[50px] ease-in-out ${
            isExpended ? "w-full " : "w-0"
          } rounded-none border border-blue-500 border-l-gray-300 p-2.5 text-sm text-gray-900 focus:outline-none`}
          placeholder={placeHolderValue || "search..."}
          type="text"
          name="cube-name"
        />
      </CSSTransition>

      {!isExpended && (
        <label
          className="ml-2 block font-bold text-sm text-gray-900"
          htmlFor="cube-name"
          onClick={() => setIsExpended(true)}
        >
          Chores
        </label>
      )}
    </div>
  );
};

export default ExpendableSearchBar;