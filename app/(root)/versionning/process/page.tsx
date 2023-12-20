import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import ContentContainer from "@/components/shared/contentContainer/ContentContainer";

export default function page() {
  return (
     <ContentContainer>
       <LiveContainer
          title="Process"
          label="Process"
          logHeight="h-96"
       >
        <div className="flex justify-between">
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
       </LiveContainer>
     </ContentContainer>
  );
}
