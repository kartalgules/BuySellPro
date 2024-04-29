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
    console.log(i18n.language)
  return (
    <div className="flex w-full h-16 bg-slate-100">
      <div className="flex w-1/12 ml-10 items-center">
        <img className="h-12" src="../../assets/basket.png" alt="logo" />
        <h1 className="font-bold text-lg">BuySellPro</h1>
      </div>
      <div className="flex gap-5 font-semibold justify-end text-lg w-11/12 pr-5 items-center h-full ">
        <button className="flex justify-center items-center bg-slate-300 w-28 h-9 rounded-lg relative cursor-pointer" onClick={() => langHandleChance()}>
          <span className="text-base w-3/4 text-center" >{t('dil')}</span>
          <RiArrowDropDownLine className="text-2xl" />
        </button>
        <button className="flex justify-center items-center bg-slate-300 w-28 h-9 rounded-lg relative cursor-pointer">
          <span className="text-base pl-2  w-3/4 text-center">{t('tema')}</span>
          <RiArrowDropDownLine className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
