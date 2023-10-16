import Logs from "@/components/shared/logBox/Logs";
import ContentContainer from "@/components/shared/contentContainer/ContentContainer";

export default function Home() {
 
  return (
    <div className="lg:w-[70vw]">
    <ContentContainer title="Dashboard">
      <Logs />
    </ContentContainer>
    </div>
  );
}
