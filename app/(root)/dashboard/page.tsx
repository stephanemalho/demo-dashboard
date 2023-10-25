import Logs from "@/components/shared/logBox/Logs";
import ContentContainer from "@/components/shared/contentContainer/ContentContainer";
import ThreadsInfo from "@/components/shared/threadsInfo/ThreadsInfo";
import LiveThreads from "@/components/shared/tableThreads/LiveThreads";

import { dashboard } from "@/data/dashboard";
import { Threads } from "@/components/shared/tableThreads/columns";
import Average from "@/components/shared/averageContainer/Average";


export async function getData(): Promise<Threads[]> {
  const data = dashboard;
  const threads = data.Threads;

  return Object.keys(threads).map((logKey) => {
    const threadsEntry = threads[logKey as unknown as keyof typeof threads];
    return {
      id: threadsEntry.ID,
      function: threadsEntry.Function,
      user: threadsEntry.Name,
      type: threadsEntry.Type,
      context: threadsEntry.Context,
      waitTime: threadsEntry.WaitTime,
      elapsedTime: threadsEntry.ElapsedTime,
      state: threadsEntry.State,
      delete: threadsEntry.ID,
      actions: [],
    };
  });
}

export default function Home() {
  return (
    <div className="flex lg:w-[85vw] ">
      <ContentContainer>
        <ThreadsInfo />
        <LiveThreads />
        <Logs />
      </ContentContainer>
      <Average />
    </div>
  );
}
