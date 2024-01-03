"use client";
import { QuerySelectedChore, selectedColumns } from "./columns";
import { DataTable } from "@/components/shared/tableThreads/data-table";

interface SelectedChoresTableProps {
  data: QuerySelectedChore[]; 
}

const SelectedChoresTable = ({ data }: SelectedChoresTableProps) => {
  if (!data || data.length === 0) return ( <div className="w-full p-2">Sélectionnez une ligne pour voir les détails</div>);

  return <DataTable data={data} columns={selectedColumns} />;
};

export default SelectedChoresTable;
