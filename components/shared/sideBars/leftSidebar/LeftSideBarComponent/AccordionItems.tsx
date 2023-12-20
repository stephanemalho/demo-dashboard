"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { isRouteLength, lastSegmentOrder } from "./leftSIdeBarConfig";
import { AccordionItemsProps } from "@/types";
import { usePathname } from "next/navigation";

const AccordionItems = ({ item }: AccordionItemsProps) => {
  const pathname = usePathname();
  const isActive = isRouteLength(pathname, item);
  const getLastSegment = lastSegmentOrder();
  return (
    <Accordion
      type="single"
      className="h-full w-[280px] max-2xl:w-[200px]"
      collapsible
      title={item.label}
    >
      <AccordionItem value="h-full item-1 ">
        <AccordionTrigger className="active:border-[#0f62fe]max-2xl:text-[0.8rem] h-[49px] border-2 border-transparent py-4 pl-[10px] pr-2 font-regular text-[1rem] text-[#fff] transition-all ease-in hover:border-2 hover:border-[#fff] hover:bg-[#393939] visited:hover:bg-[#393939]">
          <div className="flex h-[auto] min-w-[30px]  justify-center">
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={`${
                isActive ? "invert-colors " : ""
              } invert-colors  mb-1 mr-3 max-2xl:mr-4 max-2xl:h-[15px] max-2xl:w-[15px]`}
            />
          </div>
          <p
            className={`${
              isActive ? "base-bold" : "base-medium"
            } flex h-full  w-full items-center whitespace-nowrap text-left font-regular text-[1rem] max-2xl:text-[0.8rem]`}
          >
            {item.label}
          </p>
        </AccordionTrigger>
        <AccordionContent>
          {Array.isArray(item.route) ? (
            item.route.map((subRoute: string, subIndex: number) => (
              <Link
                title={subRoute.split("/")[2]}
                key={subIndex}
                href={subRoute}
                className={`${
                  isActive || pathname.includes(subRoute)
                    ? "border-l-[5px] border-l-[#0f62fe] bg-[#393939] font-bold"
                    : "hover:border-2  hover:bg-[#393939] visited:hover:bg-[#393939] active:bg-[#393939]"
                } flex h-[49px] items-center 
                            justify-start 
                            border-2 border-transparent bg-[#262626] px-4 text-[0.9rem] text-[#fff] transition-all ease-in max-2xl:text-[0.8rem]`}
              >
                <p
                  className={`${
                    isActive || pathname.includes(subRoute)
                      ? "base-bold"
                      : "base-medium"
                  } flex h-full w-full items-center whitespace-nowrap font-regular text-[0.9rem] max-2xl:text-[0.7rem]`}
                >
                  {getLastSegment(subRoute)}
                </p>
              </Link>
            ))
          ) : (
            <Link
              title={item.label}
              key={item.route}
              href={item.route || "/"}
              className={`${
                isActive
                  ? "border-l-[5px] border-l-[#0f62fe] bg-[#262626] font-bold"
                  : "hover:border-2  hover:bg-[#393939] visited:hover:bg-[#393939] active:bg-[#393939]"
              } text-[0.9rem]max-2xl:text-[0.8rem] flex h-[49px] items-center justify-start border-2 border-transparent px-4 transition-all ease-in hover:border-[#0f62fe]`}
            >
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } whitespace-nowrap `}
              >
                {getLastSegment(item.route)}
              </p>
            </Link>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionItems;
