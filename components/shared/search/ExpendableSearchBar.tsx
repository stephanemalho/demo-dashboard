/* eslint-disable no-undef */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

interface ExpendableSearchBarProps {
  placeholderValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  route?: string;
  label?: string;
  size?: string;
}

const ExpendableSearchBar = ({
  placeholderValue,
  searchValue,
  onChange,
  label,
  size,
}: ExpendableSearchBarProps) => {
  const [isExpended, setIsExpended] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    if (!isExpended) {
      timeoutId = setTimeout(() => {
        setShowLabel(true);
      }, 600); // Durée correspondant à la durée de l'animation de l'input
    } else {
      setShowLabel(false);
    }

    return () => clearTimeout(timeoutId); // Nettoyer le timeout si le composant est démonté
  }, [isExpended]);

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
        className={`flex ${size} cursor-pointer items-center justify-center border-[1px] bg-[#F4F4F4] p-2.5 text-sm text-[#061727] first-letter:capitalize active:bg-[#E0E0E0]  ${
          isExpended
            ? "border-[#0F62FE] border-r-[#f4f4f4]"
            : "border-gray-300 focus:border-r-gray-300 "
        }`}
      >
        <FaSearch />
      </button>
      <CSSTransition
        in={isExpended}
        timeout={400}
        classNames="search-transition"
        unmountOnExit
      >
        <input
          ref={inputRef}
          className={`${size} ease-in-out ${
            isExpended ? "w-full " : "w-0"
          } rounded-none border border-[#0F62FE] border-l-gray-300 p-2.5 text-[12px] text-gray-900 focus:outline-none`}
          placeholder={placeholderValue}
          type="text"
          name="cube-name"
          value={searchValue} // Utilisez la valeur de l'état de recherche
          onChange={(e) => onChange(e)} // Mettez à jour l'état de recherche lors de la modification
        />
      </CSSTransition>
      {showLabel && (
        <label
          className="ml-2 block cursor-pointer truncate font-bold text-[12px] text-gray-900"
          style={{ opacity: showLabel ? 1 : 0 }}
          htmlFor="cube-name"
          onClick={() => setIsExpended(true)}
        >
          {label || "Search..."}
        </label>
      )}
    </div>
  );
};

export default ExpendableSearchBar;
