import { FC } from "react";
import HeadersUp from "./LeftSection/HeadersUp";
import HeadersDown from "./LeftSection/HeadersDown";
import { useTranslation } from "react-i18next";

const LeftSection: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-4/6 w-screen items-stretch flex-col xl:w-11/12 xl:m-5 border-b-4">
      <div className="w-4/5 h-1/12 pt-3 pb-3 text-center mx-auto">
        <h1 className="font-semibold sm:text-sm md:text-md lg:text-xl p-2 border-b-4">
          {t('urun_hesaplama')}
        </h1>
      </div>
      <HeadersUp />
      <HeadersDown />
    </div>
  );
};

export default LeftSection;
