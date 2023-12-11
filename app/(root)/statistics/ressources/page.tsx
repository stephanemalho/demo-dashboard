
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
