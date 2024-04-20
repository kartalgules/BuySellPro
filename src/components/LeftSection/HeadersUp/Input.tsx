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
        className="bg-blue-300 rounded-md px-2 w-full h-2/6 text-center"
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
