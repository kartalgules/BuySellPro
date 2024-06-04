import { FC } from "react";

interface InputProps {
  id: string;
  name: string;
  type: string;
  value: string | number;
  step?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ id, name, type, value, onChange, step }) => {
  return (
    <>
      <input
        className="bg-blue-200 rounded-md text-center mb-1 w-full px-2 lg:h-full"
        min={0}
        id={id}
        name={name}
        type={type}
        step={step}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
