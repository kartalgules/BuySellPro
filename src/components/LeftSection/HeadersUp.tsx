import { FormEvent, FC, useState } from "react";
import { useFormDataContext } from "../../context/FormContext";
import Desc from "./HeadersUp/Desc";
import Input from "./HeadersUp/Input";

const HeadersUp: FC = () => {
  const { formData, setFormData } = useFormDataContext();
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [buyPrice, setBuyPrice] = useState<number | "">("");
  const [extraCost, setExtraCost] = useState<number | "">("");
  const [sellPrice, setSellPrice] = useState<number | "">("");

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
      className="flex flex-col items-center gap-1 h-4/12 lg:gap-3 lg:h-5/12 text-center lg:mb-5"
    >
      <div className="flex w-11/12 h-3/5 px-2">
        <div className="w-full h-full">
          <Desc htmlFor="productName">Ürün Adı</Desc>
          <Input
            id="productName"
            name="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex w-5/6 h-1/2 items-center">
        <div className="flex gap-3 m-auto h-full">
          <div className={inputStyle}>
            <Desc htmlFor="quantity">Adet</Desc>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value))}
            />
          </div>
          <div className={inputStyle}>
            <Desc htmlFor="buyPrice">Alış</Desc>
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
            <Desc htmlFor="extraCost">Ekstra</Desc>
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
            <Desc htmlFor="sellPrice">Satış</Desc>
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
              className="w-14 font-semibold rounded-md mb-0.5 h-3/6 text-xs text-white bg-green-500"
              type="submit"
            >
              EKLE
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default HeadersUp;
