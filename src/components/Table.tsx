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
    <div className="w-1/2 my-20">
      <table className="w-full border-none rounded-md">
        <thead>
          <tr>
            <th>Ürün Adı</th>
            <th>Adet</th>
            <th>Maaliyet</th>
            <th>Satış Fiyatı</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.productName}</td>
              <td>{data.quantity}</td>
              <td>{data.buyPrice + data.extraCost} $</td>
              <td>{data.sellPrice} $</td>
              <button
                className="text-3xl text-red-600"
                onClick={() => removeItem(index)}
              >
                <TiDeleteOutline />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
