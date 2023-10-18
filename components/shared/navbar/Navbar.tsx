import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <div className="flex-center w-[250px]">
      <Link href="/" className="flex items-center gap-1">
        <p className="h2-bold relative font-spaceGrotesk font-black text-dark-100 dark:text-light-900 max-sm:w-[100px] max-sm:text-left">
          AE&nbsp;&nbsp;<span className="absolute right-[25px] top-[-3px] text-3xl italic text-logo-500 max-sm:left-[30px]">X</span>IS
        </p>
      </Link>
      </div>
      {/* <GlobalSearch /> */}
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
                className="invert-colors lg:hidden"
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
                className="invert-colors lg:hidden"
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
