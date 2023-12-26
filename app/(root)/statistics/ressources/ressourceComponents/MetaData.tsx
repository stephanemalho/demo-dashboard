import React from "react";
import { Input } from "../../../../../components/ui/input";
import ContainerWrapper from "@/components/shared/sideBars/optionSideBar/optionSideBarComponent/ContainerWrapper";

const MetaData = () => {
  return (
    <ContainerWrapper>
      <div className="col-span-1 rounded-none p-2">
      <div className="mb-6">
          <label
            className="mb-2 block font-medium text-sm text-gray-900"
            htmlFor="version"
          >
            Type
          </label>
          <select
            className="block w-full rounded-none border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            id="version"
          >
            <option>Count</option>
            <option>Type</option>
          </select>
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
            htmlFor="version"
          >
            Users
          </label>
          <select
            className="block w-full rounded-none border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            id="version"
          >
            <option>Everyone</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block font-medium text-sm text-gray-900"
            htmlFor="version"
          >
            Version
          </label>
          <select
            className="block w-full rounded-none border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            id="version"
          >
            <option>2023-11-06 11:42:00 (Latest)</option>
          </select>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default MetaData;
