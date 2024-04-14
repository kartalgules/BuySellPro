import React from "react";

const Table = () => {
  return (
    <div className="w-1/2 h-full flex justify-center items-center">
      <div className="w-5/6 h-5/6">
        <table className="border-2 border-gray-400 w-full border-collapse">
          <tr>
            <th>ÜRÜN</th>
            <th>ADET</th>
            <th>FİYAT</th>
            <th>KÂR</th>
          </tr>
          {<tr>
            <td>Ürün Adı</td>
            <td>10</td>
            <td>200 TL</td>
            <td>%10</td>
          </tr>}
        </table>
      </div>
    </div>
  )
};

export default Table;
