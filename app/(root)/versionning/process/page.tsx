export default function page() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex w-1/4 flex-col bg-white p-8">
        <div className="mb-6">
          <label
            className="mb-2 block font-medium text-sm text-gray-900"
            htmlFor="cube"
          >
            Process
          </label>
          <select
            className="block w-full rounded-none border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            id="cube"
          >
            <option>Cube1</option>
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
        <button className="w-full rounded-none bg-blue-700 px-5 py-2.5 text-center font-medium text-sm text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">
          Get back to this version
        </button>
      </div>
      <div className="flex-1 p-8">
        <div className="mb-6 flex justify-between">
          <div className="mr-6 flex-1">
            <label
              className="mb-2 block font-medium text-sm text-gray-900"
              htmlFor="cube-name"
            >
              Process
            </label>
          </div>
          <div className="flex space-x-4">
            <button className="rounded-none border border-gray-300 bg-transparent px-4 py-2 font-medium text-sm text-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200">
              Info
            </button>
            <button className="rounded-none border border-gray-300 bg-transparent px-4 py-2 font-medium text-sm text-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200">
              Parameters
            </button>
            <button className="rounded-none border border-gray-300 bg-transparent px-4 py-2 font-medium text-sm text-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200">
              Prolog
            </button>
            <button className="rounded-none border border-gray-300 bg-transparent px-4 py-2 font-medium text-sm text-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200">
              Metadata
            </button>
            <button className="rounded-none border border-gray-300 bg-transparent px-4 py-2 font-medium text-sm text-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200">
              Data
            </button>
            <button className="rounded-none border border-gray-300 bg-transparent px-4 py-2 font-medium text-sm text-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200">
              Epilog
            </button>
          </div>
        </div>
        <div className="h-full bg-white" />
      </div>
    </div>
  );
}
