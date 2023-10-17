import React from "react";
import moment from "moment";
import LiveContainer from "../boxContainer/LiveContainer";
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
    <LiveContainer title="" logHeight="h-auto border-none flex">
      <div className="h2-semibold flex h-full w-[50%] flex-row items-center justify-between pb-2 pl-6 font-inter">
        <div>
          <div
            aria-label={`${isConnected}`}
            className={`h-6 w-6 rounded-full ${stateColorClass}`}
          >
            {""}
          </div>
        </div>
        <div className="w-[150px] text-center">
          {connectedThreads} {connectedThreads <= 1 ? "Thread" : "Threads"}
        </div>
        <div className="w-[150px] text-center">{formattedRamValue} GB</div>
        <div className="flex w-auto flex-row justify-between text-center">
          {connectedUsers <= 1 ? (
            <Image
              className="invert-colors mr-3"
              src="/assets/icons/user.svg"
              alt="user"
              width={20}
              height={20}
            />
          ) : (
            <Image
              className="invert-colors mr-3"
              src="/assets/icons/users.svg"
              alt="users"
              width={20}
              height={20}
            />
          )}
          {connectedUsers} {connectedUsers <= 1 ? "User" : "Users"}
        </div>
      </div>
      <div className="code-font h2-semibold flex w-[50%] items-center justify-end text-center dark:text-slate-400">
        Today:<div className=" w-[140px]">{dateNow}</div>
        <Image
          className="invert-colors"
          src="/assets/icons/clock.svg"
          alt="user"
          width={20}
          height={20}
        />
      </div>
    </LiveContainer>
  );
};
export default ThreadsInfo;
