import ThreadsInfo from "@/components/shared/threadsInfo/ThreadsInfo";
import React from "react";

const page = () => {
  return (
    <div className="text-dark500_light700 flex w-full flex-col-reverse justify-between gap-4 sm:flex-row">
      <ThreadsInfo />
    </div>
  );
};

export default page;