import DummyChoresTable from "./DummyChoresTable";

export interface ChoresConfig {
  id: string;
  component: any;
  title: string;
  lastTable: boolean;
}

const choresConfig  = [
  {
    id: "chores",
    component: DummyChoresTable ,  
    title: "Last Chores Execution",
    lastTable: false,
  },
  {
    id: "chores-history",
    component: DummyChoresTable,
    title: "Selected Chores History",
    lastTable: false,
  },
  {
    id: "chores-related-process",
    component: DummyChoresTable,
    title: "Selected Chores Related Process",
    lastTable: true,
  },
];

export default choresConfig;