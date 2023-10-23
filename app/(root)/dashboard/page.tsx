import Logs from "@/components/shared/logBox/Logs";
import ContentContainer from "@/components/shared/contentContainer/ContentContainer";
import ThreadsInfo from "@/components/shared/threadsInfo/ThreadsInfo";
import LiveThreads from "@/components/shared/tableThreads/LiveThreads";
// import OldThreads from "@/components/shared/OldThreads/OldThreads";


export default function Home() {

  return (
    <div className="lg:w-[85vw]">
    <ContentContainer >
      <ThreadsInfo />
      {/* <OldThreads /> */}
      <LiveThreads />
      <Logs />
    </ContentContainer>
    </div>
  );
}
