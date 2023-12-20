"use client";
import { sidebarLinks } from "@/constants";
import { useSidebar } from "@/context/SideBarProvider";
import AccordionItems from "./leftSidebar/AccordionItems";
import HeadLinks from "./leftSidebar/HeadLinks";
import ScreenSideBarOpen from "./leftSidebar/ScreenSideBarOpen";

const LeftSideBar = () => {
  // State or const
  const firstSidebarLink = sidebarLinks.slice(0, 2);
  const secondSidebarLink = sidebarLinks.slice(2);
  const { toggleSideBar } = useSidebar(); // sideBar Context
  // Functions
  
  // Render
  if (!toggleSideBar) return null; // don't render anything if the sidebar is closed
  return (
    <>
      <section
        className={`${
          toggleSideBar ? "slide-in-sidebar" : ""
        } custom-scrollbar ibm-text-black fixed left-0 top-[50px] z-[10000] flex h-full w-[300px] flex-col justify-between overflow-y-auto bg-[#000] font-regular shadow-light-300 max-2xl:w-[210px]`}
      >
        <nav className={`absolute top-[1px] m-1 flex w-[280px] flex-1 flex-col scroll-auto ease-in max-2xl:w-[200px]`}>
          {firstSidebarLink.map((item) => {
            return (
              <HeadLinks item={item} key={item.label} />
            );
          })}
          {secondSidebarLink.map((item) => {
            return (
              <div key={item.label}>
                <AccordionItems item={item} />
              </div>
            );
          })}
        </nav>
      </section>
      <ScreenSideBarOpen />
    </>
  );
};

export default LeftSideBar;
