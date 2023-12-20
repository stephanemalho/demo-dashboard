// import ReloadButton from "./ressourceComponents/ReloadButton";
import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import TreemapComponent from "./ressourceComponents/Treemap";
import ContentContainer from "@/components/shared/contentContainer/ContentContainer";

function page() {
  return (
    <ContentContainer>
    <LiveContainer label="Treemap Process" title="Treemap Process" logHeight="h-[90vh] max-2xl:h-[84vh]">
      <div className="mx-auto w-full p-6">
        <TreemapComponent />
      </div>
    </LiveContainer>
    </ContentContainer>
  );
}

export default page;
