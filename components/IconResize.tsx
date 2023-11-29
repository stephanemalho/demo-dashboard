"use client";
import Image from "next/image";
import React from "react";

const IconResize = () => {
  const handleScreenResize = () => {
    const elem = document.querySelector(".slide-in-right");
    if (elem) {
      if (elem.classList.contains("w-[60vw]")) {
        elem.classList.remove("w-[60vw]");
        elem.classList.add("w-full");
      } else {
        elem.classList.remove("w-full");
        elem.classList.add("w-[60vw]");
      }
    }
  };

  return (
    <div className="flex h-[30px] w-[30px] cursor-pointer items-center max-2xl:hidden">
      <Image
        src="/assets/icons/screen.svg"
        alt="Resize"
        width={12}
        height={12}
        className={`block h-full w-full cursor-pointer p-[5px] hover:bg-[#7de899]`}
        onClick={handleScreenResize}
      />
    </div>
  );
};

export default IconResize;
