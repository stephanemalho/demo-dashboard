"use client";
import React from "react";
// import moment from "moment";
import { dashboard } from "@/data/dashboard";
import { getElementLength } from "@/utils/arrays";
import { formatRamValue } from "@/utils/formatNumber";
import OnlineUser from "./OnlineUser";
import MainInfo from "./MainInfo";

const ThreadsInfo = () => {
  const threadsInfo = dashboard;
  // const dateNow = moment().format("LTS");
  const connectedUsers = getElementLength(threadsInfo.Users);
  const connectedThreads = getElementLength(threadsInfo.Threads);
  const ramValue = dashboard.RAM.Value;
  const formattedRamValue: string = formatRamValue(ramValue);

  return (
    <div className="flex h-full w-full items-center">
      <OnlineUser />
      <div className="m-auto flex items-center justify-between  max-2xl:pl-0 max-2xl:text-[0.6rem]">
        <MainInfo infoTitle="Threads" data={connectedThreads} />
        <MainInfo infoTitle="RAM" data={formattedRamValue} />
        <MainInfo infoTitle="Users Connected" data={connectedUsers} />
      </div>
    </div>
  );
};
export default ThreadsInfo;
