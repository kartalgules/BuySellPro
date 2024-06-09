import { FC } from "react";
import HeadersUp from "./LeftSection/HeadersUp";
import HeadersDown from "./LeftSection/HeadersDown";
import { useTranslation } from "react-i18next";

const LeftSection: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-full bg-green w-screen items-stretch flex-col xl:w-11/12 xl:m-5 border-b-4">
      <div className="w-1/2 h-1/6 mt-1 mb-3 text-center mx-auto">
        <h1 className="font-semibold sm:text-sm md:text-xl pb-1 border-b-4">
          {t('urun_hesaplama')}
        </h1>
      </div>
      <HeadersUp />
      <HeadersDown />
    </div>
  );
};

export default LeftSection;
