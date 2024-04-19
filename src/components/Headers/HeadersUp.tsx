import { FormEvent, FC, useState } from "react";
import { useFormDataContext } from "../../context/FormContext";
import Desc from "./HeadersUp/Desc";
import Input from "./HeadersUp/Input";

const HeadersUp: FC = () => {
  const { formData, setFormData } = useFormDataContext();
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [buyPrice, setBuyPrice] = useState<number | ''>('');
  const [extraCost, setExtraCost] = useState<number | ''>('');
  const [sellPrice, setSellPrice] = useState<number | ''>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!productName || quantity === '' || buyPrice === '' || extraCost === '' || sellPrice === '') {
      alert('Lütfen tüm alanları doldurun');
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
    setProductName('');
    setQuantity('');
    setBuyPrice('');
    setExtraCost('');
    setSellPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center p-5 h-2/5 text-center">
      <div className="flex gap-5 w-11/12 h-2/4">
        <div className="w-5/6">
          <Desc htmlFor="productName">Ürün Adı</Desc>
          <Input
            id="productName"
            name="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="w-1/6">
          <Desc htmlFor="quantity">Adet</Desc>
          <Input
            id="quantity"
            name="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.valueAsNumber)}
          />
        </div>
      </div>

      <div className="flex gap-5 w-4/5 h-3/6 justify-between">
        <div className="w-1/2">
          <Desc htmlFor="buyPrice">Alış Fiyatı</Desc>
          <Input
            id="buyPrice"
            name="buyPrice"
            type="number"
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.valueAsNumber)}
          />
        </div>
        <div className="w-1/2">
          <Desc htmlFor="extraCost">Ekstra Maaliyet</Desc>
          <Input
            id="extraCost"
            name="extraCost"
            type="number"
            value={extraCost}
            onChange={(e) => setExtraCost(e.target.valueAsNumber)}
          />
        </div>
        <div className="w-1/2">
          <Desc htmlFor="sellPrice">Satış Fiyatı</Desc>
          <Input
            id="sellPrice"
            name="sellPrice"
            type="number"
            value={sellPrice}
            onChange={(e) => setSellPrice(e.target.valueAsNumber)}
          />
        </div>
        <button
          className="font-bold text-white bg-green-600 w-1/2 rounded-md m-auto h-2/5"
          type="submit"
        >
          EKLE
        </button>
      </div>
    </form>
  );
};

export default HeadersUp;
