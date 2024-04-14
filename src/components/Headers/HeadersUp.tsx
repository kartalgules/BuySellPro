import { FormEvent, FC } from "react";
import Desc from "./HeadersUp/Desc";
import İnput from "./HeadersUp/İnput";

const HeadersUp: FC = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <form
            action=""
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-3 items-center p-5 h-2/5 text-center"
        >
            <div className="flex gap-5 w-11/12 h-2/4">
                <div className="w-5/6">
                    <Desc name="Ürün Adı" for="productName" />
                    <İnput name="productName" type="string" />
                </div>
                <div className="w-1/6">
                    <Desc name="Adet" for="quantity" />
                    <İnput name="quantity" type="number" />
                </div>
            </div>


            <div className="flex gap-5 w-4/5 h-3/6 justify-between">
                <div className="w-1/2">
                    <Desc name="Alış Fiyatı" for="buyPrice" />
                    <İnput name="buyPrice" type="number" />
                </div>
                <div className="w-1/2">
                    <Desc name="Ekstra Maaliyet" for="extraPrice" />
                    <İnput name="extraPrice" type="number" />
                </div>
                <div className="w-1/2">
                    <Desc name="Satış Fiyatı" for="sellPrice" />
                    <İnput name="sellPrice" type="number" />
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
