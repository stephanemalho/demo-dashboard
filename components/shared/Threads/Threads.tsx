"use client";
import React from "react";
import { dashboard } from "@/data/dashboard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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
      <Table className="background-light800_dark400 text-lg">
        <TableCaption>A list of recent threads.</TableCaption>
        <TableFooter>
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
        </TableFooter>
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
                <TableCell className="max-w-[300px] truncate" title={`Method: ${threadsEntry.Function}`} >
                  {threadsEntry.Function}
                </TableCell>
                <TableCell title={`Name: ${threadsEntry.Name}`}>{threadsEntry.Name}</TableCell>
                <TableCell title={`Type: ${threadsEntry.Type}`}>{threadsEntry.Type}</TableCell>
                <TableCell title={`Context: ${threadsEntry.Context}`}>{threadsEntry.Context}</TableCell>
                <TableCell title={`WaitTime: ${threadsEntry.WaitTime}`}>{threadsEntry.WaitTime}</TableCell>
                <TableCell title={`ElapsedTime: ${threadsEntry.ElapsedTime}`}>{threadsEntry.ElapsedTime}</TableCell>
                <TableCell title={`State: ${threadsEntry.State}`}>{threadsEntry.State}</TableCell>
                <TableCell title="Delete">
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
