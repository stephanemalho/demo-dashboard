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
    <nav className="flex-between background-light900_dark200 fixed z-10 w-full gap-5 p-6 shadow-light-300 dark:shadow-none max-2xl:h-[50px] sm:px-12">
      <SignedIn>
        <Image
        src={"/assets/icons/hamburger.svg"}
        alt={"menu"}
        onClick={handleClick}
        width={28}
        height={28}
        className={`text-light400_light500 absolute left-[20px] top-[30px] cursor-pointer max-2xl:right-[10px] max-2xl:top-[15px] max-2xl:h-[18px] max-2xl:w-[18px]`}
      />
      </SignedIn>
      <div className="flex-center w-[200px] max-2xl:w-[70px]">
      <Link href="/" className="flex items-center gap-1">
        <p className="h2-bold relative font-spaceGrotesk font-black text-dark-100 dark:text-light-900 max-2xl:text-[12px] max-sm:w-[90px] max-sm:text-left">
          AE&nbsp;&nbsp;<span className="absolute right-[25px] top-[-3px] text-3xl italic text-logo-500 max-2xl:left-[15px] max-2xl:text-[15px] max-sm:left-[30px]">X</span>IS
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
