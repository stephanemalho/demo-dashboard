"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { isRoute } from "./leftSIdeBarConfig";
import { AccordionItemsProps } from "@/types";
import { usePathname } from "next/navigation";

const HeadLinks = ({ item }: AccordionItemsProps) => {
  const pathname = usePathname();
  const isActive = isRoute(pathname, item);
  return (
    <Link
      title={item.label}
      key={item.route}
      href={item.route || "/"}
      className={`${
        isActive
          ? "border-l-[5px] border-l-[#0f62fe] bg-[#262626] font-bold hover:bg-[#393939]"
          : "hover:border-2  hover:bg-[#393939] visited:hover:bg-[#393939]  active:bg-[#393939] "
      } flex h-[49px] w-[280px] items-center justify-start border-2 border-transparent border-b-[#000] py-4 pl-[10px] font-regular text-[1rem] text-[#fff] no-underline transition-all ease-in max-2xl:w-[200px]`}
    >
      <div className="flex min-w-[30px] justify-start">
        <Image
          src={item.imgURL}
          alt={item.label}
          width={20}
          height={20}
          className={` invert-colors mb-[2px] max-2xl:h-[15px] max-2xl:w-[15px]`}
        />
      </div>
      <p
        className={`${
          isActive ? "base-bold" : "base-medium"
        } w-full whitespace-nowrap max-2xl:text-[0.8rem]`}
      >
        {item.label}
      </p>
    </Link>
  );
};

export default HeadLinks;
