"use client";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import React from "react";
import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import ExpendableSearchBar from "@/components/shared/search/ExpendableSearchBar";

export default function Component() {
  return (
    <div className="flex h-[94vh] bg-gray-100">
      <div className="mx-auto flex w-3/4 flex-col overflow-auto p-8">
        <LiveContainer
          title="Query Logs"
          logHeight="p-3 bg-white"
          label={"Query Logs"}
        >
          <div className="sticky top-0 z-10 flex w-full items-center justify-between border-b-[1px]">
            <div className="relative w-full">
              <ExpendableSearchBar
                placeHolderValue="Search in table..."
                searchValue=""
                onChange={() => alert("boom")}
                size="h-[50px] w-[50px] min-w-[50px]"
              />
            </div>
            <Button variant="secondary">Excel</Button>
          </div>
          <Table className="p-6">
            <TableHeader>
              <TableRow>
                <TableHead>T_ID</TableHead>
                <TableHead>S_ID</TableHead>
                <TableHead>LEVEL</TableHead>
                <TableHead>TIMESTAMP</TableHead>
                <TableHead>LOGGER</TableHead>
                <TableHead>MESSAGE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>9836</TableCell>
                <TableCell>0</TableCell>
                <TableCell>
                  <Badge className="p-2" variant="secondary">
                    Info
                  </Badge>
                </TableCell>
                <TableCell>2023-11-17 22:08:58</TableCell>
                <TableCell>TMI.Chore</TableCell>
                <TableCell>Chore Tache_Test_1 finished executing</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </LiveContainer>
      </div>
    </div>
  );
}
