import SearchRules from "./ruleComponents/SearchRules";

export default function page() {
  return (
    <div className="flex h-[90vh] bg-gray-100">
      <div className="flex-1 p-8">
        <div className="mb-6 flex justify-between">
          <SearchRules />
          <div className="flex space-x-4">
            <button className="rounded-none border border-gray-300 bg-transparent px-4 py-2 font-medium text-sm text-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200">
              Info
            </button>
            <button className="rounded-none border border-gray-300 bg-transparent px-4 py-2 font-medium text-sm text-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200">
              Rules
            </button>
          </div>
        </div>
        <div className="h-full bg-white" />
      </div>
    </div>
  )
}
