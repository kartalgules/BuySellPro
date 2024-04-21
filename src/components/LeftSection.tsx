import { FC } from "react";
import HeadersUp from "./LeftSection/HeadersUp";
import HeadersDown from "./LeftSection/HeadersDown";

const LeftSection: FC = () => {
  return (
    <div className="flex h-2/3 w-screen flex-col">
      <div className="w-4/5 h-max pt-6 pb-3 text-center mx-auto">
        <h1 className="font-semibold sm:text-sm md:text-md lg:text-xl p-2 border-b-4">
          ÜRÜN HESAPLAMA
        </h1>
      </div>
      <HeadersUp />
      <HeadersDown />
    </div>
  );
};

export default LeftSection;
