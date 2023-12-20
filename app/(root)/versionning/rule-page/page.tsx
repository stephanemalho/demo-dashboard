import ContentContainer from "@/components/shared/contentContainer/ContentContainer";
import SearchRules from "./ruleComponents/SearchRules";
import LiveContainer from "@/components/shared/boxContainer/LiveContainer";

export default function page() {
  return (
    <ContentContainer>
      <LiveContainer title="Rules" label="Rules" logHeight="h-96">
        <div className="flex justify-between">
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
      </LiveContainer>
    </ContentContainer>
  );
}
