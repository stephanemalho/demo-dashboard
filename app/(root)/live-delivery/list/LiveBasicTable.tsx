"use client";
import { LuArrowUpDown } from "react-icons/lu";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import { FaEye } from "react-icons/fa";
import Image from "next/image";

const LiveBasicTable = () => {
  const handleClickView = () => {
    alert("boom");
  };

  const handleDeliveryClick = () => {
    alert("delivery");
  };
  const handleTrashClick = () => {
    alert("trash");
  };

  return (
    <LiveContainer
      logHeight="h-[60vh] max-2xl:h-[80vh]"
      title="Basic Datatable"
      label="Basic Datatable"
    >
      <div className="sticky top-0 z-10 mb-4 flex w-full items-center justify-between bg-white p-4">
        <div className="flex items-center">
          <label className="mr-2" htmlFor="entries">
            Show
          </label>
          <Select>
            <SelectTrigger id="entries">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
            </SelectContent>
          </Select>
          <span className="ml-2">entries</span>
        </div>
        <div className="flex items-center">
          <label className="mr-2" htmlFor="search">
            Search:
          </label>
          <Input id="search" placeholder="" />
        </div>
      </div>
      <Table className="m-4 h-[50px] w-[98%] max-2xl:w-full">
        <TableHeader className="sticky top-0">
          <TableRow>
            <TableHead className="p-3"><div className="flex items-center">PACKAGE NAME<LuArrowUpDown className="ml-5"/></div></TableHead>
            <TableHead className="p-3 "><div className="flex items-center">CREATION DATE <LuArrowUpDown className="ml-5"/></div></TableHead>
            <TableHead className="p-3">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="h-[50vh] overflow-hidden">
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">1 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:17</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={() => alert("boom")}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">2 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:18</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">3 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:19</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">4 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 14:43:38</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">7 - Exemple2</TableCell>
            <TableCell>2023-11-23 15:09:37</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">1 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:17</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">2 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:18</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">3 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:19</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">4 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 14:43:38</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">7 - Exemple2</TableCell>
            <TableCell>2023-11-23 15:09:37</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">1 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:17</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">2 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:18</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">3 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:19</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">4 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 14:43:38</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">7 - Exemple2</TableCell>
            <TableCell>2023-11-23 15:09:37</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">1 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:17</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">2 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:18</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">3 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:19</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">4 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 14:43:38</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">7 - Exemple2</TableCell>
            <TableCell>2023-11-23 15:09:37</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">1 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:17</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">2 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:18</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">3 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:19</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">4 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 14:43:38</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[1px]">
            <TableCell className="w-2/5 font-medium">7 - Exemple2</TableCell>
            <TableCell>2023-11-23 15:09:37</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button
                onClick={handleClickView}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <FaEye className="text-black" />
              </Button>
              <Button
                onClick={handleDeliveryClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/delivery.svg"
                  width={16}
                  height={16}
                  alt="delivery "
                />
              </Button>
              <Button
                onClick={handleTrashClick}
                className=" w-[100px] rounded-none hover:bg-[#e2e2e2]"
              >
                <Image
                  src="/assets/icons/trash.svg"
                  width={16}
                  height={16}
                  alt="trash "
                />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="sticky bottom-0 z-10 mt-4 flex items-center justify-between border-[1px] bg-white p-4">
        <span>Showing 1 to 5 of 5 entries</span>
        <div className="flex">
          <Button className="mr-2" variant="outline">
            Previous
          </Button>
          <Button variant="outline">1</Button>
          <Button className="ml-2" variant="outline">
            Next
          </Button>
        </div>
      </div>
    </LiveContainer>
  );
};

export default LiveBasicTable;
