"use client";

import { DashboardLogEntry, columns } from "./columns";
import { getLogsData } from "@/api/dashboard/getDashboardData";
import React, { useEffect, useState } from "react";
import LoadingTable from "@/components/shared/Loading/LoadingTable";
import { DataTable } from "@/components/shared/tableThreads/data-table";


const LiveLogs = () => {
  const [data, setData] = useState<DashboardLogEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getLogsData();
      setData(result);
    };
    fetchData().catch(console.error);
  }, []);

  if (data.length === 0) return <LoadingTable />;

  return <DataTable columns={columns} data={data} />;
};

export default LiveLogs;
