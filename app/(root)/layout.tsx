import Navbar from "@/components/shared/navbar/Navbar";
import LeftSideBar from "@/components/shared/sideBars/leftSidebar/LeftSideBar";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
import PageContainer from "@/components/shared/pageContainer/PageContainer";
import OptionsSideBar from "@/components/shared/sideBars/optionSideBar/OptionsSideBar";
import RightSideBar from "@/components/shared/sideBars/rightSideBar/RightSideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#fff]">
      <Navbar />
      <div className="grid grid-cols-[auto_1fr_50px]">
        <SignedIn>
          <LeftSideBar />
          <OptionsSideBar />
        </SignedIn>
        <PageContainer>{children}</PageContainer>
        <SignedIn>
          <RightSideBar />
        </SignedIn>
      </div>
    </main>
  );
};

export default Layout;
