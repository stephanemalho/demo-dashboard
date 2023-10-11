
import React from "react";

// const hotQuestions = [
//   {
//     id: 1,
//     title: "How to use Next13.5",
//   },
//   {
//     id: 2,
//     title: "How to use React18",
//   },
//   {
//     id: 3,
//     title: "How to use Tailwind3.0",
//   },
// ];

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[266px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">State</h3>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Ram usage</h3>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Cpu usage</h3>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Online User</h3>
      </div>
    </section>
  );
};

export default RightSideBar;
