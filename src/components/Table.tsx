import { useEffect } from "react";
import { useFormDataContext } from "../context/FormContext";
import { TiDeleteOutline } from "react-icons/ti";
import ExportExcel from "./ExportExcel";

const Table: React.FC = () => {
  const { formData, setFormData } = useFormDataContext();

  const removeItem = (index: number) => {
    const newData = formData.filter((_, i) => i !== index);
    setFormData(newData);
    saveDataToLocalStorage(newData);
  };

  const saveDataToLocalStorage = (data: any) => {
    localStorage.setItem("formData", JSON.stringify(data));
  };

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  
  return (
    <div className="flex flex-col justify-stretch w-11/12 xl:w-8/12 xl:m-5 h-7/12 mb-10 mx-auto rounded-md overflow-y-auto ">
      <div className="w-4/5 h-1/12 pt-3 pb-3 text-center mx-auto">
        <h1 className="font-semibold sm:text-sm md:text-md lg:text-xl p-2 border-b-4">
          ÜRÜN LİSTESİ
        </h1>
      </div>
      <div className="flex w-full justify-end">
        <ExportExcel />
      </div>
      <table className="bg-slate-200">
        <thead>
          <tr className="text-xs lg:text-sm bg-slate-300">
            <th className="w-7/12 md:8/12 sm:9/12">Ürün Adı</th>
            <th className="w-min hidden md:table-cell">Adet</th>
            <th className="w-1/12 hidden lg:table-cell">Birim Gider</th>
            <th className="w-1/12 hidden 2xl:table-cell">Birim Satış</th>
            <th className="w-1/12">Kâr %</th>
            <th className="w-1/12">Kâr $</th>
            <th className="w-1/12">Kasa</th>
            <th className="w-min text-red-500">Sil</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {formData.map((data, index) => (
            <tr key={index} className="font-semibold">
              <td>{truncateText(data.productName, 50)}</td>
              <td className="hidden md:table-cell">{data.quantity}</td>
              <td className="hidden lg:table-cell">
                {data.buyPrice + data.extraCost}$
              </td>
              <td className="hidden 2xl:table-cell">{data.sellPrice}$</td>
              <td
                className={
                  (((data.sellPrice - (data.buyPrice + data.extraCost)) /
                    (data.buyPrice + data.extraCost)) *
                    100) >
                  20
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                %
                {(
                  ((data.sellPrice - (data.buyPrice + data.extraCost)) /
                    (data.buyPrice + data.extraCost)) *
                  100
                ).toFixed(2)}
              </td>
              <td>{data.sellPrice - (data.buyPrice + data.extraCost)}$</td>
              <td>{data.quantity * data.sellPrice}$</td>
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
