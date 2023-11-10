import React from "react";

interface MainInfoProps {
  infoTitle: string;
  data: string | number;
}

const MainInfo = ({ infoTitle, data }: MainInfoProps) => {
  return (
    <div
      title={infoTitle}
      className="flex h-[49px] w-[105px] flex-col justify-center rounded-none  border-[2px] border-[#000] px-2 text-[0.4rem] hover:bg-[#262626] active:border-[2px] "
    >
      <div className="border-l-[1px] border-[#393939] pl-2">
        <p className=" text-[10px] text-gray-300 max-2xl:text-[0.6rem]">
          {" "}
          {infoTitle}
        </p>
        <p className="text-xs font-bold text-[#fff] max-2xl:text-[0.7rem]">
          {data}
        </p>
      </div>
    </div>
  );
};

export default MainInfo;
