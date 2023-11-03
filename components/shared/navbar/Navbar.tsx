"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
// import Theme from "./Theme";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSidebar } from "@/context/ScreenSizeContext";

const Navbar = () => {
  const { handleClick, toggleSideBar } = useSidebar(); // sideBar Context

  return (
    <nav className="background-light900_dark200 fixed z-10 flex h-[50px] w-full border-b-[1px] border-grey-border  shadow-light-300 dark:shadow-none ">
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
        <Link
          href="/"
          className="flex w-full items-center gap-2"
        >
          <span className="ml-3 dark:text-white">IBM</span>
          <p className="h2-bold relative w-full border-r-[1px] border-grey-border font-spaceGrotesk text-[12px] font-black text-dark-100 ">
            <span className="text-[15px] italic text-logo-500">
              X
            </span>
            Care
          </p>
        </Link>
      </div>
      <div className="flex-between ml-auto gap-5">
        <SignedOut>
          <div className="flex flex-row gap-3">
            <Link href="/sign-in">
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                  src="assets/icons/account.svg"
                  alt="login"
                  width={20}
                  height={20}
                  className="lg:hidden"
                />
                <span className="primary-text-gradient ">Log In</span>
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                  src="assets/icons/sign-up.svg"
                  alt="Sign-up"
                  width={20}
                  height={20}
                  className="lg:hidden"
                />
                <span className="">Sign-up</span>
              </Button>
            </Link>
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
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
