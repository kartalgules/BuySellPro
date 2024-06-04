import { FormEvent, FC, useState } from "react";
import { useFormDataContext } from "../../context/FormContext";
import Desc from "./HeadersUp/Desc";
import Input from "./HeadersUp/Input";
import { useTranslation } from "react-i18next";

const HeadersUp: FC = () => {
  const { formData, setFormData } = useFormDataContext();
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [buyPrice, setBuyPrice] = useState<number | "">("");
  const [extraCost, setExtraCost] = useState<number | "">("");
  const [sellPrice, setSellPrice] = useState<number | "">("");
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !productName ||
      quantity === "" ||
      buyPrice === "" ||
      extraCost === "" ||
      sellPrice === ""
    ) {
      alert("Lütfen tüm alanları doldurun");
      return;
    }

    const newFormData = {
      productName,
      quantity: Number(quantity),
      buyPrice: Number(buyPrice),
      extraCost: Number(extraCost),
      sellPrice: Number(sellPrice),
    };
    setFormData([...formData, newFormData]);
    localStorage.setItem(
      "formData",
      JSON.stringify([...formData, newFormData])
    );
    setProductName("");
    setQuantity("");
    setBuyPrice("");
    setExtraCost("");
    setSellPrice("");
  };

  const inputStyle = "flex flex-col h-full mx-auto justify-center w-3/4";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-1 lg:gap-2 lg:h-1/2 h-2/6 text-center">
      <div className="flex w-11/12 h-2/4 px-2">
        <div className="w-full h-full">
          <div className={inputStyle}>
          <Desc htmlFor="productName">{t('Urun_Adi')}</Desc>
          <Input
            id="productName"
            name="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          </div>
        </div>
      </div>

      <div className="flex w-11/12 h-2/4 px-2">
        <div className="flex gap-3 m-auto h-full">
          <div className={inputStyle}>
            <Desc htmlFor="quantity">{t('adet')}</Desc>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value))}
            />
          </div>
          <div className={inputStyle}>
            <Desc htmlFor="buyPrice">{t('alış')}</Desc>
            <Input
              id="buyPrice"
              name="buyPrice"
              step="0.01"
              type="number"
              value={buyPrice}
              onChange={(e) => setBuyPrice(parseFloat(e.target.value))}
            />
          </div>

          <div className={inputStyle}>
            <Desc htmlFor="extraCost">{t('ekstraGider')}</Desc>
            <Input
              id="extraCost"
              name="extraCost"
              step="0.01"
              type="number"
              value={extraCost}
              onChange={(e) => setExtraCost(parseFloat(e.target.value))}
            />
          </div>

          <div className={inputStyle}>
            <Desc htmlFor="sellPrice">{t('birimSatış')}</Desc>
            <Input
              id="sellPrice"
              name="sellPrice"
              step="0.01"
              type="number"
              value={sellPrice}
              onChange={(e) => setSellPrice(parseFloat(e.target.value))}
            />
          </div>

          <div className="flex w-max h-full items-end">
            <button
              className="w-14 font-semibold rounded-md mb-1 h-3/6 text-xs text-white bg-green-500"
              type="submit"
            >
              {t('ekle')}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default HeadersUp;
