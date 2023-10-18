import Logs from "@/components/shared/logBox/Logs";
import ContentContainer from "@/components/shared/contentContainer/ContentContainer";
import Threads from "@/components/shared/Threads/Threads";
import ThreadsInfo from "@/components/shared/threadsInfo/ThreadsInfo";

export default function Home() {

  return (
    <div className="lg:w-[70vw]">
    <ContentContainer >
      <ThreadsInfo />
      <Threads />
      <Logs />
    </ContentContainer>
    </div>
  );
}