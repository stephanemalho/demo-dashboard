import { columns } from "./columns";
import { DataTable } from "./data-table";
import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import { getData } from "@/api/getData";

export default async function LiveThreads() {
  const data = await getData();

  return (
    <LiveContainer
      logHeight="h-[44vh] max-2xl:h-[40vh]"
      title="Live Threads"
      label="Live Threads"
    >
      <DataTable columns={columns} data={data} />
    </LiveContainer>
  );
}
