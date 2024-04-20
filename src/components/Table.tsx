import { useEffect } from "react";
import { useFormDataContext } from "../context/FormContext";
import { MdCancel } from "react-icons/md";

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
    <div className="w-3/5 mx-10 my-10">
      <table className="w-full">
        <thead>
          <tr className="text-sm text-slate-500">
            <th className="w-6/12">Ürün Adı</th>
            <th className="w-1/12">Adet</th>
            <th className="w-1/12">Birim Gider</th>
            <th className="w-1/12">Birim Satış</th>
            <th className="w-1/12">Kâr %</th>
            <th className="w-1/12">Kâr $</th>
            <th className="w-1/12">Ciro</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {formData.map((data, index) => (
            <tr key={index} className="font-semibold">
              <td>{data.productName}</td>
              <td>{data.quantity}</td>
              <td>{data.buyPrice + data.extraCost}$</td>
              <td>{data.sellPrice}$</td>
              <td>
                %
                {((data.sellPrice - (data.buyPrice + data.extraCost)) /
                  data.sellPrice) *
                  100}
              </td>
              <td>{data.sellPrice - (data.buyPrice + data.extraCost)}$</td>
              <td>{data.quantity * data.sellPrice}$</td>
                <button
                  className="text-3xl text-red-600 mx-2"
                  onClick={() => removeItem(index)}
                >
                  <MdCancel />
                </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
