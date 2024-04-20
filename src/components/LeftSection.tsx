import { FC } from "react";
import HeadersUp from "./LeftSection/HeadersUp";
import HeadersDown from "./LeftSection/HeadersDown";

const LeftSection: FC = () => {
  return (
    <div className="flex h-4/5 w-2/5 flex-col m-auto">
      <div className="w-4/5 h-1/5 text-center mx-auto">
        <h1 className="font-semibold text-xl border-b-4">ÜRÜN HESAPLAMA</h1>
      </div>
      <HeadersUp />
      <HeadersDown />
    </div>
  );
};

export default LeftSection;
