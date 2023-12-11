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
import { JSX, SVGProps } from "react";
import LiveContainer from "@/components/shared/boxContainer/LiveContainer";

const LiveBasicTable = () => {
  return (
    <LiveContainer
      logHeight="h-[44vh] max-2xl:h-[80vh]"
      title="Basic Datatable"
      label="Basic Datatable"
    >
      <div className="sticky top-0 z-10 mb-4 flex items-center justify-between bg-white p-4">
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
      <Table className="m-4 h-[50vh] w-[58vw] max-2xl:w-full">
        <TableHeader className="sticky top-0">
          <TableRow>
            <TableHead className="w-[200px]">
              PACKAGE NAME
              <ListOrderedIcon className="ml-2" />
            </TableHead>
            <TableHead className="w-[200px]">
              CREATION DATE
              <ListOrderedIcon className="ml-2" />
            </TableHead>
            <TableHead className="w-[200px]">
              ACTIONS
              <ListOrderedIcon className="ml-2" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-hidden">
          <TableRow className="h-[10px]">
            <TableCell className="w-2/5 font-medium">1 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:17</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button className=" w-[100px] rounded-none bg-[#0043ce]">
                Show
              </Button>
              <Button className=" w-[100px] rounded-none bg-[#24A148]">
                Deliver
              </Button>
              <Button className="w-[100px] rounded-none bg-[#DA1E28]">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[10px]">
            <TableCell className="w-2/5 font-medium">2 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:18</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button className=" w-[100px] rounded-none bg-[#0043ce]">
                Show
              </Button>
              <Button className=" w-[100px] rounded-none bg-[#24A148]">
                Deliver
              </Button>
              <Button className="w-[100px] rounded-none bg-[#DA1E28]">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[10px]">
            <TableCell className="w-2/5 font-medium">3 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 12:43:19</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button className=" w-[100px] rounded-none bg-[#0043ce]">
                Show
              </Button>
              <Button className=" w-[100px] rounded-none bg-[#24A148]">
                Deliver
              </Button>
              <Button className="w-[100px] rounded-none bg-[#DA1E28]">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[10px]">
            <TableCell className="w-2/5 font-medium">4 - Example</TableCell>
            <TableCell className="w-2/5">2023-10-09 14:43:38</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button className=" w-[100px] rounded-none bg-[#0043ce]">
                Show
              </Button>
              <Button className=" w-[100px] rounded-none bg-[#24A148]">
                Deliver
              </Button>
              <Button className="w-[100px] rounded-none bg-[#DA1E28]">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="h-[10px]">
            <TableCell className="w-2/5 font-medium">7 - Exemple2</TableCell>
            <TableCell>2023-11-23 15:09:37</TableCell>
            <TableCell className="flex h-full w-auto  items-center justify-between  px-5 text-white">
              <Button className=" w-[100px] rounded-none bg-[#0043ce]">
                Show
              </Button>
              <Button className=" w-[100px] rounded-none bg-[#24A148]">
                Deliver
              </Button>
              <Button className="w-[100px] rounded-none bg-[#DA1E28]">
                Delete
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

function ListOrderedIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}
