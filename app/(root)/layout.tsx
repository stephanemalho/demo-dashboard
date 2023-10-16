import Navbar from "@/components/shared/navbar/Navbar";
import LeftSideBar from "@/components/shared/sideBars/LeftSideBar";
 import RightSideBar from "@/components/shared/sideBars/RightSideBar";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex ">
        <SignedIn>
          <LeftSideBar />
        </SignedIn>
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full">{children}</div>
        </section>
        {/* <SignedIn>
          <RightSideBar />
        </SignedIn> */}
      </div>
      Toaster
    </main>
  );
};

export default Layout;
