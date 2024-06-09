import { useTranslation } from "react-i18next";
import { useFormDataContext } from "../context/FormContext";
import ExcelJS from "exceljs";

interface FormData {
  productName: string;
  quantity: number;
  buyPrice: number;
  extraCost: number;
  sellPrice: number;
}

const ExportExcel = () => {
  const { formData } = useFormDataContext();
  const { t } = useTranslation();

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    const headers = [
      { header: t("Urun_Adi"), key: "productName", width: 20 },
      { header: t("adet"), key: "quantity", width: 10 },
      { header: t("birimGider"), key: "cost", width: 15 },
      { header: t("birimSatış"), key: "sellPrice", width: 15 },
      { header: `${t("kâr")} %`, key: "profit", width: 15 },
      { header: `${t("kâr")} $`, key: "profitPrice", width: 15 },
      { header: t("kasa"), key: "case", width: 15 },
    ];

    worksheet.columns = headers as Partial<ExcelJS.Column>[];
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).eachCell({ includeEmpty: true }, (cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFFCC00" },
      };
      cell.alignment = {
        vertical: "middle",
        horizontal: "center",
      };
    });

    worksheet.addRows(
      formData.map((data: FormData) => {
        const buyPrice = parseFloat(data.buyPrice.toFixed(2));
        const extraCost = parseFloat(data.extraCost.toFixed(2));
        const cost = parseFloat((buyPrice + extraCost).toFixed(2));
        const sellPrice = parseFloat(data.sellPrice.toFixed(2));
        const profit = parseFloat((((sellPrice - cost) / cost) * 100).toFixed(2));
        const profitPrice = parseFloat((sellPrice - cost).toFixed(2));
        const caseValue = parseFloat((data.quantity * sellPrice).toFixed(2));

        return {
          productName: data.productName,
          quantity: data.quantity,
          cost: `$${cost}`,
          sellPrice: `$${sellPrice}`,
          profit: profit,
          profitPrice: `$${profitPrice}`,
          case: `$${caseValue}`,
        };
      })
    );

    worksheet.eachRow({ includeEmpty: false }, (row) => {
      row.eachCell({ includeEmpty: false }, (cell, colNumber) => {
        cell.alignment = {
          vertical: "middle",
          horizontal: "center",
        };
        if (colNumber === 2) {
          cell.numFmt = '0';
        } else if (colNumber > 1 && colNumber !== 5) {
          cell.numFmt = '$#,##0.00';
        }
        if (colNumber === 5 && row.number > 1) {
          const profitValue = parseFloat(cell.value as string);
          if (profitValue < 0) {
            cell.font = { color: { argb: 'FFFF0000' } };
          } else if (profitValue < 15) {
            cell.font = { color: { argb: 'FFFFFF00' } };
          } else {
            cell.font = { color: { argb: 'FF65A30D'} };
          }
          cell.value = `${profitValue.toFixed(2)}%`;
        }
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
      className="bg-slate-300 mb-3 w-36 h-8 rounded-md text-xs"
      onClick={exportToExcel}
    >
      {t("excel")}
    </button>
  );
};

export default ExportExcel;
