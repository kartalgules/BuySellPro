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

  const inputStyle = "flex flex-col h-3/4 mx-auto justify-center w-2/4";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center h-2/6 text-center border-b-4"
    >
      <div className="flex w-11/12 h-1/3 px-2">
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

      <div className="flex w-5/6 h-1/2 mt-3 items-center">
        <div className="flex gap-7 m-auto h-full">
          <div className={inputStyle}>
            <Desc htmlFor="buyPrice">Alış</Desc>
            <Input
              id="buyPrice"
              name="buyPrice"
              type="number"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.valueAsNumber)}
            />
          </div>

          <div className={inputStyle}>
            <Desc htmlFor="extraCost">Ekstra</Desc>
            <Input
              id="extraCost"
              name="extraCost"
              type="number"
              value={extraCost}
              onChange={(e) => setExtraCost(e.target.valueAsNumber)}
            />
          </div>

          <div className={inputStyle}>
            <Desc htmlFor="quantity">Adet</Desc>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.valueAsNumber)}
            />
          </div>

          <div className={inputStyle}>
            <Desc htmlFor="sellPrice">Satış</Desc>
            <Input
              id="sellPrice"
              name="sellPrice"
              type="number"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.valueAsNumber)}
            />
          </div>

          <div className="flex w-max h-full items-center">
            <button
              className="w-14 mb-1 rounded-md h-2/5 text-xs py-1 bg-green-500"
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
