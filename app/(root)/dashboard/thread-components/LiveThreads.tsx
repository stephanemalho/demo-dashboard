"use client";
import LoadingTable from "../../../../components/shared/Loading/LoadingTable";
import { Threads, columns } from "./columns";
import { DataTable } from "../../../../components/shared/tables/data-table";
import { getDashboardData } from "@/api/dashboard/getDashboardData";
import React, { useEffect, useState } from "react";

const LiveThreads = () => {
  const [data, setData] = useState<Threads[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDashboardData();
      setData(result);
    };
    fetchData().catch(console.error);
  }, []);

  if (data.length === 0) return <LoadingTable />;

  return <DataTable columns={columns} data={data} />;
};

export default LiveThreads;
