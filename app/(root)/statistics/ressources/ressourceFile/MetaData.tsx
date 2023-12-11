import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import { Input } from "../../../../../components/ui/input";

const MetaData = () => {
  return (
    <div className="col-span-1 rounded-none bg-white p-4 shadow">
      <div className="mb-6">
        <label
          className="mb-2 block font-medium text-sm text-gray-900"
          htmlFor="type"
        >
          Type
        </label>
        <Select>
          <SelectTrigger id="type">
            <SelectValue placeholder="Count" />
          </SelectTrigger>
          <SelectContent className="bg-white" position="popper">
            <SelectItem value="count">Count</SelectItem>
            <SelectItem value="time">Time</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-6">
        <label
          className="mb-2 block font-medium text-sm text-gray-900"
          htmlFor="timestamp"
        >
          Time Stamp
        </label>
        <div className="flex gap-4">
          <Input id="start-time" placeholder="Start Time" />
          <Input id="end-time" placeholder="End Time" />
        </div>
      </div>
      <div className="mb-6">
        <label
          className="mb-2 block font-medium text-sm text-gray-900"
          htmlFor="users"
        >
          Users
        </label>
        <Select>
          <SelectTrigger id="users">
            <SelectValue placeholder="Everyone" />
          </SelectTrigger>
          <SelectContent className="bg-white" position="popper">
            <SelectItem value="everyone">Everyone</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-6">
        <label
          className="mb-2 block font-medium text-sm text-gray-900"
          htmlFor="process"
        >
          Process
        </label>
        <Select>
          <SelectTrigger id="process">
            <SelectValue placeholder="Everyone" />
          </SelectTrigger>
          <SelectContent className="bg-white" position="popper">
            <SelectItem value="everyone">Everyone</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default MetaData;
