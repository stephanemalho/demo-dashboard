"use client";
import Image from "next/image";
import React from "react";

interface Props {
  id : number;
  onDelete: (id: number) => void;
}

const DeleteButton = ({id, onDelete} : Props ) => {

  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className="flex flex-row " onClick={handleClick} >
      <button
        className="flex h-[15px] items-center py-1.5 text-xs max-2xl:text-[6px] "
      >
        <Image
          src="assets/icons/trash.svg"
          alt="trash"
          width={10}
          height={10}
        />
      </button>
        <span className="ml-2">Delete this line</span>
    </div>
  );
};

export default DeleteButton;
