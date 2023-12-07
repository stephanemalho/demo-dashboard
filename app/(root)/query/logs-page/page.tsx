"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import LiveContainer from "@/components/shared/boxContainer/LiveContainer";

export default function Component() {
  const [checkedState, setCheckedState] = useState(
    new Array(11).fill(false) // 11 pour le nombre d'éléments que vous avez
  );
  const [badges, setBadges] = useState(["TMI.Cube", "TMI.Dimensions"]);
  const [inputValue, setInputValue] = useState("");
  const [selectedBadgeIndex, setSelectedBadgeIndex] = useState<number | null>(
    null
  );

  const items = [
    "TM1.Process",
    "TM1.Chore",
    "TM1.Server",
    "TM1.Transaction",
    "TM1.Cube",
    "TM1.Dimensions",
    "TM1.Cube.Dependency",
    "TM1.Blob",
    "TM1.Mdx.Interface",
    "TM1.SQLAPI",
    "TM1.NGAPI.Rest",
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleBadgeClick = (index: number) => {
    // Si l'index cliqué est le même que celui déjà sélectionné, désélectionnez-le
    if (index === selectedBadgeIndex) {
      setSelectedBadgeIndex(null);
    } else {
      // Sinon, sélectionnez le nouveau badge
      setSelectedBadgeIndex(index);
    }
  };
  

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setBadges([...badges, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = () => {
    if (selectedBadgeIndex !== null) {
      setBadges(badges.filter((_, index) => index !== selectedBadgeIndex));
      setSelectedBadgeIndex(null); // Deselect badge after deleting
    }
  };

  const handleCheckboxChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handleSelectAll = () => {
    setCheckedState(new Array(11).fill(true));
  };

  const handleDeselectAll = () => {
    setCheckedState(new Array(11).fill(false));
  };

  return (
    <div className="flex  bg-gray-100">
      <div className="flex w-3/4 flex-col overflow-auto p-8">
        <Card className="mb-4 rounded-none p-1">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <Button variant="secondary">Excel</Button>
              <Button>Reload</Button>
            </div>
            <Input placeholder="Search..." />
          </div>
        </Card>
        <LiveContainer
          title="Query Logs"
          logHeight="p-3 bg-white"
          label={"Query Logs"}
        >
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
      <div className="flex w-1/4 flex-col bg-white p-8">
        <Card className="mb-4 p-2">
          <div className="flex flex-wrap gap-2 space-y-2">
            <div className="w-full text-lg font-semibold">Level</div>
            <div className="mt-3 flex flex-wrap">
              <div>
                <label className="flex w-[100px]">
                  <input className="mr-3" type="checkbox" value="DEBUG" />
                  DEBUG
                </label>
              </div>
              <div>
                <label className="flex w-[100px]">
                  <input className="mr-3" type="checkbox" value="INFO" />
                  INFO
                </label>
              </div>
              <div>
                <label className="flex w-[100px]">
                  <input className="mr-3" type="checkbox" value="WARN" />
                  WARN
                </label>
              </div>
              <div>
                <label className="flex w-[100px]">
                  <input className="mr-3" type="checkbox" value="ERROR" />
                  ERROR
                </label>
              </div>
              <div>
                <label className="flex w-[100px]">
                  <input className="mr-3" type="checkbox" value="FATAL" />
                  FATAL
                </label>
              </div>
            </div>
          </div>
        </Card>

        <Card className="mb-4 p-2">
          <div className="flex flex-col space-y-2">
            <div className="text-lg font-semibold">Time Stamp</div>
            <Input type="date" />
            <div className="flex space-x-2">
              <Input type="time" />
              <Input type="time" />
            </div>
          </div>
        </Card>
        <Card className="mb-4 p-2">
          <div className="flex flex-col space-y-2">
            <div className="text-lg font-semibold">Logger</div>
            <div className="flex flex-wrap gap-2 p-4">
              {items.map((item, index) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={item}
                    checked={checkedState[index]}
                    onChange={() => handleCheckboxChange(index)} // Pass the index here
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <div className="flex">
              <Button
                className="my-1 w-[50%]  rounded-none border bg-[#0f62fe] text-white hover:bg-[#4589ff]"
                onClick={handleSelectAll}
              >
                Select All
              </Button>
              <Button
                className="my-1 w-[50%]  rounded-none border bg-[#0f62fe] text-white hover:bg-[#4589ff]"
                onClick={handleDeselectAll}
              >
                Unselect All
              </Button>
            </div>
          </div>
        </Card>
        <Card className="mb-4 p-2">
          <div className="flex flex-col space-y-2">
            <div className="text-lg font-semibold">Contains</div>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  className={`p-4 ${
                    selectedBadgeIndex === index ? "shake-animation bg-red-500 text-white" : "bg-[#bfdbfe] "
                  }`}
                  variant="secondary"
                  onClick={() => handleBadgeClick(index)}
                >
                  {badge}
                </Badge>
              ))}
            </div>
            <div className="mt-2">
              <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add a badge..."
              />
              <Button
                className="my-1 w-[50%] rounded-none border bg-[#0f62fe] text-white hover:bg-[#4589ff]"
                onClick={handleSubmit}
              >
                Add
              </Button>
              <Button
                className={`my-1 w-[50%] rounded-none border ${
                  selectedBadgeIndex !== null
                    ? "bg-[#da1e28] text-white hover:bg-[#fa4d56]"
                    : "bg-gray-300"
                }`}
                onClick={handleDelete}
                disabled={selectedBadgeIndex === null}
              >
                Delete
              </Button>
            </div>
          </div>
        </Card>
        <Card className="mb-4 p-2">
          <div className="flex flex-col space-y-2">
            <div className="text-lg font-semibold">Not Contains</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
