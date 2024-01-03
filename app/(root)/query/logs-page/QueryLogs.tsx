"use client";
import React, { useEffect, useState } from "react";

import { getQueryLogData } from "@/api/getQueryLogData";
import { DataTable } from "@/components/shared/tableThreads/data-table";
import { QueryLogEntry, columns } from "./columns";
import LoadingTable from "@/components/shared/Loading/LoadingTable";

const QueryLogs = () => {
  const [data, setData] = useState<QueryLogEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getQueryLogData(); 
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

export default QueryLogs;