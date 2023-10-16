import Navbar from "@/components/shared/navbar/Navbar";
import LeftSideBar from "@/components/shared/sideBars/LeftSideBar";
//  import RightSideBar from "@/components/shared/sideBars/RightSideBar";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
import PageContainer from "@/components/shared/pageContainer/pageContainer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <main className="background-light800_dark400 relative">
        <Navbar />
        <div className="flex ">
          <SignedIn>
            <LeftSideBar />
          </SignedIn>
          <PageContainer>{children}</PageContainer>
          {/* <SignedIn>
          <RightSideBar />
        </SignedIn> */}
        </div>
        Toaster
      </main>
  );
};

export default Layout;
