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

import LogContainer from "../boxContainer/LogContainer";

const Logs = () => {
  const data = dashboard;
  const logs = data.Logs;

  return (
    <LogContainer>
        <Table className="background-light800_dark300">
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
    </LogContainer>
  );
};

export default Logs;
