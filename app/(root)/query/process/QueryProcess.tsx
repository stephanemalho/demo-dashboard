"use client";
import React, { useEffect, useState } from "react";

import { getQueryProcessData } from "@/api/query/getQuery";
import { DataTable } from "@/components/shared/tableThreads/data-table";
import { QueryProcessEntry, columns } from "./columns";
import LoadingTable from "@/components/shared/Loading/LoadingTable";

const QueryProcess = () => {
  const [data, setData] = useState<QueryProcessEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getQueryProcessData(); 
      setData(result);
    };

    fetchData().catch(console.error);
  }, []);

  // Si les données ne sont pas encore chargées, affichez un indicateur de chargement
  if (data.length === 0) {
    return <LoadingTable />;
  }

  return <DataTable columns={columns} data={data} />;
};

export default QueryProcess;

