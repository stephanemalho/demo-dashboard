import * as XLSX from "xlsx";

interface RowData {
  [key: string]: string | number | boolean;
}

export function copyRowToExcel(rowData: RowData) {
  const ws = XLSX.utils.json_to_sheet([rowData]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

  // Créez un objet Blob pour télécharger le fichier Excel.
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);

  // Créez un lien de téléchargement et déclenchez le téléchargement.
  const a = document.createElement("a");
  a.href = url;
  a.download = "tableData.xlsx";
  a.click();
}

export function exportTableToExcel(data: RowData[]) {
  // Collect all data from the table
  const allData = data;

  // Convert the data to an Excel sheet
  const ws = XLSX.utils.json_to_sheet(allData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

  // Create a Blob object to download the Excel file
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);

  // Create a download link and trigger the download
  const a = document.createElement("a");
  a.href = url;
  a.download = "tableData.xlsx";
  a.click();
}
