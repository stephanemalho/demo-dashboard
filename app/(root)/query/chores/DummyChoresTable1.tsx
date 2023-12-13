import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

// Assuming this is JSON data
const jsonData = [
  {
    level: null,
    processName: null,
    lastExecutionDate: null,
    duration: null,
    executor: null,
    fullLog: null,
    version: null,
  },
];

const DummyChoresTable1 = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>LEVEL</TableHead>
          <TableHead>PROCESS NAME</TableHead>
          <TableHead>EXECUTION DATE</TableHead>
          <TableHead>DURATION</TableHead>
          <TableHead>EXECUTOR</TableHead>
          <TableHead>FULL LOG</TableHead>
          <TableHead>VERSION</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jsonData.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.level}</TableCell>
            <TableCell>{item.processName}</TableCell>
            <TableCell>{item.lastExecutionDate}</TableCell>
            <TableCell>{item.duration}</TableCell>
            <TableCell>{item.executor}</TableCell>
            <TableCell>{item.fullLog}</TableCell>
            <TableCell>{item.version}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DummyChoresTable1;
