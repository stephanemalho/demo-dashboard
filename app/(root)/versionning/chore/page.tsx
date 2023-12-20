import ContentContainer from "@/components/shared/contentContainer/ContentContainer";
import HeadVersionningChores from "./choreComponents/HeadVersionningChores";
import LiveContainer from "@/components/shared/boxContainer/LiveContainer";

export default function page() {

  return (
   <ContentContainer>
      <LiveContainer
        title="Versionning Chores"
        label="Versionning Chores"
        logHeight="h-96"
      >
        <HeadVersionningChores />
        <div className="h-full bg-white" />
      </LiveContainer>
   </ContentContainer>
  )
}
