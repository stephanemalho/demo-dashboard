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
    <div>
      <button
        className="flex h-[15px] items-center rounded-full border p-1.5 text-xs hover:bg-red-200 max-2xl:text-[6px]"
        onClick={handleClick}
      >
        <Image
          src="assets/icons/trash.svg"
          alt="trash"
          width={10}
          height={10}
        />
      </button>
    </div>
  );
};

export default DeleteButton;
