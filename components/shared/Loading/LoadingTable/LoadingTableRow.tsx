import React from "react";
import LoadingTableData from "./LoadingTableData";

const LoadingTableRow = () => {
  const tableDatas = Array.from({ length: 4 }, (_, index) => (
    <LoadingTableData key={index} />
  ));
  return (
    <tr>
      {tableDatas}
    </tr>
  );
};

export default LoadingTableRow;
