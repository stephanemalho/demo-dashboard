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
    <WrapIcon bgColorHover="hover:bg-[#90d7da]">
      <Image
        src="/assets/icons/maximize.svg"
        alt="resize"
        width={16}
        height={16}
        className="m-auto flex h-full w-full p-[5px] hover:bg-[#7de899] "
        onClick={handleClick}
      />
    </WrapIcon>
  );
};

export default IconMaximize;
