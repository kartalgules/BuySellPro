import { RiArrowDropDownLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const langHandleChance = async () => {
        if( i18n.language === "tr") {
            await i18n.changeLanguage("en")
        }else{
            await i18n.changeLanguage("tr")
        }
    }
  return (
    <div className="flex w-full h-12 md:h-16  bg-slate-100">

      <div className="flex w-2/12 ml-5 md:ml-10 items-center">
        <img className="w-9" src="../../assets/basket.png" alt="logo" />
        <h1 className="font-bold text-sm md:text-lg">BuySellPro</h1>
      </div>

      <div className="flex gap-5 font-semibold justify-end text-lg w-11/12 pr-5 md:pr-10 items-center h-full ">
        <button className="flex justify-center items-center bg-slate-300 w-12 md:w-28 h-7 md:h-9 rounded-lg relative cursor-pointer" onClick={() => langHandleChance()}>
          <span className="text-xs md:text-base w-3/4 text-center" >{t('dil')}</span>
          <RiArrowDropDownLine className="text-2xl" />
        </button>

        <button className="flex justify-center items-center bg-slate-300 w-14 md:w-28 h-7 md:h-9 rounded-lg relative cursor-pointer">
          <span className="text-xs md:text-base pl-1 md:pl-2 w-3/4 text-center">{t('tema')}</span>
          <RiArrowDropDownLine className="text-2xl" />
        </button>

      </div>

    </div>
  );
};

export default Navbar;