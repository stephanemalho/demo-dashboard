import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import React from "react";
import tableConfig, { TableConfig } from "../tableConfig";

const DashBoardTables = () => {
  return (
    <>
      {tableConfig.map((table: TableConfig) => (
        <LiveContainer
          key={table.id}
          logHeight="h-[44vh] max-2xl:h-[38vh]"
          title={table.title}
          label={table.title}
        >
          <table.component />
        </LiveContainer>
      ))}
    </>
  );
};

export default DashBoardTables;
