import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import ReloadButton from "./ressourceFile/ReloadButton";

function page() {  
  return (
    <div className="flex h-[90vw]">
      <main className="flex-1">
        <header className="sticky flex items-center justify-between bg-white p-6 shadow">
          <h1 className="text-xl font-semibold text-gray-800">
            Treemap Process
          </h1>
          <div className="flex items-center">
            <ReloadButton />
          </div>
        </header>
        <div className="mx-auto h-[70vh] w-[80vw] overflow-hidden p-6">
          <div className="grid grid-cols-4 grid-rows-3 gap-4">
            <div className="col-span-3 row-span-2 bg-gray-100 p-4">
              <div className="mb-4 h-[68%] bg-[#4d7c8a] p-4 text-white">
                <div className="font-bold">Calc_Conso_Luxembourg</div>
                <div>Count: 55788</div>
                <div>Total: 77:58h</div>
                <div>Average: 5.006s</div>
                <div>Minimum: 0s</div>
                <div>Maximum: 5:17:23s</div>
                <div>Last Execution: 2023-11-17 22:08:58</div>
              </div>
              <div className="h-[30%] bg-[#a25050] p-4  text-white">
                <div className="font-bold">Calc_Conso_Belgique</div>
                <div>Count: 55788</div>
                <div>Total: 43:24h</div>
                <div>Average: 9.962s</div>
                <div>Minimum: 0s</div>
                <div>Maximum: 10:00:17s</div>
                <div>Last Execution: 2023-11-17 22:08:58</div>
              </div>
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
