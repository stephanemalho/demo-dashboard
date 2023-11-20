"use client";
import React from "react";

interface Props {
  id: number;
  onDelete: (id: number) => void;
}

const DeleteButton = ({ id, onDelete }: Props) => {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className="flex flex-row " onClick={handleClick}>
      <button className="flex h-[15px] items-center py-1.5 text-xs max-2xl:text-[9px] ">
        <span className="ml-2 ">Delete the line</span>
      </button>
    </div>
  );
};

export default DeleteButton;
