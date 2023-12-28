import React from "react";
import ChoresDataTable from "./ChoresDataTable";
import DummyChoresTable from "./DummyChoresTable";

export interface ChoresConfig {
  id: string;
  renderComponent: (props: any) => React.JSX.Element;
  title: string;
  lastTable: boolean;
}

const choresConfig: ChoresConfig[] = [
  {
    id: "chores",
    renderComponent: (props) => <ChoresDataTable {...props} />,  
    title: "Last Chores Execution",
    lastTable: false,
  },
  {
    id: "chores-history",
    renderComponent: (props) => <DummyChoresTable data={props.selectedRows} />,
    title: "Selected Chores History",
    lastTable: true,
  },
];

export default choresConfig;

