import React from "react";

interface MainInfoProps {
  infoTitle: string;
  data: string | number;
}

const MainInfo = ({ infoTitle, data }: MainInfoProps) => {
  return (
    <div
      title={infoTitle}
      className="flex h-[49px] w-[100px] flex-col justify-center rounded-none  px-2 text-[0.4rem] hover:bg-[#f4f4f4] "
    >
      <div className="border-l-[1px] border-grey-border pl-2">
        <p className=" text-[10px] text-gray-600 max-2xl:text-[0.6rem]">
          {" "}
          {infoTitle}
        </p>
        <p className="text-xs font-bold text-gray-900 max-2xl:text-[0.7rem]">
          {data}
        </p>
      </div>
    </div>
  );
};

export default MainInfo;
