import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getData } from "@/api/getData";

export default async function LiveThreads() {
  const data = await getData();
  return <DataTable columns={columns} data={data} />;
}
