import { SignedIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="slide-in-right text-dark500_light700 flex w-full flex-col justify-between gap-4 ">
      <SignedIn>
        {/* <div className="w-[220px]">
          <Average />
        </div> */}
      </SignedIn>
    </div>
  );
};

export default page;
