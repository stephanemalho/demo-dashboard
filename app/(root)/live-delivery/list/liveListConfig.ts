import ListTable from "./ListTable";

export interface LiveListConfig {
  id: string;
  component: any;
  title: string;
  lastTable: boolean;
}

const liveListConfig  = [
  {
    id: "liveListTable",
    component: ListTable ,  
    title: "Basic Datatable",
    lastTable: false,
  },
];

export default liveListConfig;