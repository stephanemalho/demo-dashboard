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
        className="rounded-full px-4 py-2 font-bold text-white hover:bg-red-200"
        onClick={handleClick}
      >
        <Image
          src="assets/icons/trash.svg"
          alt="trash"
          width={13}
          height={13}
        />
      </button>
    </div>
  );
};

export default DeleteButton;
