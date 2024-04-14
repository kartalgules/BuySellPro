import { FC } from "react";

const HeadersDown: FC = () => {
  return (
    <div className="h-full w-full flex justify-center text-center py-10">
      <div className="w-1/4 h-3/5 flex flex-col gap-5 font-bold">
        <div className="h-full border-slate-500 border-x-2 rounded-md">
            <h2>Toplam Maaliyet</h2>
            <h1 className="text-2xl text-red-700">100 TL</h1>
        </div>
        <div className="h-full border-slate-500 border-x-2 rounded-md">
          <h2>Toplam Kâr</h2>
          <h1 className="text-2xl text-green-700">100 TL</h1>
        </div>
        <div className="h-full border-slate-500 border-x-2 rounded-md">
          <h2>Toplam Ciro</h2>
          <h1 className="text-2xl text-blue-700">100 TL</h1>
        </div>
      </div>
    </div>
  );
};

export default HeadersDown;
