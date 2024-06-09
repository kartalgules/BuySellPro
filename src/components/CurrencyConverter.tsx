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
  const [currency, setCurrency] = useState<string>("USD");

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
  const formatNumber = (number: number) => {
    return number % 1 === 0
      ? new Intl.NumberFormat('tr-TR').format(number)
      : new Intl.NumberFormat('tr-TR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(number);
  };

  const calculateConversion = () => {
    if (!input) return 0;

    if (currency === "USD") {
      return formatNumber(input * Selling);
    } else {
      return formatNumber(input / Selling);
    }
  };

  const formattedNumber = calculateConversion();

  return (
    <div className="flex flex-col w-full m-auto text-center gap-6 py-4 font-semibold border-b-4">

      <div className="w-1/2 pb-1 m-auto font-semibold sm:text-sm md:text-xl border-b-4">
        <h1>{t("cevirici")}</h1>
      </div>

      <div className="h-1/3 px-3 w-full gap-1 flex justify-center items-center">

        <div className="flex w-6/12 h-9 justify-center">
          <input
            type="number"
            className="text-xs md:text-sm h-full rounded-md text-center w-3/5 md:w-5/6 px-2 mr-1 bg-slate-200"
            placeholder={t("kurİnput")}
            onChange={(e) => setInput(parseFloat(e.target.value))}
          />

          <select
            className="h-full items-center bg-slate-200 rounded-lg text-sm text-center md:text-xl"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">$</option>
            <option value="TL">TL</option>
          </select>
        </div>

        <img className="w-5 xl:w-6" src={change} alt="change-currency" />

        <h1 className="w-2/5 text-md md:text-xl text-green-500">
          {currency === "USD" ? `${formattedNumber} TL` : `${formattedNumber} $`}
        </h1>

      </div>

      <div>
        {data && (<h1 className="text-md md:text-xl">USD = {Selling} TL</h1>)}
      </div>

    </div>
  );
};

export default CurrencyConverter;