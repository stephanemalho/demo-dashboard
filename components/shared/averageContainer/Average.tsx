"use client";
import React, { useEffect, useState } from "react";
import TotalUsers from "./TotalUsers";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { getData } from "@/app/(root)/dashboard/page";
import { getUnique } from "@/utils/arrays";

const Average = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      console.log("result: ", result);
      setData(result as any);
    }

    fetchData();
  }, []);

  return (
    <div className="background-light850_dark100 ml-auto flex h-[100px] w-[full] basis-1/3 flex-col items-center justify-center border-t-[4px] border-green-500">
      <div className="background-light850_dark100  text-sm text-black">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className=" h-full text-sm active:text-light-500 dark:border-slate-700 "
            >
              <TotalUsers />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            {/* get all user in the data and reduce the sibling with the same name */}
            {getUnique(data, "user").map((user: any) => {
              // get all the user with the same name
              const userWithSameName = data.filter((e: any) => e.user === user.user);

              const totalUsers = data.length;

              return (
                <div key={user.id} className="background-light850_dark100 m-3 rounded-sm border-t-[2px] border-green-500 p-2">
                    <p>
                      {user.user}: <span className="font-bold">{userWithSameName.length}  / {totalUsers} </span> Threads
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
