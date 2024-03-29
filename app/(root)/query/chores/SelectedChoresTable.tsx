"use client";
import { SelectedChoresTableProps } from "@/types";
import { selectedColumns } from "./columns";
import { DataTable } from "@/components/shared/tables/data-table";



const SelectedChoresTable = ({ data }: SelectedChoresTableProps) => {
  if (!data || data.length === 0)
    return (
      <div className="w-full p-2">
        Sélectionnez une ligne pour voir les détails
      </div>
    );

  return <DataTable data={data} columns={selectedColumns} />;
};

export default SelectedChoresTable;
