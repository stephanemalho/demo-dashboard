"use client";
import React, { useEffect, useState } from "react";

import { DataTable } from "@/components/shared/tables/data-table";

import LoadingTable from "@/components/shared/Loading/LoadingTable";
import { VersioningRuleEntry, columns } from "./columns";
import { getVersioningRuleData } from "@/api/versioning/getVersioning";

const VersioningRule = () => {
  const [data, setData] = useState<VersioningRuleEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getVersioningRuleData();
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

export default VersioningRule;
