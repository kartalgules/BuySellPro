import { FC } from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Desc : FC<LabelProps> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor} className="text-slate-500 font-bold w-full text-center">{children}</label>
};

export default Desc;