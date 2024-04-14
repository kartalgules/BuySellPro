import { FormEvent } from "react";
import Desc from './Desc'
import İnput from './İnput'

interface Product {
    productName: string,
    quantity: number,
    buyPrice: number,
    extraPrice: number,
    sellPrice: number
}
const LeftSection = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="flex h-4/5 w-1/2 flex-col items-center">
            <form action="" onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3 items-center p-5">
                <div className="flex gap-5 w-full ">
                    <div className="w-5/6 text-center">
                        <Desc name="Ürün Adı" for="productName" />
                        <İnput name="productName" type="string" />
                    </div>
                    <div className="w-1/6">
                        <Desc name="Adet" for="quantity" />
                        <İnput name="quantity" type="number" />
                    </div>
                </div>
                <div className="flex gap-5 w-4/5 items-end h-3/5">
                    <div>
                        <Desc name="Alış Fiyatı" for="buyPrice" />
                        <İnput name="buyPrice" type="number" />
                    </div>
                    <div>
                        <Desc name="Ekstra Maaliyet" for="extraPrice" />
                        <İnput name="extraPrice" type="number" />
                    </div>
                    <div>
                        <Desc name="Satış Fiyatı" for="sellPrice" />
                        <İnput name="sellPrice" type="number" />
                    </div>
                    <button className="font-bold text-white bg-green-600 w-1/5 rounded-md h-3/5" type="submit">EKLE</button>
                </div>
            </form>
        </div>
    );
};

export default LeftSection;
