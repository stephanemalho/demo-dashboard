"use client";
import { LuArrowUpDown } from "react-icons/lu";
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
import ExpendableSearchBar from "@/components/shared/search/ExpendableSearchBar";

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
      logHeight="h-[80vh] max-2xl:h-[80vh]"
      title="Basic Datatable"
      label="Basic Datatable"
    >
      <div className="sticky top-0 z-10 flex w-full items-center justify-between border-b-[1px] bg-[#bf5e5e]">
        <div className="relative w-full">
        <ExpendableSearchBar  
          placeHolderValue="Search in table..."
          searchValue=""
          onChange={() => alert("boom")}
          size="h-[50px] w-[50px] min-w-[50px]"
        />
        </div>
      </div>
      <div className="m-2 bg-[]">
      <Table className=" h-[50px] w-[100%] max-2xl:w-full">
        <TableHeader className="sticky top-0 m-0 h-[20px]">
          <TableRow>
            <TableHead className="p-1"><div className="flex items-center">PACKAGE NAME<LuArrowUpDown className="ml-5"/></div></TableHead>
            <TableHead className="p-1 "><div className="flex items-center">CREATION DATE <LuArrowUpDown className="ml-5"/></div></TableHead>
            <TableHead className="p-1">ACTIONS</TableHead>
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
      </div>
    </LiveContainer>
  );
};

export default LiveBasicTable;
