import RenderContainer from "@/app/(root)/live-delivery/create/RenderContainer/RenderContainer";
// import { useSidebar } from "@/context/SideBarProvider";
import Image from "next/image";

const MiniOptionsSideBar = () => {
  //  const { handleClickOptionsSideBar, toggleOptionsSideBar } = useSidebar();

  return (
    <div className="custom-scrollbar fixed left-0 top-0 z-20 flex h-screen flex-col justify-between overflow-y-auto overflow-x-hidden bg-[#393939] dark:shadow-none">
      {/* <div
        onClick={handleClickOptionsSideBar}
        className="mt-12 flex h-[49px] w-[50px] max-w-[50px] cursor-pointer justify-center hover:bg-[#262626] active:border-[2px] active:border-[#fff]"
      >
        {toggleOptionsSideBar ? (
          <Image
            src={"/assets/icons/close.svg"}
            alt={"menu"}
            width={22}
            height={22}
            className="h-[49px] max-w-[50px]"
          />
        ) : (
          <Image
            src={"/assets/icons/menu-left.svg"}
            alt={"menu"}
            width={20}
            height={20}
            className="h-[49px] max-w-[50px]"
          />
        )}
      </div> */}
      {/* <div className="mt-12"> */}
      <RenderContainer />
      {/* </div> */}
      <div className=" flex h-[50px] w-[50px] cursor-pointer items-center justify-center bg-[#393939] hover:bg-[#262626]">
        <Image
          src={"/assets/icons/settings.svg"}
          alt={"menu"}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export { MiniOptionsSideBar };
