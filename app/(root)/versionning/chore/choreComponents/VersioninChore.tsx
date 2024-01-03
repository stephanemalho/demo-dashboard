"use client";
import React, { useEffect, useState } from "react";

import { DataTable } from "@/components/shared/tableThreads/data-table";

import LoadingTable from "@/components/shared/Loading/LoadingTable";
import { VersioningChoreEntry, columns } from "./columns";
import { getVersioningChoreData } from "@/api/versioning/getVersioning";

const VersioningChore = () => {
  const [data, setData] = useState<VersioningChoreEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getVersioningChoreData(); 
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

export default VersioningChore;