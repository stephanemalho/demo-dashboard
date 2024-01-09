"use client";
import React from "react";
import { getElementLength } from "@/lib/utils/arrays";
import { formatRamValue } from "@/lib/utils/formatNumber";
import OnlineUser from "./OnlineUser";
import MainInfo from "./MainInfo";
import users from "@/data/users.json";
import ram from "@/data/ram.json";
import threads from "@/data/dashboard/threads.json";

const ThreadsInfo = () => {
  const threadsInfo = threads;
  const userConnected = users
  const ramInfo = ram[0]
  
  const totalThreads = threadsInfo.length;
  const connectedUsers = getElementLength(userConnected);
  const ramValue = ramInfo.Value;
  const formattedRamValue: string = formatRamValue(ramValue);

  return (
    <div className="flex h-full w-full items-center">
      <OnlineUser />
      <div className="m-auto flex items-center justify-between  max-2xl:pl-0 max-2xl:text-[0.6rem]">
        <MainInfo infoTitle="Threads" data={totalThreads} />
        <MainInfo infoTitle="RAM" data={formattedRamValue} />
        <MainInfo infoTitle="Total Users" data={connectedUsers} />
      </div>
    </div>
  );
};
export default ThreadsInfo;
