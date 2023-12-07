import DummyChoresTable from "./DummyChoresTable";
import DummyChoresTable1 from "./DummyChoresTable1";

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
    component: DummyChoresTable1,
    title: "Selected Chores History",
    lastTable: false,
  },
  {
    id: "chores-related-process",
    component: DummyChoresTable1,
    title: "Selected Chores Related Process",
    lastTable: true,
  },
];

export default choresConfig;