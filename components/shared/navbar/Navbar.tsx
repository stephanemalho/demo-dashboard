"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
// import Theme from "./Theme";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSidebar } from "@/context/SideBarProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import ThreadsInfo from "../threadsInfo/ThreadsInfo";

const Navbar = () => {
  const { handleClick, toggleSideBar } = useSidebar(); // sideBar Context

  return (
    <nav className="fixed z-10 flex h-[50px] w-full border-b-[1px] border-grey-border bg-[white]  shadow-light-300 ">
      <SignedIn>
        <div
          className="flex h-[49px] w-[50px] cursor-pointer justify-center pb-1 hover:bg-[#f4f4f4] active:bg-[#e0e0e0]"
          onClick={handleClick}
        >
          {toggleSideBar ? (
            <Image
              src={"/assets/icons/close.svg"}
              alt={"menu"}
              width={20}
              height={20}
            />
          ) : (
            <Image
              src={"/assets/icons/hamburger.svg"}
              alt={"menu"}
              width={20}
              height={20}
            />
          )}
        </div>
      </SignedIn>
      <div className="flex h-[49px] w-[119px] hover:bg-[#f4f4f4] active:bg-[#e0e0e0]">
        <Link href="/" className="flex w-full items-center gap-2">
          <span className="ml-3  dark:text-white">IBM</span>
          <p className="h2-bold relative mr-2 w-full border-r-[1px] border-grey-border font-spaceGrotesk text-[12px] font-black text-dark-100">
            <span className="text-[15px] italic text-logo-500">X</span>
            Care
          </p>
        </Link>
      </div>
      <SignedIn>
        {/* remove this block to test  */}
        <div className="flex">
          <ThreadsInfo />
        </div>
      </SignedIn>
      <div className="flex-between ml-auto">
        <SignedOut>
          <div
            className="flex h-[49px] w-[50px] cursor-pointer justify-center pb-1 hover:bg-[#f4f4f4] active:bg-[#e0e0e0]"
            onClick={handleClick}
          >
            <DropdownMenu>
              <DropdownMenuTrigger className="flex h-full w-full items-center justify-center rounded-none focus:border-none ">
                <Image
                  src={"/assets/icons/user.svg"}
                  alt={"menu"}
                  width={20}
                  height={20}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/sign-in">
                    <Button className="h-[49px] w-full rounded-none border-[1px] border-slate-900 bg-white hover:bg-[#f4f4f4]">
                      <span className="font-semibold text-[#0f62fe]">
                        Log In
                      </span>
                    </Button>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/sign-up">
                    <Button className="h-[49px] w-[120px] rounded-none border-0 border-transparent bg-[#303030] hover:bg-[#353535]">
                      <span className="font-semibold text-[#fff]">Sign-up</span>
                    </Button>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </SignedOut>
        {/* <Theme /> */}
        <SignedIn>
          <div className="flex h-[49px] w-[50px] cursor-pointer items-center justify-center hover:bg-[#f4f4f4] active:bg-[#e0e0e0]">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-6 w-6",
                },
                variables: {
                  colorPrimary: "#bb1d3c",
                },
              }}
            />
          </div>
          <div className="flex h-[49px] w-[50px] cursor-pointer justify-center pb-1 hover:bg-[#f4f4f4] active:bg-[#e0e0e0]">
            <Image
              src={"/assets/icons/menu-left.svg"}
              alt={"menu"}
              width={20}
              height={20}
            />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
