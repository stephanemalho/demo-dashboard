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
    <div className="shadow-light100_dark100 background-light900_dark200 relative flex h-[40px] w-full rounded-lg p-2 max-2xl:rounded-sm  max-2xl:p-2">
      <div className="text-light400_light500 flex h-full basis-1/3 flex-row items-center justify-between pl-2 font-inter max-2xl:pl-0 max-2xl:text-[0.6rem]">
        <div title="connexion">
          <span  aria-label={`${isConnected}`} className="relative flex h-3 w-3">
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
          className="ml-5 flex h-[40px] w-[80px] flex-col justify-center p-0 text-left "
        >
          <p className="text-xs">
            {" "}
            {connectedThreads <= 1 ? "Thread" : "Threads"}
          </p>
          <p className="text-sm font-bold text-gray-600">{connectedThreads}</p>
        </div>
        <div title="RAM" className="flex h-auto w-[100px] text-center">
          {/* <Image
            className="mr-3"
            src="/assets/icons/ram.svg"
            alt="user"
            width={16}
            height={16}
          /> */}
          <div className="ml-5 flex h-[40px]  flex-col justify-center p-0 text-left">
            <p className="text-xs">GB - RAM</p>
            <p className="text-sm font-bold text-gray-600">
              {formattedRamValue}
            </p>
          </div>
        </div>
        <div title="Users Connected" className="ml-10 flex h-auto w-[100px]">
          {/* {connectedUsers <= 1 ? (
            <Image
              className="mr-3"
              src="/assets/icons/user.svg"
              alt="user"
              width={16}
              height={16}
            />
          ) : (
            <Image
              className="mr-3"
              src="/assets/icons/users.svg"
              alt="users"
              width={16}
              height={16}
            />
          )} */}
          <div className=" flex h-[40px] w-[auto] flex-col justify-center p-0 text-left">
            <p className="text-xs">{connectedUsers <= 1 ? "User" : "Users"}</p>
            <p className="text-sm font-bold text-gray-600">{connectedUsers} </p>
          </div>
        </div>
      </div>
      <div
        title="last reload"
        className="code-font h3-semibold flex h-auto w-[50%] basis-2/3 items-center justify-end text-center dark:text-slate-400 max-2xl:text-sm"
      >
        <div className="background-light800_dark400 flex w-[auto] flex-row rounded-sm pl-2 text-sm">
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
