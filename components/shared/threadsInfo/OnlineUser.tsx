import React from "react";
import status from "@/data/info/status.json";

const OnlineUser = () => {
  const statusValue = status[0].Value;
  const isOnline = statusValue === "Online";
  
  const stateColorClass = isOnline ? "bg-lime-500" : "bg-red-500";
  const isConnected = isOnline ? "Connected" : "Not Connected";

  return (
    <div
      title="connexion"
      className="flex h-[49px] w-[50px]  items-center justify-center pb-1 hover:bg-[#262626] "
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
