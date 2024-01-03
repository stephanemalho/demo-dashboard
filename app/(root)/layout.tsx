import Navbar from "@/components/shared/navbar/Navbar";
import LeftSideBar from "@/components/shared/sideBars/leftSidebar/LeftSideBar";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
import PageContainer from "@/components/shared/pageContainer/PageContainer";
import OptionsSideBar from "@/components/shared/sideBars/optionSideBar/OptionsSideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#fff]">
      <Navbar />
      <div className="flex">
        <SignedIn>
          <LeftSideBar />
          <OptionsSideBar />
        </SignedIn>
        <PageContainer>{children}</PageContainer>
      </div>
    </main>
  );
};

export default Layout;
