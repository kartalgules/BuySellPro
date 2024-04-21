import { FC } from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Desc : FC<LabelProps> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor} className="text-slate-700 font-semibold  w-full text-center text-xs xl:text-sm">{children}</label>
};

export default Desc;