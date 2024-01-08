"use client";
import React, { useEffect, useState } from "react";

import { getQueryChoresData } from "@/api/query/getQuery";
import { DataTable } from "@/components/shared/tables/data-table";
import { QueryChoresEntry, columns } from "./columns";
import LoadingTable from "@/components/shared/Loading/LoadingTable";
import { useChores } from "@/context/ChoresContext";

const ChoresDataTable = () => {  // { handleRowClick }
  const [data, setData] = useState<QueryChoresEntry[]>([]);
  const { handleRowClick } = useChores();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getQueryChoresData(); 
      setData(result);
    };

    fetchData().catch(console.error);
  }, []);

  // Si les données ne sont pas encore chargées, affichez un indicateur de chargement
  if (data.length === 0) {
    return <LoadingTable />;
  }

  return <DataTable columns={columns} data={data}  onRowClick={handleRowClick}/>;
};

export default ChoresDataTable;