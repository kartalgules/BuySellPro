import { FC } from "react";

interface InputProps {
  id: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ id, name, type, value, onChange }) => {
  return (
    <>
      <input
        className="bg-blue-200 rounded-sm text-center w-full px-2 h-1/2 "
        min={0}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
