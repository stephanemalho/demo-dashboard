"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LeftSideBar = () => {
  const pathname = usePathname();
  const firstSidebarLink = sidebarLinks.slice(0, 1);
  const secondSidebarLink = sidebarLinks.slice(1);
  const [toggleSideBar, setToggleSideBar] = useState(false)  

  const handleClick = () => {
    setToggleSideBar(!toggleSideBar)
    console.log("houhouhuouhouhuoh");
  }
  
  return (
    <section className={`background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen ${toggleSideBar ? "w-[40px]" : "w-[366px] "} flex-col justify-between overflow-y-auto border-r p-6 pt-36 font-inter shadow-light-300 dark:shadow-none ${toggleSideBar ? "w-[40px]" : "max-2xl:w-[250px]"} transition-all ease-in max-2xl:pt-10`}>
      <Image
        src={"/assets/icons/hamburger.svg"}
        alt={"menu"}
        onClick={handleClick}
        width={20}
        height={20}
        className={`text-light400_light500 absolute right-[10px] top-[100px] max-2xl:right-[10px] max-2xl:top-[55px] max-2xl:text-[0.6rem]`}
      />
    <nav className={`flex w-full flex-1 flex-col transition-opacity ${toggleSideBar ? "hidden opacity-0" : ""} ease-in`}>
        <h2 className="h3-bold text-light400_light500 my-4 max-2xl:text-[0.6rem]">
          MONITORING
        </h2>
        {firstSidebarLink.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          // @Todo add spécial route for profile link

          return (
            <Link
              title={item.label}
              key={item.route}
              href={item.route || "/"}
              className={`${
                isActive
                  ? "primary-gradient rounded text-light-900"
                  : "text-light400_light500 font-spaceGrotesk"
              } flex items-center justify-start gap-4 p-4 no-underline hover:bg-light-800 dark:hover:bg-dark-300 max-2xl:text-[0.6rem]`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`text-light400_light500 ${
                  isActive ? " " : ""
                } max-2xl:h-[0.8rem] max-2xl:w-[0.8rem]`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-2xl:text-[0.6rem] `}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
        <h2 className="h3-bold text-light400_light500 my-3 max-2xl:text-[0.6rem]">
          TM1 ADMINISTRATION
        </h2>
        {secondSidebarLink.map((item) => {
          const isActive =
            (pathname.includes(item.route) &&
              (Array.isArray(item.route) ? item.route.length > 1 : false)) ||
            pathname === item.route;

          const getLastSegment = (url: string) => {
            const segments = url.split("/");
            const lastSegment = segments[segments.length - 1];

            // Capitalize the first letter
            const capitalizedLastSegment =
              lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

            return capitalizedLastSegment;
          };

          return (
            <div key={item.label}>
              <Accordion type="single" className="h-full" collapsible>
                <AccordionItem value="h-full item-1">
                  <AccordionTrigger className="text-light400_light500 h-full p-4 hover:bg-light-800 dark:hover:bg-dark-300">
                    <Image
                      src={item.imgURL}
                      alt={item.label}
                      width={20}
                      height={20}
                      className={`${isActive ? "invert-colors " : "mb-1"} max-2xl:h-[0.8rem] max-2xl:w-[0.8rem]`}
                    />
                    <p
                      className={`${
                        isActive ? "base-bold" : "base-medium"
                      } h-full w-full pl-[18px] text-left	max-2xl:text-[0.6rem]`}
                    >
                      {item.label}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    {Array.isArray(item.route) ? (
                      item.route.map((subRoute, subIndex) => (
                        <Link
                          title={item.label}
                          key={subIndex}
                          href={subRoute}
                          className={`${
                            isActive || pathname.includes(subRoute)
                              ? "primary-gradient rounded text-light-900"
                              : "text-light400_light500"
                          } my-1 flex items-center justify-start gap-4 bg-transparent p-4 hover:bg-light-800  dark:hover:bg-dark-300`}
                        >
                          <p
                            className={`${
                              isActive || pathname.includes(subRoute)
                                ? "base-bold"
                                : "base-medium"
                            } max-2xl:text-[0.6rem]`}
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
                            ? "primary-gradient rounded text-light-900"
                            : "text-dark500_light700"
                        } flex items-start justify-between gap-4 bg-transparent p-4   dark:hover:bg-dark-300`}
                      >
                        <p
                          className={`${
                            isActive ? "base-bold" : "base-medium"
                          }`}
                        >
                          {getLastSegment(item.route)}
                        </p>
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSideBar;
