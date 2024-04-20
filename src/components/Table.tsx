import { useEffect } from "react";
import { useFormDataContext } from "../context/FormContext";

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
    <table className="w-full">
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
            <td>
              <button onClick={() => removeItem(index)}>Çıkar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
