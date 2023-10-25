import Average from "@/components/shared/averageContainer/Average";
import ThreadsInfo from "@/components/shared/threadsInfo/ThreadsInfo";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="text-dark500_light700 flex w-full flex-col justify-between gap-4 ">
      <SignedIn>
        <div className="lg:w-[70vw]">
          <ThreadsInfo />
        </div>
        <div className="w-[220px]">
          <Average />
        </div>
      </SignedIn>
    </div>
  );
};

export default page;
