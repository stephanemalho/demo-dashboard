import DummyDataTable from "./DummyDataTable";
import DummyDataTable1 from "./DummyDataTable1";

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
    component: DummyDataTable1,
    title: "Selected Process History",
    lastTable: true,
  },
];

export default processConfig;