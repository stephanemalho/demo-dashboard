"use client";
import React from "react";
import { dashboard } from "@/data/dashboard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LiveContainer from "../boxContainer/LiveContainer";
import Image from "next/image";

const Threads = () => {
  const data = dashboard;
  const threads = data.Threads;

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <LiveContainer logHeight="h-[30vh]" title="Live Threads">
      <Table className="background-light800_dark400">
        <TableCaption>A list of recent threads.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Function</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Context</TableHead>
            <TableHead>Wait Time</TableHead>
            <TableHead>Elapsed Time</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" dark:text-slate-400">
          {Object.keys(threads).map((logKey) => {
            const threadsEntry = threads[logKey as unknown as keyof typeof threads];
            return (
              <TableRow key={logKey}>
                <TableCell className="font-medium"  title="Function" >
                  {threadsEntry.Function}
                </TableCell>
                <TableCell title="User">{threadsEntry.Name}</TableCell>
                <TableCell title="Type">{threadsEntry.Type}</TableCell>
                <TableCell title="Context">{threadsEntry.Context}</TableCell>
                <TableCell title="Wait Time">{threadsEntry.WaitTime}</TableCell>
                <TableCell title="Elapsed Time">{threadsEntry.ElapsedTime}</TableCell>
                <TableCell title="State">{threadsEntry.State}</TableCell>
                <TableCell title="Action">
                  <Image
                    onClick={handleClick}
                    src="assets/icons/trash.svg"
                    alt="trash"
                    width={20}
                    height={20}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </LiveContainer>
  );
};

export default Threads;
