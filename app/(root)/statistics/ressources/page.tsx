import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import ReloadButton from "./ressourceFile/ReloadButton";
import TreemapComponent from "./ressourceFile/Treemap";

function page() {
  return (
    <div className="flex">
      <main className="flex-1">
        <header className="sticky top-0 flex h-[50px] items-center justify-between bg-white p-6 shadow">
          <h1 className="text-xl font-semibold text-gray-800">
            Treemap Process
          </h1>
          <div className="flex items-center">
            <ReloadButton />
          </div>
        </header>
        <div className="mx-auto w-[80vw] p-6">
          <div className="grid grid-cols-4 grid-rows-3 gap-4">
            <div className="col-span-3 row-span-2 bg-gray-100 p-4">
              <TreemapComponent />
            </div>
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
