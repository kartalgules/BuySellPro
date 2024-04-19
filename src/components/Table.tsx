import React from 'react';
import { useFormDataContext } from '../context/FormContext';

const Table: React.FC = () => {
  const { formData } = useFormDataContext();

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Ürün Adı</th>
          <th>Adet</th>
          <th>Alış Fiyatı</th>
          <th>Ekstra Maaliyet</th>
          <th>Satış Fiyatı</th>
        </tr>
      </thead>
      <tbody>
        {formData.map((data, index) => (
          <tr key={index}>
            <td>{data.productName}</td>
            <td>{data.quantity}</td>
            <td>{data.buyPrice}</td>
            <td>{data.extraCost}</td>
            <td>{data.sellPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;