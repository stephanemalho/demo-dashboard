"use client";
import React, { useEffect, useState } from "react";

import { DataTable } from "@/components/shared/tableThreads/data-table";

import LoadingTable from "@/components/shared/Loading/LoadingTable";
import { LiveDeliveryListEntry, columns } from "./columns";
import { getDeliveryListData } from "@/api/liveDelivery/getLiveDelivery";

const DeliveryList = () => {
  const [data, setData] = useState<LiveDeliveryListEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDeliveryListData(); 
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

export default DeliveryList;