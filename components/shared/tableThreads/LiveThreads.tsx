import ContentContainer from "@/components/shared/contentContainer/ContentContainer";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import { getData } from "@/api/getData";


export default async function LiveThreads() {
  const data = await getData();
  
  return (
    <div className="text-[0.6rem] dark:border-slate-700 ">
      <ContentContainer>
        <LiveContainer logHeight="h-[44vh] max-2xl:h-[40vh]" title="Live Threads">
          <DataTable columns={columns} data={data} />
        </LiveContainer>
      </ContentContainer>
    </div>
  );
}
