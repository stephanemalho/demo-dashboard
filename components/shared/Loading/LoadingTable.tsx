import LoadingTableHead from "./LoadingTable/LoadingTableHead";
import LoadingTableRow from "./LoadingTable/LoadingTableRow";

export default function LoadingTable() {
  const tableRows = Array.from({ length: 30 }, (_, index) => (
    <LoadingTableRow key={index} />
  ));
  return (
    <div className="animate-pulse">
      <table className="w-full table-fixed text-left">
        <LoadingTableHead />  
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}
