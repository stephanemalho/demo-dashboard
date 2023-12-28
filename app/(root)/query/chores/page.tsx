"use client";
import { useState } from 'react';
import ContentContainer from "@/components/shared/contentContainer/ContentContainer";
import ChoresTables from "./ChoresTables";

interface ChoresDetails {
  level: string;
  processName: string;
  lastExecutionDate: string;
  duration: string;
  executor: string;
  fullLog: string;
  version: string | null;
}

export default function Page() {
  const [selectedRows, setSelectedRows] = useState<ChoresDetails[]>([]);

  const handleRowClick = (rowData: ChoresDetails) => {
    setSelectedRows((prevRows) => [...prevRows, rowData]);
  };

  return (
    <ContentContainer>
      <ChoresTables onRowClick={handleRowClick} selectedRows={selectedRows} />
    </ContentContainer>
  );
}
