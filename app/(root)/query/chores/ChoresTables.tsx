import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import React from "react";
import choresConfig from "./choresConfig";
import { useChores } from "@/context/ChoresContext";


const ChoresTables = () => {
  const { selectedRows, handleRowClick } = useChores();

  return (
    <>
      {choresConfig.map((process) => (
        <LiveContainer
          key={process.id}
          logHeight="h-[44vh] max-2xl:h-[38vh]"
          title={process.title}
          label={process.title}
        >
          {process.renderComponent({ handleRowClick, selectedRows })}
        </LiveContainer>
      ))}
    </>
  );
};

export default ChoresTables;
