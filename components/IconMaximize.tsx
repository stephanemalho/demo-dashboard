import Image from "next/image";
import React from "react";
import WrapIcon from "./WrapIcon";

const IconMaximize = () => {
  return (
    <WrapIcon>
      <Image
        src="/assets/icons/maximize.svg"
        alt="resize"
        width={16}
        height={16}
        className="m-auto flex max-2xl:h-[12px] max-2xl:w-[12px]"
      />
    </WrapIcon>
  );
};

export default IconMaximize;
