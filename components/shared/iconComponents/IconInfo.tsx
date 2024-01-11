import Image from "next/image";
import React from "react";
import WrapIcon from "./WrapIcon";
import { IconInfoProps } from "@/types";

const IconInfo = ({ title }: IconInfoProps) => {
  return (
    <WrapIcon bgColorHover="hover:bg-[#90d7da]">
      <Image
        src="/assets/icons/information.svg"
        alt="info icon"
        width={16}
        height={16}
        title={title}
        className="m-auto flex h-full w-full cursor-help justify-center p-[5px] hover:bg-[#F2F2F2]"
      />
    </WrapIcon>
  );
};

export default IconInfo;
