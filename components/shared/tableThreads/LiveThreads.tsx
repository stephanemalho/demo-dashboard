"use client";
import { Threads, columns } from "./columns";
import { DataTable } from "./data-table";
import { getData } from "@/api/getData";
import React, { useEffect, useState } from "react";

const LiveThreads = () => {
  const [data, setData] = useState<Threads[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(); // Utilisez getDummyData pour charger les données
      setData(result);
    };
    fetchData().catch(console.error);
  }, []);

  // Si les données ne sont pas encore chargées, affichez un indicateur de chargement
  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  // Passez les données et les colonnes à DataTable
  return <DataTable columns={columns} data={data} />;
};

export default LiveThreads;