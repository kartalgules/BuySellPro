import { useEffect } from "react";
import { useFormDataContext } from "../context/FormContext";
import { TiDeleteOutline } from "react-icons/ti";

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
    data && setFormData(JSON.parse(data));
  }, []);

  return (
    <div className="w-11/12 h-7/12 mb-10 mx-auto rounded-md overflow-y-auto">
      <table className="bg-slate-200">
        <thead>
          <tr className="text-xs lg:text-sm bg-slate-300">
            <th className="w-8/12">Ürün Adı</th>
            <th className="w-1/12 hidden md:table-cell">Adet</th>
            <th className="w-1/12 hidden lg:table-cell">Birim Gider</th>
            <th className="w-1/12 hidden 2xl:table-cell">Birim Satış</th>
            <th className="w-1/12">Kâr %</th>
            <th className="w-1/12">Kâr $</th>
            <th className="w-1/12">Ciro</th>
            <th className="w-1/12 text-red-500">Sil</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {formData.map((data, index) => (
            <tr key={index} className="font-normal">
              <td>{data.productName}</td>
              <td className="hidden md:table-cell">{data.quantity}</td>
              <td className="hidden lg:table-cell">
                {data.buyPrice + data.extraCost}$
              </td>
              <td className="hidden 2xl:table-cell">{data.sellPrice}$</td>
              <td
                className={
                  ((data.sellPrice - (data.buyPrice + data.extraCost)) * 100) /
                    (data.buyPrice + data.extraCost) >
                  20
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                %
                {(
                  ((data.sellPrice - (data.buyPrice + data.extraCost)) * 100) /
                  (data.buyPrice + data.extraCost)
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
