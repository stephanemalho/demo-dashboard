import React from "react";
import moment from "moment";
import { dashboard } from "@/data/dashboard";
import { getElementLength } from "@/utils/arrays";
import { formatRamValue } from "@/utils/formatNumber";
import Image from "next/image";

const ThreadsInfo = () => {
  const threadsInfo = dashboard;
  const dateNow = moment().format("LTS");
  const connectedUsers = getElementLength(threadsInfo.Users);
  const connectedThreads = getElementLength(threadsInfo.Threads);
  const ramValue = dashboard.RAM.Value;
  const formattedRamValue: string = formatRamValue(ramValue);

  const isOnline = threadsInfo.State.Value === "Online";
  const stateColorClass = isOnline ? "bg-lime-500" : "bg-red-500";
  const isConnected = isOnline ? "Connected" : "Not Connected";

  return (
    <div className="shadow-light100_dark100 relative flex h-[25px] rounded-md bg-white px-1 shadow-md max-2xl:h-[20px]">
      <div className="text-light400_light500 flex h-full basis-1/3 flex-row items-center justify-between pl-2 font-inter max-2xl:pl-0 max-2xl:text-[0.6rem]">
        <div title="connexion">
          <span aria-label={`${isConnected}`} className="relative flex h-3 w-3">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full ${stateColorClass} opacity-75`}
            ></span>
            <span
              className={`relative inline-flex h-3 w-3 rounded-full ${stateColorClass}`}
            ></span>
          </span>
        </div>
        <div
          title="Thread"
          className="background-light800_dark400 flex w-[auto] flex-col rounded-sm px-2 text-[0.6rem] shadow-md"
        >
          <p className="text-sm text-gray-600 max-2xl:text-[0.6rem]">
            {" "}
            {connectedThreads <= 1 ? "Thread" : "Threads"}
          </p>
          <p className="text-xs font-bold text-gray-900 max-2xl:text-[0.5rem]">
            {connectedThreads}
          </p>
        </div>
        <div
          title="RAM"
          className="background-light800_dark400 flex w-[auto] flex-col rounded-sm px-2 text-[0.6rem] shadow-md"
        >
          <p className="text-sm max-2xl:text-[0.6rem]">GB - RAM</p>
          <p className="text-xs font-bold text-gray-600 max-2xl:text-[0.5rem]">
            {formattedRamValue}
          </p>
        </div>
        <div
          title="Users Connected"
          className="background-light800_dark400 flex w-[auto] flex-col rounded-sm px-2 text-[0.6rem] shadow-md"
        >
          <p className="text-sm max-2xl:text-[0.6rem]">
            {connectedUsers <= 1 ? "User" : "Users"}
          </p>
          <p className="text-xs font-bold text-gray-600 max-2xl:text-[0.5rem]">
            {connectedUsers}{" "}
          </p>
        </div>
      </div>
      <div
        title="last reload"
        className="code-font h3-semibold flex w-[50%] basis-2/3 items-center justify-end  rounded-sm  text-center text-[0.6rem] shadow-md max-2xl:text-sm"
      >
        <div className="background-light800_dark400 flex h-[25px] w-[auto] flex-row items-center rounded-sm pl-2 text-[0.6rem]">
          {dateNow}{" "}
          <Image
            className="invert-colors ml-2"
            src="/assets/icons/clock.svg"
            alt="user"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};
export default ThreadsInfo;
