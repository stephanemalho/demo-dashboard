import ThreadsInfo from "@/components/shared/threadsInfo/ThreadsInfo";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="text-dark500_light700 flex w-full flex-col-reverse justify-between gap-4 sm:flex-row">
      <SignedIn>
        <div className="lg:w-[85vw]">
          <ThreadsInfo />
        </div>
      </SignedIn>
    </div>
  );
};

export default page;
