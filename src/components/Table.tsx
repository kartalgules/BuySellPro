import { useEffect } from "react";
import { useFormDataContext } from "../context/FormContext";
import { TiDeleteOutline } from "react-icons/ti";
import ExportExcel from "./ExportExcel";
import { useTranslation } from "react-i18next";

const Table: React.FC = () => {
  interface newData {
    buyPrice:number;
    extraCost:number;
    productName:string;
    quantity:number;
    sellPrice:number
  }
  const { formData, setFormData } = useFormDataContext();
  const { t } = useTranslation();

  const removeItem = (index: number) => {
    const newData = formData.filter((_, i) => i !== index);
    setFormData(newData);
    saveDataToLocalStorage(newData);
  };
  const saveDataToLocalStorage = (data: Array<newData>) => {
    localStorage.setItem("formData", JSON.stringify(data));
  };

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, [setFormData]);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <div className="flex flex-col justify-stretch w-11/12 xl:w-6/12 xl:m-5 h-full mt-3 mb-10 mx-auto rounded-md  overflow-y-auto md:mt-16">
      <div className="w-2/3 text-center mx-auto mb-5 ">
        <h1 className="font-semibold sm:text-sm md:text-xl py-1 border-b-4">
          {t("urun_listesi")}
        </h1>
      </div>
      <div className="flex w-full justify-end">
        <ExportExcel />
      </div>
      <table className="bg-slate-200">
        <thead>
          <tr className="text-xs lg:text-sm bg-slate-300">
            <th className="w-7/12 md:w-8/12 lg:w-6/12 sm:w-9/12">
              {t("Urun_Adi")}
            </th>
            <th className="w-min lg:w-1/12 hidden md:table-cell">
              {t("adet")}
            </th>
            <th className="w-1/12 hidden lg:table-cell">{t("birimGider")}</th>
            <th className="w-1/12 hidden 2xl:table-cell">{t("birimSatış")}</th>
            <th className="w-1/12">{t("kâr")} %</th>
            <th className="w-1/12">{t("kâr")} $</th>
            <th className="w-1/12">{t("kasa")}</th>
            <th className="w-1/12 text-red-500">{t("sil")}</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {formData.map((data, index) => (
            <tr key={index} className="font-semibold">
              <td>{truncateText(data.productName, 50)}</td>
              <td className="hidden md:table-cell">{data.quantity}</td>
              <td className="hidden lg:table-cell">
                {(data.buyPrice + data.extraCost)
                  .toFixed(2)
                  .replace(/\.00$/, "")}
                <span>$</span>
              </td>
              <td className="hidden 2xl:table-cell">
                {data.sellPrice.toFixed(2).replace(/\.00$/, "")}
                <span>$</span>
              </td> 
              <td
                className={
                  ((data.sellPrice - (data.buyPrice + data.extraCost)) /
                    (data.buyPrice + data.extraCost)) *
                    100 >
                  20
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                <span>%</span>
                {(
                  ((data.sellPrice - (data.buyPrice + data.extraCost)) /
                    (data.buyPrice + data.extraCost)) *
                  100
                )
                  .toFixed(2)
                  .replace(/\.00$/, "")}
              </td>
              <td>
                {(data.sellPrice - (data.buyPrice + data.extraCost))
                  .toFixed(2)
                  .replace(/\.00$/, "")}
                <span>$</span>
              </td>
              <td>
                {(data.quantity * data.sellPrice)
                  .toFixed(2)
                  .replace(/\.00$/, "")}
                <span>$</span>
              </td>
              <td>
                <button
                  className="text-2xl text-red-500"
                  onClick={() => removeItem(index)}
                >
                  <TiDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
