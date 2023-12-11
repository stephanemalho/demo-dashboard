
import Charts from "./Chart";

function page() {
  return (
    <div className="flex flex-col gap-8 p-8 lg:flex-row">
      <div className="m-auto flex flex-col">
        <div className="w-[70vw] rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">RAM & Garbage Use</h2>
          <div className="mt-2 flex justify-between text-sm text-gray-500">
            <span>Total Ram</span>
            <span>Garbage</span>
          </div>
          <div className="h-[30vh] w-[66vw]">
            <Charts />
          </div>
        </div>
        <div className="mt-6 w-[70vw] rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">
            Active Threads & Connected Users
          </h2>
          <div className="mt-2 flex justify-between text-sm text-gray-500">
            <span>Active Threads</span>
            <span>Connected Users</span>
          </div>
          <div className="h-[30vh] w-[66vw]">
            <Charts />
          </div>
        </div>
        <div className="mt-6 w-[70vw] rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">Startup Time Historic</h2>
          <div className="mt-2 flex justify-between text-sm text-gray-500">
            <span>Active Threads</span>
            <span>Connected Users</span>
          </div>
          <div className="h-[30vh] w-[66vw]">
            <Charts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
