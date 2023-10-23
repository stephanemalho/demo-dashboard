import ContentContainer from "@/components/shared/contentContainer/ContentContainer";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import { dashboard } from "@/data/dashboard";

async function getData(): Promise<Payment[]> {
  const data = dashboard;
  const threads = data.Threads;

  return Object.keys(threads).map((logKey) => {
    const threadsEntry = threads[logKey as unknown as keyof typeof threads];
    return {
      id: logKey,
      function: threadsEntry.Function,
      user: threadsEntry.Name,
      type: threadsEntry.Type,
      context: threadsEntry.Context,
      waitTime: threadsEntry.WaitTime,
      elapsedTime: threadsEntry.ElapsedTime,
      state : threadsEntry.State,
    };
  });
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="text-[0.6rem] lg:w-[70vw]">
      <ContentContainer>
        <LiveContainer title="Live Threads" logHeight="h-[auto]">
          <DataTable columns={columns} data={data} />
        </LiveContainer>
      </ContentContainer>
    </div>
  );
}
