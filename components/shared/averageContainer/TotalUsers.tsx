"use client";
import { dashboard } from "@/data/dashboard";
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

    return `Connected Users: ${usersCount} / ${allUsersCount}`;
  };

  return (
    <div className="background-light850_dark100 flex">
      <div className="text-sm font-bold text-black">
        <div>
          <p className="flex w-full dark:text-slate-600">
            {compareUsersCount()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalUsers;
