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
    <LiveContainer title="" logHeight="h-full border-none flex">
      <div className="h2-semibold flex h-full w-[50%] flex-row items-center justify-between pb-2 pl-6 font-inter">
        <div title="connexion">
          <div
            aria-label={`${isConnected}`}
            className={`h-5 w-5 rounded-full ${stateColorClass}`}
          >
            {""}
          </div>
        </div>
        <div title="Thread" className="text-center">
          {connectedThreads} {connectedThreads <= 1 ? "Thread" : "Threads"}
        </div>
        <div title="RAM" className="flex h-auto w-auto text-center"><Image
          className="invert-colors mr-3"
          src="/assets/icons/ram.svg"
          alt="user"
          width={16}
          height={16}
        />{formattedRamValue}gb RAM</div>
        <div title="Users Connected" className=" flex h-auto w-auto text-center">
          {connectedUsers <= 1 ? (
            <Image
              className="invert-colors mr-3"
              src="/assets/icons/user.svg"
              alt="user"
              width={16}
              height={16}
            />
          ) : (
            <Image
              className="invert-colors mr-3"
              src="/assets/icons/users.svg"
              alt="users"
              width={16}
              height={16}
            />
          )}
          {connectedUsers} {connectedUsers <= 1 ? "User" : "Users"}
        </div>
      </div>
      <div title="last reload" className="code-font h2-semibold flex h-auto w-[50%] items-center justify-end text-center dark:text-slate-400">
        Today:<div className="background-light800_dark400 flex w-[200px] flex-row rounded-lg pl-2">{dateNow} <Image
          className="invert-colors ml-2"
          src="/assets/icons/clock.svg"
          alt="user"
          width={20}
          height={20}
        /></div>
       
      </div>
    </LiveContainer>
  );
};
export default ThreadsInfo;
