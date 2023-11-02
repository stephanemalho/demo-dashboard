"use client";
import React, { useEffect, useState } from "react";
import TotalUsers from "./TotalUsers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

import { getUnique } from "@/utils/arrays";
import { useSidebar } from "@/context/ScreenSizeContext";
import { getData } from "@/api/getData";

const Average = () => {
  const [data, setData] = useState([]);
  const { toggleSideBar } = useSidebar();

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result as any);
    }

    fetchData();
  }, []);

  return (
    <div
      className={`${
        toggleSideBar ? "hidden" : ""
      } background-light850_dark100 ml-auto flex h-[100px] basis-1/3 flex-col items-center justify-center border-t-[4px] border-green-500`}
    >
      <div className="background-light850_dark100  text-sm text-black ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className=" h-full text-sm  hover:bg-slate-100 active:text-light-500 dark:border-slate-700 "
              >
              <TotalUsers />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            {/* get all user in the data and reduce the sibling with the same name */}
            {getUnique(data, "user").map((user: any) => {
              // get all user filtered by name
              const threadsByUser = data.filter(
                (e: any) => e.user === user.user
              );
              const totalUsers = data.length;

              return (
                <div
                  key={user.id}
                  className="background-light850_dark100 text-light400_light500 m-1 scroll-auto rounded-sm border-t-[2px] border-green-500 p-2"
                >
                  <p>
                    {user.user}:{" "}
                    <span className="font-bold dark:text-slate-400">
                      {threadsByUser.length}
                    </span>{" "}
                    Thread{threadsByUser.length === 1 ? "" : "s"}{" "}
                    <span className="font-bold dark:text-slate-400">
                      {" "}
                      / {totalUsers}{" "}
                    </span>
                  </p>
                </div>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Average;
