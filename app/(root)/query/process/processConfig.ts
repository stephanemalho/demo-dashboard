import DummyDataTable from "./DummyDataTable";

export interface ProcessConfig {
  id: string;
  component: any;
  title: string;
  lastTable: boolean;
}

const processConfig  = [
  {
    id: "process",
    component: DummyDataTable  ,  
    title: "Last Process Execution",
    lastTable: false,
  },
  {
    id: "process-history",
    component: DummyDataTable,
    title: "Selected Process History",
    lastTable: true,
  },
];

export default processConfig;