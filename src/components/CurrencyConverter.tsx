import { t } from "i18next";
import { useEffect, useState } from "react";
import change from "../../public/icons/change.png"

interface CurrencyData {
  [key: string]: {
    Buying: string;
    Selling: string;
  }
}

const CurrencyConverter = () => {
  const [data, setData] = useState<CurrencyData | null>(null);
  const [input, setInput] = useState<number | null>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://finans.truncgil.com/v4/today.json');
        const { USD } = await response.json();
        setData(USD);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
    fetchData();
  }, []);

  const Selling = Number(Number(data?.Selling).toFixed(2))
  const formatNumber = (number : number) => {
    return number % 1 === 0
      ? new Intl.NumberFormat('tr-TR').format(number)
      : new Intl.NumberFormat('tr-TR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(number);
  };
  const formattedNumber = formatNumber((input ? input : 0) * Selling);
  
  return (
    <div className="flex flex-col w-full m-auto text-center gap-6 py-4 font-semibold border-b-4">

      <div className="w-1/2 pb-1 m-auto font-semibold sm:text-sm md:text-xl border-b-4">
        <h1>{t("cevirici")}</h1>
      </div>

      <div className="h-1/3 px-3 w-full gap-1 flex justify-center items-center">

        <div className="w-full">
          <input type="number" className="text-xs h-10 rounded-md text-center w-3/5 md:w-5/6 px-2 mr-1 bg-slate-200" placeholder={t("kurİnput")} onChange={(e) => setInput(parseFloat(e.target.value))} />
 
          <select className="text-md text-center md:text-xl items-end">
            <option value="USD">$</option>
            <option value="TL">TL</option>
          </select>
        </div>

        <img className="w-5 xl:w-6" src={change} alt="change-currency" />

        <h1 className="w-2/5 text-md md:text-xl text-green-500">{formattedNumber} TL</h1>

      </div>

      <div>
        {data && (<h1 className="text-md md:text-xl">USD = {Selling} TL</h1>)}
      </div>

    </div>
  );
};

export default CurrencyConverter;