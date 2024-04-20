import { FC } from "react";
import { useFormDataContext } from "../../context/FormContext";

const HeadersDown: FC = () => {
  const { formData } = useFormDataContext();

  console.log(formData);
  const totalCost =
    Array.isArray(formData) && formData.length > 0
      ? formData.reduce((acc, curr) => acc + curr.buyPrice + curr.extraCost, 0)
      : 0;
  const totalProfit =
    Array.isArray(formData) && formData.length > 0
      ? formData.reduce(
          (acc, curr) =>
            acc + (curr.sellPrice - curr.buyPrice - curr.extraCost),
          0
        )
      : 0;
  const totalRevenue =
    Array.isArray(formData) && formData.length > 0
      ? formData.reduce((acc, curr) => acc + curr.sellPrice, 0)
      : 0;
  const totalProfitmargin = Array.isArray(formData) && formData.length > 0
  ? ((totalRevenue - totalCost) / totalRevenue) * 100 : 0;

  return (
    <div className="h-full w-full flex justify-center text-center py-10">
      <div className="w-2/4 h-3/5 flex flex-col gap-5 items-center font-bold">
        <div className="flex flex-col w-1/2 justify-center h-full border-slate-500 border-x-2 rounded-md">
          <h2>Gider</h2>
          <h1 className="text-2xl text-red-700">{totalCost} $</h1>
        </div>
        <div className="flex w-full gap-5">
          <div className="flex flex-col w-1/2 justify-center h-full border-slate-500 border-l-2 rounded-md">
            <h2>Kâr</h2>
            <h1 className="text-2xl text-green-700">{totalProfit} $</h1>
          </div>
          <div className="flex flex-col w-1/2 justify-center h-full border-slate-500 border-r-2 rounded-md">
            <h2>Kâr Marjı</h2>
            <h1 className="text-2xl text-green-700">%{totalProfitmargin}</h1>
          </div>
        </div>
        <div className="flex flex-col w-1/2 justify-center h-full border-slate-500 border-x-2 rounded-md">
          <h2>Ciro</h2>
          <h1 className="text-2xl text-blue-700">{totalRevenue} $</h1>
        </div>
      </div>
    </div>
  );
};

export default HeadersDown;
