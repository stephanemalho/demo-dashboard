import Navbar from "@/components/shared/navbar/Navbar";
import LeftSideBar from "@/components/shared/sideBars/LeftSideBar";
// import RightSideBar from "@/components/shared/sideBars/RightSideBar";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
import PageContainer from "@/components/shared/pageContainer/PageContainer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <main className="bg-[#F4F4F4]">
        <Navbar />
        <div className="flex">
          <SignedIn>
            <LeftSideBar />
          </SignedIn>
          <PageContainer>{children}</PageContainer>
          {/* <SignedIn>
          <RightSideBar />
        </SignedIn> */}
        </div>
      </main>
  );
};

export default Layout;
