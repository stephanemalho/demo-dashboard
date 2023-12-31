"use client";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
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
  const { user } = useUser(); 

  return (
    <nav className="fixed z-50 flex h-[50px] w-full border-b-[1px] border-[#262626] bg-[#000]  shadow-light-300 ">
      <SignedIn>
        <div
          className="flex h-[49px] w-[50px] cursor-pointer justify-center hover:bg-[#262626] active:border-[2px] active:border-[#fff]"
          onClick={handleClick}
        >
          {toggleSideBar ? (
            <Image
              src={"/assets/icons/close.svg"}
              alt={"menu"}
              width={22}
              height={22}
              className="my-auto flex max-2xl:h-[18px] max-2xl:w-[18px]"
            />
          ) : (
            <Image
              src={"/assets/icons/hamburger.svg"}
              alt={"menu"}
              width={20}
              height={20}
              className="my-auto flex max-2xl:h-[18px] max-2xl:w-[18px]"
            />
          )}
        </div>
      </SignedIn>
      <div className="flex h-[49px] w-[119px] border-[2px] border-[#000] hover:bg-[#262626] active:border-[2px] active:border-[#fff]">
        <Link href="/" className="flex w-full items-center gap-2 text-center">
          <h2 className="mr-2 w-full border-r-[1px] border-[#393939] font-bold  text-white">
            X-Care 
          </h2>
        </Link>
      </div>
      <SignedIn>
        <div className="flex">
          <ThreadsInfo />
        </div>
      </SignedIn>
      <div className="flex-between ml-auto">
        <SignedOut>
          <div
            className="flex h-[49px] w-[50px] cursor-pointer justify-center pb-1 hover:bg-[#262626] active:border-[2px] active:border-[#fff]"
            onClick={handleClick}
          >
            <DropdownMenu>
              <DropdownMenuTrigger className="flex h-full w-full items-center justify-center rounded-none focus:border-none focus:outline-none">
                <Image
                  src={"/assets/icons/user.svg"}
                  alt={"menu"}
                  width={20}
                  height={20}
                  className="text-[#fff]"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className=" mt-[5px] w-[220px] border-none bg-[#000] p-1  focus:outline-none"
              >
                <DropdownMenuItem className="mb-1 border-none focus:outline-none">
                  <Link href="/sign-in">
                    <Button className="h-[39px] w-full rounded-none  bg-[#0f62fE] hover:bg-[#78a9ff] active:bg-[#0043ce]">
                      <span className="font-semibold text-[#fff] ">
                        Log In
                      </span>
                    </Button>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem  className=" focus:outline-none">
                  <Link href="/sign-up">
                    <Button className="h-[39px] w-full rounded-none bg-[#303030] outline-none hover:bg-[#474646]">
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
          <div className="flex h-[49px] w-full cursor-pointer items-center justify-center hover:bg-[#262626] active:border-[2px] active:border-[#fff]">
          {user && (
            <span className="p-2 text-[12px] text-white">
              {user.firstName} {user.lastName} {/* Affiche le nom et le prénom de l'utilisateur */}
            </span>
          )}
          </div>
          <div className="flex h-[49px] min-w-[50px] cursor-pointer items-center justify-center hover:bg-[#262626] active:border-[2px] active:border-[#fff]">      
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
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
