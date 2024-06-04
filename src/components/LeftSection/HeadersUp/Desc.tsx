import { FC } from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Desc : FC<LabelProps> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor} className="text-slate-700 font-bold  w-full text-center text-xs lg:text-sm xl:text-sm">{children}</label>
};

export default Desc;