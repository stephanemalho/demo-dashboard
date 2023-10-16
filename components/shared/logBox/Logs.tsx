"use client";
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
import ResizeLog from "./logs-components/ResizeLog";
import { useState } from "react";

const Logs = () => {
  const data = dashboard;
  const logs = data.Logs;

  const [isFullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setFullScreen(!isFullScreen);
  };

  return (
    <div
      className={`text-dark500_light700 flex w-full flex-col justify-between gap-4`}
    >
      <h1 className="h1-bold primary-text-gradient w-full font-inter">
        DashBoard
      </h1>
      <div className="w-full">
        <div
          className={`background-light800_dark300  p-2 duration-500 ease-in-out ${
            isFullScreen ? "absolute right-3 top-[100px] h-[90vh] w-[99vw]" : ""
          }`}
        >
          <ResizeLog isFullScreen={isFullScreen} onClick={toggleFullScreen} />
          <div
            className={`custom-scrollbar ${
              isFullScreen ? "h-screen" : "h-[400px]"
            } overflow-y-auto border-t`}
          >
            <Table>
              <TableCaption>A list of recent Logs.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>ThreadId</TableHead>
                  <TableHead>SessionID</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>TimeStamp</TableHead>
                  <TableHead>Logger</TableHead>
                  <TableHead>Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.keys(logs).map((logKey) => {
                  const logEntry = logs[logKey as unknown as keyof typeof logs];
                  return (
                    <TableRow key={logKey}>
                      <TableCell className="font-medium">
                        {logEntry.ThreadID}
                      </TableCell>
                      <TableCell>{logEntry.SessionID}</TableCell>
                      <TableCell>{logEntry.Level}</TableCell>
                      <TableCell className="w-[80px]">
                        {logEntry.TimeStamp}
                      </TableCell>
                      <TableCell>{logEntry.Logger}</TableCell>
                      <TableCell>{logEntry.Message}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
