import { useFormDataContext } from "../context/FormContext";
import ExcelJS from "exceljs";

const ExportExcel = () => {
  const { formData } = useFormDataContext();

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    const headers = [
      { header: "Ürün Adı", key: "productName", width: 50 },
      { header: "Adet", key: "quantity", width: 10 },
      { header: "Alış", key: "buyPrice", width: 20 },
      { header: "Ekstra Gider", key: "extraCost", width: 20 },
      { header: "Gider", key: "cost", width: 20 },
      { header: "Birim Satış", key: "sellPrice", width: 20 },
      { header: "Kâr %", key: "profit", width: 20 },
      { header: "Kâr $", key: "profitPrice", width: 20 },
      { header: "Kasa", key: "case", width: 20 },
    ];
    worksheet.getRow(1).font = { bold: true };
    worksheet.eachRow({ includeEmpty: true }, (row, _rowNumber) => {
      row.alignment = {
        vertical: "middle",
        horizontal: "center",
      };
    });
    headers.forEach((_header, index) => {
      const col = worksheet.getColumn(index + 1);
      col.alignment = {
        vertical: "middle",
        horizontal: "center",
      };
    });
    worksheet.columns = headers;
    for (let i = 1; i <= Math.min(headers.length, 16384); i++) {
      worksheet.getColumn(i).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFFCC00" },
      };
    }
    worksheet.eachRow({ includeEmpty: false }, (row) => {
      row.eachCell({ includeEmpty: false }, (cell) => {
        if (
          cell.value &&
          typeof cell.value === "object" &&
          "key" in cell.value &&
          "profit" in cell.value
        ) {
          const { profit } = cell.value as { profit: number };
          const color: string = profit >= 20 ? "00FF00" : "FF0000"; // Yeşil veya kırmızı
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: color },
          };
        }
      });
    });

    worksheet.columns = headers;
    worksheet.addRows(
      formData.map((data, index) => ({
        id: index,
        productName: data.productName,
        quantity: data.quantity,
        buyPrice: `${data.buyPrice} $`,
        extraCost: `${data.extraCost} $`,
        cost: `${data.buyPrice + data.extraCost} $`,
        sellPrice: `${data.sellPrice} $`,
        profit: `%${(
          ((data.sellPrice - (data.buyPrice + data.extraCost)) /
            (data.buyPrice + data.extraCost)) *
          100
        ).toFixed(2)}`,
        profitPrice: `${data.sellPrice - (data.buyPrice + data.extraCost)} $`,
        case: `${data.quantity * data.sellPrice} $`,
      }))
    );

    worksheet.eachRow({ includeEmpty: false }, (row) => {
      row.eachCell({ includeEmpty: false }, (cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });
    headers.forEach((_header, index) => {
      const col = worksheet.getColumn(index + 1);
      col.eachCell({ includeEmpty: false }, (cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });

    // Dosyayı indirin
    await workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      a.download = "data.xlsx";
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });
  };
  return (
    <button
      className="bg-slate-300 mb-3 w-36 h-8 rounded-md text-sm"
      onClick={exportToExcel}
    >
      Excel'e Aktar
    </button>
  );
};

export default ExportExcel;
