import { FC } from "react";
import { useFormDataContext } from "../../context/FormContext";

const HeadersDown: FC = () => {
  const { formData } = useFormDataContext();

  const totalCost =
    Array.isArray(formData) && formData.length > 0
      ? formData.reduce(
          (acc, curr) => acc + (curr.buyPrice + curr.extraCost) * curr.quantity,
          0
        )
      : 0;
  const totalProfit =
    Array.isArray(formData) && formData.length > 0
      ? formData.reduce(
          (acc, curr) =>
            acc +
            (curr.sellPrice - (curr.buyPrice + curr.extraCost)) * curr.quantity,
          0
        )
      : 0;
  const totalCash =
    Array.isArray(formData) && formData.length > 0
      ? formData.reduce((acc, curr) => acc + curr.sellPrice * curr.quantity, 0)
      : 0;
  const totalProfitmargin = Number((
    ((totalCash - totalCost) * 100) /
    totalCost
  ).toFixed(2));

  const style =
    "flex flex-col w-2/5 lg:w-1/4 xl:w-3/5 justify-center h-full border-slate-500 lg:border-l-2 border-x-2 rounded-md p-1 text-md md:text-lg xl:text-2xl";
  const sectionStyle =
    "flex lg:flex-col justify-center w-4/6 lg:w-6/12 h-2/3 gap-3 flex-row xl:items-center";

  return (
    <div className="w-full h-2/12 lg:m-5 flex flex-col lg:flex-row lg:h-6/12 py-5 lg:py-3 text-center gap-3 items-center font-bold">
      <div className={`${sectionStyle} items-end`}>
        <div className={style}>
          <h2>Gider</h2>
          <h1 className="text-red-600">{totalCost} $</h1>
        </div>

        <div className={style}>
          <h2>Kasa</h2>
          <h1 className="text-blue-700">{totalCash} $</h1>
        </div>
      </div>

      <div className={sectionStyle}>
        <div className={style}>
          <h2>Kâr</h2>
          <h1
            className={`${totalProfit <= 0 && "text-red-500"} ${totalProfit >= 0 && "text-amber-700"} ${totalProfit >= 20 && "text-green-500"}`}
          >
            {totalProfit} $
          </h1>
        </div>

        <div className={style}>
          <h2>Kâr Marjı</h2>
          <h1
            className={`${totalProfitmargin <= 0 && "text-red-500"} ${totalProfit >= 0 && "text-amber-700"} ${totalProfit >= 20 && "text-green-500"}`}
          >
            %{totalProfitmargin}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeadersDown;
