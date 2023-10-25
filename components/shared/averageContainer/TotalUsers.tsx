"use client";
import { dashboard } from "@/data/dashboard";
import Image from "next/image";
import React, { useEffect } from "react";

const TotalUsers = () => {
  useEffect(() => {
    async function fetchData() {
      const data = dashboard;
      console.log("TotalUsers: ", data.AllUsers);
      console.log("Users: ", data.Users);
    }
    fetchData();
  }, []);

  const compareUsersCount = () => {
    const data = dashboard;
    const allUsersCount = Object.keys(data.AllUsers).length;
    const usersCount = Object.keys(data.Users).length;

    return `${usersCount}/${allUsersCount}`;
  };

  return (
    <div className="flex w-[4vw] font-bold text-black sm:text-sm">
          <Image src={"/assets/icons/users.svg"} alt="User" width={20} height={20} className="max-2xl:hidden" />
          <p className="ml-4 flex w-full dark:text-slate-400 max-2xl:m-0 max-2xl:justify-center max-2xl:text-[10px] ">
            {compareUsersCount()}
          </p>
    </div>
  );
};

export default TotalUsers;
