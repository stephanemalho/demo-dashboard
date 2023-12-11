"use client";
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import React, { useState } from 'react'

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

const LogSetting = () => {

  const [checkedState, setCheckedState] = useState(
    new Array(11).fill(false) // 11 pour le nombre d'éléments que vous avez
  );
  const [badges, setBadges] = useState(["TMI.Cube", "TMI.Dimensions"]);
  const [inputValue, setInputValue] = useState("");
  const [selectedBadgeIndex, setSelectedBadgeIndex] = useState<number | null>(
    null
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleBadgeClick = (index: number) => {
    if (index === selectedBadgeIndex) {
      setSelectedBadgeIndex(null);
    } else {
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
    <div className="flex w-full flex-col bg-white p-8">
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
                  variant="secondary"
                  className={`min-w-[100px]  p-4 ${
                    selectedBadgeIndex === index ? "shake-animation bg-red-500 text-white" : "bg-[#bfdbfe] "
                  }`}
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
  )
}

export default LogSetting