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
    <div className="flex h-[30px] w-[30px] cursor-pointer items-center hover:bg-[#90d7da] max-2xl:hidden">
      <Image
        src="/assets/icons/screen.svg"
        alt="Resize"
        width={16}
        height={16}
        className={`m-auto block cursor-pointer max-2xl:hidden`}
        onClick={handleScreenResize}
      />
    </div>
  );
};

export default IconResize;
