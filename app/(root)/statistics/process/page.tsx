import TreemapComponent from "../process/processComponents/Treemap";
import ContentContainer from "@/components/shared/contentContainer/ContentContainer";
import ChartContainer from "@/components/shared/boxContainer/ChartContainer";

function page() {
  return (
    <ContentContainer>
      <ChartContainer headTitle={'Statistics Process'} height={"h-[96vh]"}>
        <div className="mx-auto w-full p-6">
          <TreemapComponent />
        </div>
      </ChartContainer>
    </ContentContainer>
  );
}

export default page;
