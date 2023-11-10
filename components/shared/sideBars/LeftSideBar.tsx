"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sidebarLinks } from "@/constants";
import { useSidebar } from "@/context/SideBarProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSideBar = () => {
  const pathname = usePathname();
  const firstSidebarLink = sidebarLinks.slice(0, 2);
  const secondSidebarLink = sidebarLinks.slice(2);

  const { toggleSideBar, setToggleSideBar } = useSidebar(); // sideBar Context

  const handleClick = () => {
    setToggleSideBar(false);
  };

  if (!toggleSideBar) {
    return null; // don't render anything if the sidebar is closed
  }
  return (
    <>
      <section
        className={`${
          toggleSideBar ? "slide-in-sidebar" : ""
        } custom-scrollbar ibm-text-black fixed left-0 top-[50px] z-50 flex h-[95vh] w-[280px] flex-col justify-between overflow-y-auto bg-[#fff] font-ibmPlexSans shadow-light-300  max-2xl:w-[200px]`}
      >
        <nav
          className={`absolute top-[1px] flex w-[280px] flex-1 flex-col scroll-auto ease-in max-2xl:w-[200px]`}
        >
          {firstSidebarLink.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;
            return (
              <Link
                title={item.label}
                key={item.route}
                href={item.route || "/"}
                className={`${
                  isActive
                    ? "border-l-[5px] border-l-[#0f62fe] bg-[#e0e0e0] font-bold"
                    : "hover:border-2  hover:bg-[rgb(244,244,244)] visited:hover:bg-[#f4f4f4] active:bg-[#e0e0e0]"
                } ibm-text-black flex h-[49px] w-[280px] items-center justify-start border-2 border-transparent p-4 font-ibmPlexSans text-[1rem] no-underline transition-all ease-in  max-2xl:w-[200px]`}
              >
                <div className="flex min-w-[30px] justify-start">
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={` max-2xl:h-[0.8rem] max-2xl:w-[0.8rem] `}
                  />
                </div>
                <p
                  className={`${
                    isActive ? "base-bold" : "base-medium"
                  } w-full whitespace-nowrap max-2xl:text-[0.8rem]
        `}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
          {secondSidebarLink.map((item) => {
            const isActive =
              (pathname.includes(item.route) &&
                (Array.isArray(item.route) ? item.route.length > 1 : false)) ||
              pathname === item.route;

            const getLastSegment = (url: string) => {
              const segments = url.split("/");
              const lastSegment = segments[segments.length - 1];
              const capitalizedLastSegment =
                lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

              return capitalizedLastSegment;
            };

            return (
              <div key={item.label}>
                <Accordion
                  type="single"
                  className="h-full w-[280px] max-2xl:w-[200px]"
                  collapsible
                  title={item.label}
                >
                  <AccordionItem  
                  value="h-full item-1">
                    <AccordionTrigger className="active:border-[#0f62fe]max-2xl:text-[0.8rem] h-[49px] border-2 border-transparent p-4 font-ibmPlexSans text-[1rem] transition-all ease-in hover:border-2 hover:border-[#0f62fe] hover:bg-[#f4f4f4] visited:hover:bg-[#f4f4f4]">
                      <div className="flex h-[49px] min-w-[30px] justify-start">
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={`${
                            isActive ? "invert-colors " : ""
                          }  max-2xl:w-[0.8rem]`}
                        />
                      </div>
                      <p
                        className={`${
                          isActive ? "base-bold" : "base-medium"
                        } flex h-full  w-full items-center whitespace-nowrap text-left font-ibmPlexSans text-[1rem] max-2xl:text-[0.8rem]`}
                      >
                        {item.label}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      {Array.isArray(item.route) ? (
                        item.route.map((subRoute, subIndex) => (
                          <Link
                            title={subRoute.split("/")[2]}
                            key={subIndex}
                            href={subRoute}
                            className={`${
                              isActive || pathname.includes(subRoute)
                                ? "border-l-[5px] border-l-[#0f62fe] bg-[#e0e0e0] font-bold"
                                : "hover:border-2  hover:bg-[rgb(244,244,244)] visited:hover:bg-[#f4f4f4] active:bg-[#e0e0e0]"
                            } text-[0.9rem]max-2xl:text-[0.8rem] flex h-[49px] items-center justify-start border-2 border-transparent px-4 transition-all ease-in`}
                          >
                            <p
                              className={`${
                                isActive || pathname.includes(subRoute)
                                  ? "base-bold"
                                  : "base-medium"
                              } flex h-full w-full items-center whitespace-nowrap font-ibmPlexSans text-[0.9rem] max-2xl:text-[0.7rem]`}
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
                              ? "border-l-[5px] border-l-[#0f62fe] bg-[#e0e0e0] font-bold"
                              : "hover:border-2  hover:bg-[rgb(244,244,244)] visited:hover:bg-[#f4f4f4] active:bg-[#e0e0e0]"
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
              </div>
            );
          })}
        </nav>
      </section>
      <div
        onClick={handleClick}
        className="fixed top-[50px] z-40 h-[95vh] w-[100vw] bg-black opacity-[60%]"
      >
        {""}
      </div>
    </>
  );
};

export default LeftSideBar;
