import Logs from "@/components/shared/logBox/Logs";
import ContentContainer from "@/components/shared/contentContainer/ContentContainer";
import Threads from "@/components/shared/Threads/Threads";

export default function Home() {

  return (
    <div className="lg:w-[70vw]">
    <ContentContainer title="Dashboard">
      <Threads  />
      <Logs />
    </ContentContainer>
    </div>
  );
}
