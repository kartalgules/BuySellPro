import { useTranslation } from "react-i18next";
import { useFormDataContext } from "../context/FormContext";
import ExcelJS from "exceljs";

const ExportExcel = () => {
  const { formData } = useFormDataContext();
  const { t } = useTranslation();

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    const headers = [
      { header: t("Urun_Adi"), key: "productName", width: 50 },
      { header: t("adet"), key: "quantity", width: 10 },
      { header: t("birimGider"), key: "buyPrice", width: 20 },
      { header: t("ekstraGider"), key: "extraCost", width: 20 },
      { header: t("birimGider"), key: "cost", width: 20 },
      { header: t("birimSatış"), key: "sellPrice", width: 20 },
      { header: `${t("kâr")} %`, key: "profit", width: 20 },
      { header: `${t("kâr")} $`, key: "profitPrice", width: 20 },
      { header: t("kasa"), key: "case", width: 20 },
    ];

    for (let i = 1; i <= headers.length; i++) {
      worksheet.getColumn(i).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFFCC00" }
      };
    }
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

    worksheet.eachRow({ includeEmpty: false }, (row) => {
      row.eachCell({ includeEmpty: false }, (cell) => {
        if (
          cell.value &&
          typeof cell.value === "object" &&
          "key" in cell.value &&
          "profit" in cell.value
        ) {
          const { profit } = cell.value as { profit: number };
          const color: string = profit >= 20 ? "00FF00" : "FF0000";
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: color },
          };
        }
      });
    });

    headers.forEach((header, index) => {
      const col = worksheet.getColumn(index + 1);
      col.header = header.header;
      col.key = header.key;
      col.width = header.width;
      col.alignment = {
        vertical: "middle",
        horizontal: "center",
      };
    });
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
      {t("excel")}
    </button>
  );
};

export default ExportExcel;
