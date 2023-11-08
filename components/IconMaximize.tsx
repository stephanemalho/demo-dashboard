"use Client";
import Image from "next/image";
import React from "react";
import WrapIcon from "./WrapIcon";
import { useFullscreen } from "@/context/ScreenSizeProvider";

const IconMaximize = ({ title }: { title: string }) => {
  const { isFullscreen, toggleFullscreen }: any = useFullscreen();

  const handleClick = () => {
    console.log("title onClick", title);
    
    toggleFullscreen(isFullscreen === title ? null : title); // Bascule entre l'ID 

    console.log("isFullscreen", isFullscreen);
    
  };

  return (
    <WrapIcon>
      <Image
        src="/assets/icons/maximize.svg"
        alt="resize"
        width={16}
        height={16}
        className="m-auto flex max-2xl:h-[12px] max-2xl:w-[12px]"
        onClick={handleClick}
      />
    </WrapIcon>
  );
};

export default IconMaximize;
