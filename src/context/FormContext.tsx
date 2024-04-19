import { createContext, useState, useContext, PropsWithChildren, SetStateAction, FC } from 'react';

export interface FormData {
  productName: string;
  quantity: number;
  buyPrice: number;
  extraCost: number;
  sellPrice: number;
}

interface FormDataContextType {
  formData: FormData[];
  setFormData: React.Dispatch<SetStateAction<FormData[]>>;
}

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export const useFormDataContext = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormDataContext must be used within a FormDataProvider');
  }
  return context;
};

export const FormDataProvider : FC = ({ children } : PropsWithChildren) => {
  const [formData, setFormData] = useState<FormData[]>([]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};