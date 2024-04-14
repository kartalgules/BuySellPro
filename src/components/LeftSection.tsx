import React from "react";
import Desc from './Desc'
import İnput from './İnput'

const LeftSection = () => {
  return (
    <div className="flex h-4/5 w-1/2 flex-col items-center">
        <form action="" className="flex flex-col gap-3 items-center p-5">
            <div className="flex gap-5 w-full ">
                <div className="w-5/6 text-center">
                    <Desc name="Ürün Adı"/>
                    <İnput name="productName"/>
                </div>
                <div className="w-1/6">
                    <Desc name="Adet"/>
                    <İnput name="quantity" />
                </div>
            </div>
            <div className="flex gap-5 w-4/5 items-end h-3/5">
                <div>
                    <Desc name="Alış Fiyatı"/>
                    <İnput name="buyPrice" />
                </div>
                <div>
                    <Desc name="Ekstra Maaliyet"/>
                    <İnput name="extraPrice"/>
                </div>
                <div>
                    <Desc name="Satış Fiyatı"/>
                    <İnput name="sellPrice" />
                </div>
                <button className="font-bold text-white bg-green-600 w-1/5 rounded-md h-3/5" type="submit">EKLE</button>
            </div>
        </form>
    </div>
  );
};

export default LeftSection;
