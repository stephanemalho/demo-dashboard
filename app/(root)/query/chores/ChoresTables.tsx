import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import React from "react";
import choresConfig from "./choresConfig";

interface ChoresTablesProps {
  onRowClick: (rowData: any) => void;
  selectedRows: any;
}

const ChoresTables = ({ onRowClick, selectedRows }: ChoresTablesProps) => {
  return (
    <>
      {choresConfig.map((process) => (
        <LiveContainer
          key={process.id}
          logHeight="h-[44vh] max-2xl:h-[38vh]"
          title={process.title}
          label={process.title}
        >
          {process.renderComponent({ onRowClick, selectedRows })}
        </LiveContainer>
      ))}
    </>
  );
};

export default ChoresTables;
