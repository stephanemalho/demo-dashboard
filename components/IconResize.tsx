"use client";
import Image from "next/image";
import React from "react";
import WrapIcon from "./WrapIcon";

const IconResize = () => {
  const handleScreenResize = () => {
    const elem = document.querySelector(".slide-in-right");
    if (elem) {
      if (elem.classList.contains("w-[70vw]")) {
        elem.classList.remove("w-[70vw]");
        elem.classList.add("w-full");
      } else {
        elem.classList.remove("w-full");
        elem.classList.add("w-[70vw]");
      }
    }
  };

  return (
    <WrapIcon>
      <Image
        src="/assets/icons/screen.svg"
        alt="Resize"
        width={16}
        height={16}
        className={`m-auto block cursor-pointer max-2xl:hidden`}
        onClick={handleScreenResize}
      />
    </WrapIcon>
  );
};

export default IconResize;
