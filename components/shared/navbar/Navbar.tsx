"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSidebar } from "@/context/ScreenSizeContext";

const Navbar = () => {
  
  const { handleClick } = useSidebar(); // sideBar Context

  return (
    <nav className="flex-between background-light900_dark200 fixed z-10 h-[50px] w-full gap-5 border-b-[1px] border-grey-border p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <SignedIn>
        <Image
        src={"/assets/icons/hamburger.svg"}
        alt={"menu"}
        onClick={handleClick}
        width={20}
        height={20}
        className={`text-light400_light500 invert-colors absolute left-[14px] top-[12px] cursor-pointer max-2xl:right-[10px] max-2xl:top-[12px] `}
      />
      </SignedIn>
      <div className="flex w-[119px] border-r-[1px] border-grey-border pl-[5px]">
      <Link href="/" className="flex items-center gap-1">
        <span>IBM</span><p className="h2-bold relative font-spaceGrotesk text-[12px] font-black text-dark-100 dark:text-light-900 max-sm:w-[90px] max-sm:text-left">
          AE&nbsp;&nbsp;<span className="absolute left-[15px] top-[0px] text-[15px] italic text-logo-500">X</span>IS
        </p>
      </Link>
      </div>
      <div className="flex-between gap-5">
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
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#bb1d3c",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
