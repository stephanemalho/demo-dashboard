import { dashboard } from "@/data/dashboard";
import React from "react";

const OnlineUser = () => {
  const threadsInfo = dashboard;
  const isOnline = threadsInfo.State.Value === "Online";

  const stateColorClass = isOnline ? "bg-lime-500" : "bg-red-500";
  const isConnected = isOnline ? "Connected" : "Not Connected";

  return (
    <div
      title="connexion"
      className="flex h-[49px] w-[50px] cursor-pointer items-center justify-center pb-1 hover:bg-[#f4f4f4] active:bg-[#e0e0e0]"
    >
      <span aria-label={`${isConnected}`} className="relative flex h-3 w-3">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${stateColorClass} opacity-75`}
        ></span>
        <span
          className={`relative inline-flex h-3 w-3 rounded-full ${stateColorClass}`}
        ></span>
      </span>
    </div>
  );
};

export default OnlineUser;
